import React, { Component } from "react";
import {HashRouter,hashHistory,Route,Redirect} from "react-router-dom";
import { connect } from 'react-redux'
import Login from "./Login/index";
import Main from "./Main/index";
import fetch from "../../utils/fetch/index";
import cfg from "../../configs/envConfigs";
import user from "../../actions/index"
/**
 * 框架主入口，有判断是否登录逻辑
 */
class index extends Component {
    constructor(props){
        super(props);
        console.log("props.store");
        console.log(props.store);
        this.state = {
            isLogin:false,
        }
    }
    
    componentWillMount(){
       
        fetch(cfg.baseUrl+":8080/rest/validate").then((data)=>{
            if (data.code === "00001")
            {
                console.log("11111");
                this.props.login();
            } else {
                console.log(this.props.logout);
                this.props.logout();
            }
        });
    }
    // 通过鉴权信息渲染界面
    renderComponent()
    {
        if (this.state.isLogin) {
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

// 建立一个从（外部的）state对象到（展示型组件的）props对象的映射关系
const mapStateToProps = state => {
    return {
        isLogin:state.isLogin,
    }
}

// 建立展现型组件的参数到store.dispatch方法的映射
const mapDispatchToProps = dispatch =>{
    return {
        login: () => {
            dispatch(user.login)
        },
        logout:()=>{
            dispatch(user.logout)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(index);