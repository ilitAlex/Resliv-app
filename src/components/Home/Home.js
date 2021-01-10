import React from "react";
import { Layout } from "antd";


import "antd/dist/antd.css";
import NavLink from "react-router-dom/NavLink";

const { Header } = Layout;


let Home = () => {

    return <Layout>
        <Header>
            <NavLink to={'/'} style={{ width: 200, margin: '0 10px' }}>Home</NavLink>
            <NavLink to={'/employes'} style={{ width: 200, margin: '0 10px' }}>Employes</NavLink>
        </Header>

    </Layout>

};

export default Home;

