import React,{useState,useEffect} from "react";
import {Layout, message} from "antd";
import {DownOutlined, ShoppingCartOutlined, SmileOutlined} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import defaultAvatar from '../assets/defaultAvatar.jpg'
import {Link,useNavigate} from "react-router-dom";
import '../assets/base.less'

export default function Header() {
    const [avatar,setAvatar]=useState(defaultAvatar)
    const [userName,setUserName]=useState("游客")
    const navigate = useNavigate();

    useEffect(()=>{
        let username1 = localStorage.getItem('user_name')
        let avatar1 = localStorage.getItem('avatar')
        if(username1){
            setUserName(username1)
        }
        if(avatar1){
            setAvatar(avatar1)
        }
    },[]);

    // 退出登录
    const logout = ()=>{
        localStorage.removeItem("token");
        message.success('退出成功,即将返回登录页');
        setTimeout(()=>navigate('/login'),800)
    };

    const items = [
        {
            key: '0',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                    修改资料
                </a>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: '1',
            label: (
                <a target="_blank" onClick={logout} >
                    退出登录
                </a>
            ),
        },
    ];

    return(
        <header>
            <div className="right">
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <img src={avatar} className="avatar" alt=""/>
                            <span>{userName}</span>
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className='headerLeft'>
                <Link to='/cart' target='_blank'>
                    <ShoppingCartOutlined />
                </Link>
            </div>
        </header>
    )
}