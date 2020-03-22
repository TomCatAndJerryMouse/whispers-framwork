import React, { Component } from 'react';
import {Row,Column} from "../../index";
import "./index.less";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <Row>
                    <Column col={12}>{this.props.children}</Column>
                </Row>
            </div> 
        );
    }
}
 
export default index;