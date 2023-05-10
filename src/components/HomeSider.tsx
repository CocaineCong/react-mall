import {Menu, MenuProps} from "antd";
import {
    AppstoreTwoTone,
    MehTwoTone,
    SmileTwoTone,
} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import Sider from "antd/es/layout/Sider";
import {Link, useLocation, useNavigate} from "react-router-dom";


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('主页', '/Product/List', <SmileTwoTone />),
    getItem('关注的店铺', '/ProductBoss/Star', <AppstoreTwoTone />),
    getItem('开发中', '/Deving', <MehTwoTone />),
];

function HomeSider(){
    const location = useLocation()
    const navigateTo = useNavigate()
    const [defaultKey, setDefaultKey] = useState<string>('/Story/List')
    
    // 一般加个空数组就是为了模仿componentDidMounted
    useEffect(()=>{
        let path = location.pathname;
        let key = path.split('/')[1];
        setDefaultKey(key)
    }, [location.pathname])
    
    const menuClick = (e:{key:string})=>{
        setDefaultKey(e.key)
        navigateTo(e.key)
    }
    
    return (
        <Sider
            style = {{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                }}
           theme="light"
        >
        <div style={{ height: 32, margin: 16}}> <h1>FanOneMall</h1> </div>
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={[location.pathname]}
                onClick={menuClick}
                items={items}
            >
            </Menu>
        </Sider>
    )
}

export default HomeSider;