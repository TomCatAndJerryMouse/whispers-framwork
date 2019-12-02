import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
/**
 * 公共路由加载组件，通过加载每个页面中的路由配置渲染路由组件
 */
class  index extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        // 默认跳转
        let defualtPage = "";
        return ( 
            <Switch>
                { 
                    this.props.pages.map((route,index)=>{
                        if (route.defaultPage){
                            defualtPage = <Redirect key={"red_" + index + "_" + route.path} exact="true" from={route.path.substr(0,route.path.lastIndexOf("/"))} to={route.path}/>
                        }
                        return <Route key={ + index + "_" + route.path} {...route}></Route>;
                    })
                }
                {
                    defualtPage
                }
            </Switch>
         );
    }
}
 
export default index;