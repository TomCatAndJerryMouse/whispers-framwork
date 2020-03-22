import React, { Component } from 'react';
import "./index.less";
import {
    Menu,
    LocaleProvider,
} from "../../index";
import constants from "../../constants";
import * as nls from "./nls";
let i18n="";
let _locale="";
export default class index  extends Component {
    constructor(props) {
        i18n = LocaleProvider.loaderNls(nls);
        _locale = LocaleProvider._locale;
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
    displayLangOption(_locale)
    {
        {
            if (_locale==="zh")
            {
                return (
                    <div onClick={()=> this.changeLang('en')}>
                        {i18n["LANG_EN"]}
                    </div>
                )
            }
            else
            {
                return (
                    <div onClick={()=> this.changeLang('zh')}>
                        {i18n["LANG_ZH"]}
                    </div>
                )
            }
        }
    }
    render() { 
        return (
            <div className="header">
                <Menu data={this.props.data} mode={constants.MENU_MODDE_HORIZONTAL} isHashJump={true} hasIcon={true} title={this.props.title}/>
                <div className="dropDown">
                    {this.displayLangOption(_locale)}
                </div>
            </div>
        );
    }
}