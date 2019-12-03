import React, { Component } from "react";
import Layout from  "../Layout/index";
import Header from  "../Header/index";
import Body from  "../Body/index";
import Footer from  "../Footer/index";
import Menu from  "../../components/Menu/index";
import constants from "../../constants/index";
import {HashRouter,hashHistory} from "react-router-dom";
import RouteLoader from "../../components/RouteLoader"

import Pages from "./route";
const data = [
    {
        key:"home",
        name:"Home",
        url:"/home",
    },
    {
        key:"home1",
        name:"Home1",
        url:"/home1",
    },
    {
        key:"home2",
        name:"Home2",
        url:"/home2",
    },
    {
        key:"home3",
        name:"Home3",
        url:"/home3",
    },
 ];
export default class index extends Component {
    render() {
        return (
            <HashRouter history={hashHistory}>
                <Layout>
                    <Header>
                        <Menu data={data} mode={constants.MENU_MODDE_HORIZONTAL} isHashJump={true} hasIcon={true} title={"Wispers"}/>
                    </Header>
                    <Body>
                        <RouteLoader pages={Pages}/>
                    </Body>
                    <Footer>CopyRight@2019</Footer>
                </Layout>
            </HashRouter>
        )
    }
}