import React from 'react';
import {Divider, Layout} from 'antd';
import {Outlet} from "react-router-dom";
import Header from "../components/Header"
import HomeSider from "../components/HomeSider"

const {  Content } = Layout;

const Home: React.FC = () => {

    return (
        <Layout hasSider>
            <HomeSider />
            <Layout className="site-layout" style={{ marginLeft: 200,background:'white' }}>
                <Header  />
                <Divider plain></Divider>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, textAlign: 'center' }}>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;