import React, { Component } from "react";
import {
    Body,
    Footer,
    Layout,
    Menu,
    Header,
    RouteLoader,
} from "../../index";
import constants from "../../constants";
import * as i18nloader from "../../i18nloader";

import Pages from "./route";
const data = [
    {
        key:"home",
        name:"功能",
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
        return (
            <Layout>
                <Header>
                    <Menu data={data} mode={constants.MENU_MODDE_HORIZONTAL} isHashJump={true} hasIcon={true} title={"Wispers"}/>
                </Header>
                <Body>
                    <RouteLoader pages={Pages}/>
                </Body>
                <Footer>CopyRight@2019</Footer>
            </Layout>
        )
    }
}