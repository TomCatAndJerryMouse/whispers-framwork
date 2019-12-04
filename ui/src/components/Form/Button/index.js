import "./index.less";
import React, { Component } from 'react';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("ssss"+this.props.width);
        return ( 
            <div className="button" style={{width:this.props.width}}>
                {this.props.children}
            </div>
         );
    }
}

export default index;