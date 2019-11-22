import React, { Component } from 'react'
import "./index.less";
export default class index extends Component {
    render() {
        return (
            <div className={"col-"+this.props.col}>
                {this.props.children}
            </div>
        )
    }
}
