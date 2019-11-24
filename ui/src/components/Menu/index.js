import React, { Component } from 'react';
import "./index.less";
import constants from "../../constants/index";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode:props.mode,// ? props.mode : constants.MENU_MODDE_HORIZONTAL,//横向显示还是纵向 vertical horizontal
            //data:props.mode
            data:[
                    {
                        key:"/app1",
                        name:"Menu1",
                        url:"/app1",
                    },
                    {
                        key:"/app2",
                        name:"Menu2",
                        url:"/app2",
                    },
                    {
                        key:"/app3",
                        name:"Menu3",
                        url:"/app3",
                    },
                    {
                        key:"/app4",
                        name:"Menu4",
                        url:"/app4",
                    },
                 ],
            onclick:props.onclick,
         }
    }
    render() {
        return (
            <div className="menu">
                {
                    this.state.data.map((item)=>{
                        return(<div key={item.key} className={"m"+this.props.mode}>{item.name}</div>)
                    })
                }
            </div>
        )
    }
}