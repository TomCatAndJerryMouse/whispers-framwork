import React, { Component } from "react";
import {HashRouter,hashHistory,Route,Redirect} from "react-router-dom";
import Login from "./Login/index";
import Main from "./Main/index";

/**
 * 框架主入口，有判断是否登录逻辑
 */
export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{name:"admin"},
        }
    }
    // 通过鉴权信息渲染界面
    renderComponent()
    {
        if (this.state.user) {
            return (
                    <Main/>
            )
        } 
        else 
        {
            return (
                <Redirect from={"/*"} to={"/"}/>,
                <Route path="/" component={Login}/>
            )
        }
    }
    render() {
        return (
            <HashRouter history={hashHistory}>
                {this.renderComponent()}
            </HashRouter>
        )
    }
}