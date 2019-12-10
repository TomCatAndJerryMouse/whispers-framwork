import React, { Component } from "react";
import Container from  "../../components/Container/index";
import Sider from  "../../components/Sider/index";
import Menu from  "../../components/Menu/index";
import constants from "../../constants/index";
import RouteLoader from "../../components/RouteLoader"
import Pages from "./route";

const data = [
    {
        key:"home_list",
        name:"功能",
        url:"/home/list",
    },
    {
        key:"home_setting",
        name:"功能",
        url:"/home/setting",
    }
 ];
export default class index extends Component {
    render() {
        return (
            <Container>
                <Sider>
                    <Menu data={data} mode={constants.MENU_MODDE_VERTICAL} isHashJump={true}/>
                </Sider>
                <Container>
                    <RouteLoader pages={Pages}/>
                </Container>
            </Container>
        )
    }
}
