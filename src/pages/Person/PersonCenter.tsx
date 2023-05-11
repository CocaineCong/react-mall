import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import PersonCenterSider from './PersonCenterSider'
import '../../assets/styles/personCenter.scss'
import {Outlet, useRoutes} from "react-router-dom";
import PersonInfoModel from "./PersonInfo";
import Header from "../../components/Header"
const { Content } = Layout;


const PersonCenter: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Header />
            <Layout>
                <PersonCenterSider/>

                <Layout className="site-layout">
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}>
                        <Outlet />
                    </Content>
                </Layout>

            </Layout>
        </div>
    );
};
export default PersonCenter;
