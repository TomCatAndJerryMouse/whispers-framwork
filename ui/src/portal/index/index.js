import React, { Component } from 'react';
import Row from "../../components/Row/index";
import Col from "../../components/Column/index";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row>
                <Col col={12}>
                    dsdsd
                </Col>
                <Col col={12}>
                    dsdsd
                </Col>
                <Col col={12}>
                    dsdsd
                </Col>
            </Row>
         );
    }
}
 
export default index;