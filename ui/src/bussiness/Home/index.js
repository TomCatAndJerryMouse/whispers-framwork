import React, { Component } from "react";
import Layout from  "../../components/Layout";
import Header from  "../../components/Header";
import Container from  "../../components/Container";
import Footer from  "../../components/Footer";
import Menu from  "../../components/Menu";

export default class index extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <Menu/>
                </Header>
                <Container>sss</Container>
                <Footer>CopyRight@2019</Footer>
            </Layout>
        )
    }
}
