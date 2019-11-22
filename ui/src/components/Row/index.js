import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}
