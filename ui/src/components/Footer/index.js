import React, { Component } from 'react';
import Row from "../../components/Row/index";
import Col from "../../components/Column/index";
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
                    <Col col={12}>{this.props.children}</Col>
                </Row>
            </div> 
        );
    }
}
 
export default index;