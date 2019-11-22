import React, { Component } from 'react';
import Layout from  "../../components/Layout";
import Header from  "../../components/Header";
import Container from  "../../components/Container";
import Footer from  "../../components/Footer";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return (
            <Layout>
                <Header></Header>
                <Container></Container>
                <Footer></Footer>
            </Layout>
        );
    }
}
 
export default index;