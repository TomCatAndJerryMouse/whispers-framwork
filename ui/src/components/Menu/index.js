import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./index.less";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode:props.mode,// ? props.mode : constants.MENU_MODDE_HORIZONTAL,//横向显示还是纵向 vertical horizontal
            data:props.data,
            onclick:props.onclick,
         }
    }
    render() {
        return (
            <div className="menu">
                {
                    this.state.data.map((item)=>{
                        return(
                        <div key={item.key} className={"m"+this.props.mode}>
                            <Link to={item.url}>{item.name}</Link>
                        </div>)
                    })
                }
            </div>
        )
    }
}