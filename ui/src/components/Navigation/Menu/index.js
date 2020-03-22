import React, { Component } from 'react';
import "./index.less";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode:props.mode,// ? props.mode : constants.MENU_MODDE_HORIZONTAL,//横向显示还是纵向 vertical horizontal
            data:props.data ? props.data : [],
            onclick:props.onclick,
         }
    }
    selectItem (e) { 
        if (this.props.isHashJump)
        {
            window.location.href="#" + e.target.getAttribute("to");
        }
        else
        {
            window.location.href=e.target.getAttribute("to");
        }
      
    }
    hasIcon()
    {
        if (this.props.hasIcon)
        {
            return (
                <div className={`title ${"m"+this.props.mode}`}>{this.props.title}</div>
            )
        }
    }
    render() {
        return (
            <div className="menu">
                {
                    this.hasIcon()
                }
                {
                    this.state.data.map((item)=>{
                        return(
                        <div key={item.key} className={`item ${"m"+this.props.mode}`} to={item.url} onClick={this.selectItem.bind(this)}>
                            {item.name}
                        </div>)
                    })
                }
            </div>
        )
    }
}