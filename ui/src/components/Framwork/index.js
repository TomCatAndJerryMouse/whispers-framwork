import React, { Component } from "react";
import Layout from  "../Layout/index";
import Header from  "../Header/index";
import Body from  "../Body/index";
import Footer from  "../Footer/index";
import Container from  "../Container/index";
import Sider from  "../Sider/index";

import Menu from  "../Menu/index";
import constants from "../../constants/index";

export default class index extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <Menu mode={constants.MENU_MODDE_HORIZONTAL}/>
                </Header>
                <Body>
                    <Sider>
                        <Menu mode={constants.MENU_MODDE_VERTICAL}/>
                    </Sider>
                    <Container>ssssss</Container>
                </Body>
                <Footer>CopyRight@2019</Footer>
            </Layout>
        )
    }
}
