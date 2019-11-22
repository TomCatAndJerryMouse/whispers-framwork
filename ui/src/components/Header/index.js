import React, { Component } from 'react';
import Row from "../../components/Row/index";
import Col from "../../components/Column/index";
import "./index.less";

class index  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="header">
                <Row>
                    <Col col={1}>Whispers</Col>
                    <Col col={11}>{this.props.children}</Col>
                </Row>
            </div>
        );
    }
}
 
export default index;