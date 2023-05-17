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
                <Content style={{overflow: 'initial' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;