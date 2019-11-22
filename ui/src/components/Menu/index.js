import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode:props.mode,//横向显示还是纵向 vertical horizontal
            data:props.mode
         }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
