import React, { Component } from 'react';
import "./index.less";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={`sider lycommon`}>
                {this.props.children}
            </div> 
        );
    }
}
 
export default index;