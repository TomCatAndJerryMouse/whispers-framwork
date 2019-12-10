import React, { Component } from "react";
import {
    Column,
    Footer,
    Button,
    Layout,
    Row,
} from "../../index";
import "./index.less";
/**
 * 登录页面
 */
export default class index extends Component {

    login(){
    }
    render() {
        return (
            <Layout>
                <div className="login">
                    <Row>
                        <Column col={12}>&nbsp;</Column>
                    </Row>
                    <Row>
                        <Column col={12}>账号登录</Column>
                    </Row>
                    <Row>
                        <Column col={12}><input type="text"></input></Column>
                    </Row>
                    <Row>
                        <Column col={12}><input type="password"></input></Column>
                    </Row>
                    <Row>
                        <Column col={12}><Button width={"100%"} onClick={this.login.bind(this)}>登录</Button></Column>
                    </Row>
                </div>
                <Footer>CopyRight@2019</Footer>
            </Layout>
        )
    }
}