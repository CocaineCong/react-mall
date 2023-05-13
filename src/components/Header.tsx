import React,{useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {DownOutlined} from "@ant-design/icons";
import {Dropdown, Space,message} from "antd";
import '../assets/styles/header.scss'
import SearchModel from "./Search";

const Header: React.FC = () =>{
    const [avatar,setAvatar]=useState('https://q1.qlogo.cn/g?b=qq&nk=294350394&s=640')
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
        localStorage.removeItem("access_token");
        message.success('退出成功,即将返回登录页');
        setTimeout(()=>navigate('/Login'),800)
    };

    const items = [
        {
            key: '0',
            label: (
                <Link target="_blank" to={'/PersonSpace'}>
                    我的主页
                </Link>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: '1',
            label: (
                <Link target="_blank" to={'/PersonCenter'}>
                    个人中心
                </Link>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: (
                <Link target="_blank" to={'/ProductCreate'}>
                    发布商品
                </Link>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: (
                <Link target="_blank" to={'/CartList'}>
                    我的购物车
                </Link>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: '10',
            label: (
                <a target="_blank" onClick={logout} >
                    退出登录
                </a>
            ),
        },

    ];

    return (
        <header className={'headerContainer'}>
            <div className={'headerCenter'}>
                <SearchModel></SearchModel>
            </div>
            <div className={'headerRight'}>
                <Dropdown
                    menu={{
                        // @ts-ignore
                        items,
                    }}
                >
                    <a  onClick={(e) => e.preventDefault()}>
                        <Space>
                            <img className={'headerImgBox'} src={avatar} alt=""/>
                            <span>{userName}</span>
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </header>
    )
}

export default Header;