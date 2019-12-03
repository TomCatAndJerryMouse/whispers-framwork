import "./index.less";
import React, { Component } from 'react';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="button">
                {this.props.children}
            </div>
         );
    }
}

export default index;