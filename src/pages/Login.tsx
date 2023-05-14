import React, {useState} from 'react';
import {Button, message, Form, Input, Tabs, Divider, Space} from 'antd';
import {
    LockOutlined,
    MailOutlined,
    UserOutlined, WeiboOutlined
} from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import "../assets/styles/login.scss"
import {login} from "../api/user";
import {ProFormCaptcha} from "@ant-design/pro-components";
import {Code} from "../constant";
import {save} from "../store/user";
import {useDispatch} from "react-redux";
import { AxiosResponse } from 'axios';

const LoginBody: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [loginType, setLoginType] = useState('account');
    const loginByEmail=()=>{

    }

    const loginByAccount = async (values: {
        user_name: string;
        password: string;
    }) => {
        const data:any = await login({...values});
        if (data.status === Code.SuccessCode) {
            dispatch(save({...data.data.user, access_token: data.data.access_token,refresh_token:data.data.refresh_token}));
            message.success("登陆成功")
            navigate('/');
        } else {
            message.error("账号名/密码错误")
        }
    };

    const items = [
        { label: '账户密码登录', key: 'account',  },
        { label: '邮箱登录', key: 'email', },
    ];

    const iconStyles = {
        color: 'rgba(0, 0, 0, 0.2)',
        fontSize: '18px',
        verticalAlign: 'middle',
        cursor: 'pointer',
        bottom:'10px',
    };

    return (
        <div className="login">
            <div className="loginCardBox">
                <div className="loginCardTitle">去看看大千万物</div>
                <div className="loginCardSubTitle">所想所寻,应有尽有</div>
                <div className="loginCardAction">
                    <Button className="loginCardButton">
                        <span>去看看</span>
                    </Button>
                </div>
            </div>
            <div className="loginBox">
                <div className='loginForm'>
                    <h1 className={'loginFormText'}> 登 陆 </h1>
                    <p className={'loginFormTextSub'}>FanOne Mall</p>
                    <Tabs centered activeKey={loginType} onChange={setLoginType} items={items}></Tabs>

                    {
                        loginType === 'account' && (
                            <Form
                                name="account"
                                initialValues={{remember: true,}}
                                onFinish={loginByAccount}
                                autoComplete="off"
                            >

                                <Form.Item
                                    name="user_name"
                                    rules={[{
                                        required: true,
                                        message: '请输入用户名!'},
                                        {
                                            pattern: /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/,
                                            message: '字母开头,允许6-16字符,允许字母数字下划线！',
                                        },
                                    ]}
                                >
                                    <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"/>
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入密码!',
                                        },
                                    ]}
                                >
                                    <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码"/>
                                </Form.Item>
                                <Form.Item>
                                    <Link style={{
                                        float: 'right',
                                    }} to="/register">还没账号?立即注册</Link>
                                </Form.Item>
                                <Form.Item>
                                    <Button size='large' type="primary" htmlType="submit" block>
                                        登陆
                                    </Button>
                                </Form.Item>
                            </Form>
                        )
                    }

                    {
                        loginType === 'email' &&
                        (
                            <Form name="email"
                                  initialValues={{remember: true,}}
                                  onFinish={loginByEmail}
                                  autoComplete="off">

                                <Form.Item
                                    name="email"
                                    rules={[{
                                        required: true, //TODO 检验邮箱格式
                                        message: '请输入邮箱！',
                                        },
                                    ]}>
                                    <Input size='large' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="请输入邮箱"/>
                                </Form.Item>

                                <ProFormCaptcha
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className={'prefixIcon'}/>,
                                    }} captchaProps={{
                                        size: 'large',
                                    }} placeholder={'请输入验证码'}
                                    captchaTextRender={(timing, count) => {
                                        if (timing) {
                                            return `${count} ${'获取验证码'}`;
                                        }
                                        return '获取验证码';
                                    }} name="captcha" rules={[{
                                        required: true,
                                        message: '请输入验证码！',
                                    },]}
                                    onGetCaptcha={async () => {
                                        message.success('获取验证码成功!验证码为:1234');
                                    }} />

                                <Form.Item>
                                    <Link style={{
                                        float: 'right',
                                    }} to="/register">还没账号?立即注册</Link>
                                </Form.Item>

                                <Form.Item>
                                    <Button size='large' type="primary" htmlType="submit" block>
                                        登陆
                                    </Button>
                                </Form.Item>

                            </Form>
                        )
                    }

                    <Divider plain>
                      <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                        其他登录方式
                      </span>
                    </Divider>

                    <Space align="center" size={24}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: 40,
                            width: 40,
                            border: '1px solid #D4D8DD',
                            borderRadius: '50%',
                        }}>
                            <WeiboOutlined style={Object.assign(Object.assign({}, iconStyles), { color: '#333333' })}/>
                        </div>
                    </Space>


                </div>
            </div>
        </div>
    )
};

const Login = () => {
    return (
        <>
                <LoginBody/>
        </>
    );
};

export default Login;