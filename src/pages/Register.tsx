import React from 'react';
import {Button, message, Form, Input, Alert} from 'antd';
import {LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import "../assets/styles/login.scss"
import {login, register} from "../api/user";
import {Code} from "../constant";
import { AxiosResponse } from 'axios';


const Register: React.FC = () =>  {
    const navigate = useNavigate()
    const onFinish=async (values:{
        user_name: string
        nick_name: string
        password: string
        key: string
    })=>{
        const data:any = await register({...values});
        if (data.status === Code.SuccessCode) {
            message.success("注册成功")
            setTimeout(()=>{
                navigate('/login')
            } ,800)
        } else {
            message.error(data?.msg)
        }
    }

    return (
        <div className="register">
            <div className="registerBox">
                <div className='registerForm'>
                    <h1>注 册</h1>
                    <h2> Welcome To FanOne Mall </h2> 
                    <br></br>
                    <br></br>
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        autoComplete="off"
                    >

                        <Form.Item
                            name="user_name"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/,
                                    message: '字母开头,允许6-16字符,允许字母数字下划线！',
                                },
                            ]}
                        >
                            <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"/>
                        </Form.Item>

                        <Form.Item
                            name="nick_name"
                            rules={[
                                {
                                    required: true,
                                    pattern: /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/,
                                    message: '字母开头,允许6-16字符,允许字母数字下划线！',
                                },
                            ]}
                        >
                            <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入昵称"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入登陆密码!',
                                },
                            ]}
                        >
                            <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入登陆密码"/>
                        </Form.Item>

                        <Form.Item
                            name="key"
                            rules={[
                                {
                                    required: true,
                                    // pattern: /^[a-zA-Z][a-zA-Z0-9_]{15}$/,
                                    message: '请输入支付密码!支付密码只能为16位!',
                                },
                            ]}
                        >
                            <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入支付密码"/>
                        </Form.Item>

                        <Form.Item>
                            <Link to="/login">已有账号?立即登录</Link>
                        </Form.Item>

                        <Form.Item>
                            <Button size='large' type="primary" htmlType="submit" block>
                                注 册
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
};

export default Register