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
import { connect } from 'react-redux'
import {
    loginSaga,
} from "../../../actions/index"
let i18n="";
let _locale="";
// 建立一个从（外部的）state对象到（展示型组件的）props对象的映射关系
const mapStateToProps = state => ({
    state:state
})

// 建立展现型组件的参数到store.dispatch方法的映射
const mapDispatchToProps = dispatch => ({
    login:(data,callback)=>{
        dispatch(loginSaga(data))
    },
})

/**
 * 登录页面
 */
class index extends Component {

    constructor(props) {
        i18n = LocaleProvider.loaderNls(nls);
        _locale = LocaleProvider._locale;
        super(props);
        this.state = { 
            username:"",
            password:"",
         }
    }

    // 登录
    login(){
        this.props.login({"username":this.state.username,"password":this.state.password});
    }

    // 更新登录信息
    loadLoginInfo(e){
        if (e.target.id === "username") {
            this.setState({
                username:e.target.value,
            })
        } else if (e.target.id === "password") {
            this.setState({
                password:e.target.value,
            })
        }
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
                        <Column col={12}><Input id="username" type="text" placeholder={i18n.ACCOUT} onChange={this.loadLoginInfo.bind(this)}/></Column>
                    </Row>
                    <Row>
                        <Column col={12}><Input id="password" type="password" placeholder={i18n.PASSWORD} onChange={this.loadLoginInfo.bind(this)}/></Column>
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
export default connect(mapStateToProps,mapDispatchToProps)(index);