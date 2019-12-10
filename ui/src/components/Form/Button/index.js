import "./index.less";
import React, { Component } from 'react';
/**
 * 按钮组件
 */
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children,width,onClick} = this.props;
        return ( 
            <div className="button" style={{width}} onClick={onClick}>
                {children}
            </div>
         );
    }
}

export default index;