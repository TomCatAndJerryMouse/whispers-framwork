import "../index.less";
import React, { Component } from 'react';
/**
 * 表单组件
 */
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {id,width,onClick,type,placeholder} = this.props;
        return ( 
            <input id={id} className="wIput" style={{width}} placeholder={placeholder} onClick={onClick} type={type}/>
         );
    }
}

export default index;