import React, { Component } from "react";
import Pages from "./route";
import {
    Body,
    Footer,
    Layout,
    Header,
    RouteLoader,
    LocaleProvider,
} from "../../../components/index";
import * as nls from "./nls";
import { connect } from 'react-redux'
import {
    logOutSaga,
} from "../../../actions/index"

const i18n = LocaleProvider.loaderNls(nls);
const data = [
    {
        key:"home",
        name:i18n.FUNCTION,
        url:"/home",
    },
    {
        key:"home1",
        name:i18n.FUNCTION,
        url:"/home1",
    },
    {
        key:"home2",
        name:i18n.FUNCTION,
        url:"/home2",
    },
    {
        key:"home3",
        name:i18n.FUNCTION,
        url:"/home3",
    },
 ];

// 建立一个从（外部的）state对象到（展示型组件的）props对象的映射关系
const mapStateToProps = state => ({
    state:state.toJS()
})

// 建立展现型组件的参数到store.dispatch方法的映射
const mapDispatchToProps = dispatch => ({
    logOut:callback=>{
        dispatch(logOutSaga())
    },
})
/**
 * 登录后主页面渲染页面
 */
class index extends Component {
    render() {
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
export default connect(mapStateToProps,mapDispatchToProps)(index);