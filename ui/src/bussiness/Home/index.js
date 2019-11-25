import React, { Component } from "react";
import Container from  "../../components/Container/index";
import Sider from  "../../components/Sider/index";
import Menu from  "../../components/Menu/index";
import constants from "../../constants/index";
import {Route,Switch,Redirect} from "react-router-dom";

import  List from "./list/index";
import  Setting from "./Setting/index";

const data = [
    {
        key:"home_list",
        name:"List",
        url:"/home/list",
    },
    {
        key:"home_setting",
        name:"Setting",
        url:"/home/setting",
    }
 ];
export default class index extends Component {
    render() {
        return (
            <Container>
                <Sider>
                    <Menu data={data} mode={constants.MENU_MODDE_VERTICAL}/>
                </Sider>
                <Container>
                    <Switch>
                        <Route path='/home/list' component={List}></Route>
                        <Route path='/home/setting' component={Setting}></Route>
                        <Redirect to="/home/list" />
                    </Switch>
                </Container>
            </Container>
        )
    }
}
