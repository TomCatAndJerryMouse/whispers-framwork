import React, { Component } from "react";
import "./index.less";
import {
    Column,
    Footer,
    Button,
    Input,
    Layout,
    Row,
    Header,
    LocaleProvider,
} from "../../index";
import * as nls from "../nls";
let i18n="";
let _locale="";
/**
 * 登录页面
 */
export default class index extends Component {

    constructor(props) {
        i18n = LocaleProvider.loaderNls(nls);
        _locale = LocaleProvider._locale;
        super(props);
        this.state = { 
            username:"",
            pwd:"",
         }
    }

    login(){

    }
    render() {
        return (
            <Layout>
                <Header title="Wispers"/>
                <div className="login">
                    <Row>
                        <Column col={12}>&nbsp;</Column>
                    </Row>
                    <Row>
                        <Column col={12}>{i18n.ACCOUT_LOGIN_LABLE}</Column>
                    </Row>
                    <Row>
                        <Column col={12}><Input type="text" placeholder={i18n.ACCOUT}/></Column>
                    </Row>
                    <Row>
                        <Column col={12}><Input type="password" placeholder={i18n.PASSWORD}/></Column>
                    </Row>
                    <Row>
                        <Column col={12}><Button width={"100%"} onClick={this.login.bind(this)}>{i18n.LOGIN_LABLE}</Button></Column>
                    </Row>
                </div>
                <Footer>CopyRight@2019</Footer>
            </Layout>
        )
    }
}