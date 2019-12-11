import React, { Component } from 'react';
import {
    Row,
    Column,
} from "../index";
import "./index.less";

class index  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    changeLang(lang){
        let href = window.location.href;
        if (href.search('lang=') > 0) {
            if (lang === 'zh') {
                href = href.replace('lang=en','lang=zh');
            } else {
                href = href.replace('lang=zh','lang=en');
            }
        } else {
            if (href.search('\\?') > 0) {
                href += '&lang='+lang;
            } else {
                href += '?lang='+lang;
            }
        }
        console.log(href);
        window.location.href = href;
        window.location.reload(true);
    }

    render() { 
        return (
            <div className="header">
                <Row>
                    <Column col={10}>{this.props.children}</Column>
                    <Column col={2}>
                        <div onClick={()=> this.changeLang('zh')}>
                            中文
                        </div>
                        <div onClick={()=> this.changeLang('en')}>
                            English
                        </div>
                    </Column>
                </Row>
            </div>
        );
    }
}
 
export default index;