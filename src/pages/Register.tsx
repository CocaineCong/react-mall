import React from 'react';
import {Button, message, Form, Input, Alert} from 'antd';
import {LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import "../assets/styles/login.scss"
import {ProFormCaptcha} from "@ant-design/pro-components";
import {render} from "react-dom";
import {values} from "lodash";
import {login, register} from "../api/user";
import {Code} from "../constant";
import {save} from "../store/user";
import {useDispatch} from "react-redux";
import { AxiosResponse } from 'axios';


const Register: React.FC = () =>  {
    const navigate = useNavigate()
    const onFinish=async (values:{
        user_name: string
        nick_name: string
        password: string
        key: string
    })=>{
        const data:AxiosResponse<API.CommonResp> = await register({...values});
        if (data.status === Code.SuccessCode) {
            message.success("注册成功")
            setTimeout(()=>{
                navigate('/login')
            } ,800)
        } else {
            message.error(data.data.msg)
        }
    }

    return (
        <div className="register">
            <div className="register_box">
                <div className='register_form'>
                    <h1>REGISTER</h1>
                    <h3>Hey! FanOne Mall Here: </h3>

                    <Form
                        name="basic"
                        onFinish={onFinish}
                        autoComplete="off"
                    >

                        <Form.Item
                            name="userName"
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
                            name="nickName"
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
                            <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码"/>
                        </Form.Item>

                        <Form.Item
                            name="key"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入支付密码!',
                                },
                            ]}
                        >
                            <Input.Password size='large' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请再次输入密码"/>
                        </Form.Item>

                        <Form.Item>
                            <Link to="/login">已有账号?立即登录</Link>
                        </Form.Item>

                        <Form.Item>
                            <Button size='large' type="primary" htmlType="submit" block>
                                注册
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
};

export default Register