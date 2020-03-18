import React, { Component } from "react";
import {HashRouter,hashHistory,Route,Redirect} from "react-router-dom";
import { connect } from 'react-redux'
import Login from "./Login/index";
import Main from "./Main/index";
import {
    loginSaga,
    validateSaga,
    logOutSaga
} from "../../actions/index"

// 建立一个从（外部的）state对象到（展示型组件的）props对象的映射关系
const mapStateToProps = state => ({
    state:state
})

// 建立展现型组件的参数到store.dispatch方法的映射
const mapDispatchToProps = dispatch => ({
    validate:callback=>{
        dispatch(validateSaga())
    },
    loginOut:callback=>{
        dispatch(logOutSaga())
    },
})

/**
 * 框架主入口，有判断是否登录逻辑
 */
class index extends Component {
    constructor(props){
        super(props);
        console.log("props.store");
        console.log(props);
        this.state = {
            isLogin:false,
        }
    }

    componentWillMount(){
        console.log("validate");
        this.props.validate();
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
        console.log("render "+this.props.state);
        return (
            <HashRouter history={hashHistory}>
                {this.renderComponent()}
            </HashRouter>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(index);