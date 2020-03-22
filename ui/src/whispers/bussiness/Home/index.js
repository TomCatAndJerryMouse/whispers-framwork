import React, { Component } from "react";
import {
    Container,
    Sider,
    Menu,
    RouteLoader,
    LocaleProvider,
} from "../../../components/index";
import constants from "../../../constants/index";
import * as nls from "./nls";
const i18n = LocaleProvider.loaderNls(nls);
import Pages from "./route";

const data = [
    {
        key:"home_list",
        name:i18n.FUNCTION,
        url:"/home/list",
    },
    {
        key:"home_setting",
        name:i18n.FUNCTION,
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
