import React, { Component } from "react";
import Layout from  "../../components/Layout/index";
import Body from  "../../components/Body/index";
import Row from  "../../components/Row/index";
import Col from  "../../components/Column/index";
import Footer from  "../../components/Footer/index";
import Button from "../../components/Form/Button/index";
import "./index.less";
/**
 * 登录页面
 */
export default class index extends Component {
    render() {
        return (
            <Layout>
                <div className="login">
                    <Row>
                        <Col col={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col col={12}>账号登录</Col>
                    </Row>
                    <Row>
                        <Col col={12}><input type="text"></input></Col>
                    </Row>
                    <Row>
                        <Col col={12}><input type="password"></input></Col>
                    </Row>
                    <Row>
                        <Col col={12}><Button width={"100%"}>登录</Button></Col>
                    </Row>
                </div>
                <Footer>CopyRight@2019</Footer>
            </Layout>
        )
    }
}