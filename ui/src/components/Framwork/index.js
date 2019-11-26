import React, { Component } from "react";
import Layout from  "../Layout/index";
import Header from  "../Header/index";
import Body from  "../Body/index";
import Footer from  "../Footer/index";
import Menu from  "../../components/Menu/index";
import constants from "../../constants/index";
import {HashRouter,Route,Switch,hashHistory,Redirect} from "react-router-dom";
import Home from "../../bussiness/Home/index";
import Home1 from "../../bussiness/Home1/index";

const Pages = require("./loader").default;
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
        console.log(Pages.keys());
        return (
            <HashRouter history={hashHistory}>
                <Layout>
                    <Header>
                        <Menu data={data} mode={constants.MENU_MODDE_HORIZONTAL} />
                    </Header>
                    <Body>
                        <Switch>
                            {Pages.keys().map(key=>{
                                const reoute = Pages(key,index).default;
                                return <Route key={index} {...reoute}></Route>;
                            })}
                            <Redirect to="/home" />
                        </Switch>
                    </Body>
                    <Footer>CopyRight@2019</Footer>
                </Layout>
            </HashRouter>
        )
    }
}
