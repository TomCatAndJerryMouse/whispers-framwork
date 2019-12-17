import React, { Component } from "react";
import Pages from "./route";
import {
    Body,
    Footer,
    Layout,
    Header,
    RouteLoader,
    LocaleProvider,
} from "../../index";
import * as nls from "./nls";
const i18n = LocaleProvider.loaderNls(nls);
const data = [
    {
        key:"home",
        name:i18n.FUNCTION,
        url:"/home",
    },
    {
        key:"home1",
        name:"功能",
        url:"/home1",
    },
    {
        key:"home2",
        name:"功能",
        url:"/home2",
    },
    {
        key:"home3",
        name:"功能",
        url:"/home3",
    },
 ];
/**
 * 登录后主页面渲染页面
 */
export default class index extends Component {
    render() {
        console.log("render main");
        return (
            <Layout>
                <Header data={data} title="Wispers"/>
                <Body>
                    <RouteLoader pages={Pages}/>
                </Body>
                <Footer>CopyRight@2019</Footer>
            </Layout>
        )
    }
}