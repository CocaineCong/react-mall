import {Menu, MenuProps} from "antd";
import {
    AppstoreTwoTone, AudioTwoTone,
    BankTwoTone,
    CarryOutTwoTone,
    DashboardTwoTone, MehTwoTone, MessageTwoTone,
    SmileTwoTone,
    StarTwoTone,
} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import Sider from "antd/es/layout/Sider";
import {Link, redirect, useLocation, useNavigate} from "react-router-dom";

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
    getItem('个人资料', '/PersonCenter/PersonInfo', <SmileTwoTone />),
    getItem('邮箱与头像', '/PersonCenter/PersonEmail', <AudioTwoTone />),
    getItem('个人作品', '/PersonCenter/PersonStory', <AppstoreTwoTone />),
    getItem('个人时间轴', '/PersonCenter/PersonTimeline', <DashboardTwoTone />),
    getItem('我的组织', '/PersonCenter/PersonOrg', <BankTwoTone />),
    getItem('我的收藏夹', '/PersonCenter/PersonFavorite', <StarTwoTone />),
    getItem('我的邀请', '/PersonCenter/PersonInvite', <CarryOutTwoTone />),
    getItem('评论相关', '/PersonCenter/PersonComment', <MessageTwoTone />),
    getItem('开发中...', '/PersonCenter/Deving', <MehTwoTone />),
];



function PersonCenterSider(){
    const location = useLocation()
    const navigateTo = useNavigate()

    // 一般加个空数组就是为了模仿componentDidMounted
    useEffect(()=>{
        let path = location.pathname;
        let key = path.split('/')[1];
    }, [location.pathname])
    
    const menuClick = (e:{key:string})=>{
        navigateTo(e.key)
    }
    
    return (
        <Sider
            className={'personCenterSider'}>
            <div className="logo" />
            <Menu
                style={{
                    height: '100%',
                }}
                selectedKeys={[location.pathname]}
                onClick={menuClick}
                items={items}
            >
            </Menu>
        </Sider>
    )
}

export default PersonCenterSider;