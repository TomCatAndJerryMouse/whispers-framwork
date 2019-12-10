import React, { Component } from "react";
import {HashRouter,hashHistory} from "react-router-dom";
import {
    Column,
    Footer,
    Button,
    Header,
    Layout,
    Menu,
    RouteLoader,
    Row,
} from "../index";
import constants from "../constants";
import Pages from "./route";
import "./index.less"
const data = [
    {
        key:"index",
        name:"网站首页",
        url:"/index",
    },
    {
        key:"product",
        name:"产品中心",
        url:"/product",
    },
    {
        key:"news",
        name:"新闻中心",
        url:"/news",
    },
    {
        key:"about",
        name:"关于我们",
        url:"/about",
    },
    {
        key:"contact",
        name:"联系我们",
        url:"/contact",
    },
 ];
 /**
  * 门户网站模板
  */
export default class index extends Component {
    render() {
        return (
            <HashRouter history={hashHistory}>
                <Layout>
                    <Header>
                        <Menu data={data} mode={constants.MENU_MODDE_HORIZONTAL} isHashJump={true} hasIcon={true} title={"某某有限公司"}/>
                    </Header>
                    <Row>
                        <Column col={12}>
                            <img src={require("../../img/bg1.jpg")}/>
                            <div className="framworkContact">
                                <Button>{"联系我们"}</Button>
                            </div>
                            <div className="framworkDes">
                                <Row>
                                    <Column col={2}>&nbsp;</Column>
                                    <Column col={2}>
                                        <div className="framworkDesChild">
                                            <img src={require("../../img/zheng.png")}/>
                                            <div>{"服务保证"}</div>
                                        </div>
                                    </Column>
                                    <Column col={2}>
                                        <div className="framworkDesChild">
                                            <img src={require("../../img/kuai.png")}/>
                                            <div>{"配送迅速"}</div>
                                        </div>
                                    </Column>
                                    <Column col={2}>
                                        <div className="framworkDesChild">
                                            <img src={require("../../img/zhiliang.png")}/>
                                            <div>{"保质保量"}</div>
                                        </div>
                                    </Column>
                                    <Column col={2}>
                                        <div className="framworkDesChild">
                                            <img src={require("../../img/shihui.png")}/>
                                            <div>{"价格实惠"}</div>
                                        </div>
                                    </Column>
                                    <Column col={2}>&nbsp;</Column>
                                </Row>
                            </div>
                        </Column>
                    </Row>
                    <RouteLoader pages={Pages}/>
                    <Footer>CopyRight@2019</Footer>
                </Layout>
            </HashRouter>
        )
    }
}