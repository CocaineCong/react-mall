import {Footer} from "antd/es/layout/layout";
import React, {useEffect} from 'react';
import './App.css';
import {useLocation, useNavigate, useRoutes} from "react-router-dom";
import routes from "./router";
import {message} from "antd";
import {Layout} from "antd";

function App() {
  return (
      <div className="App">
          <Layout>
            <BeforeRouterEnter />
          </Layout>
        <Footer className="footer">FanOneMall | Copyright &copy; 2023 Author FanOne</Footer>
      </div>
  );
}

function BeforeRouterEnter(){
  // TODO如果没有access_token就跳到登陆页面
  const outlet = useRoutes(routes)
  return outlet;
}

export default App;