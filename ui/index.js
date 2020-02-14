/**
 * 入口
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Framwork from './src/components/Framwork/index';
import store from './src/store/index'
import PortalFramwork from './src/components/PortalFramwork/index';

ReactDOM.render (
    <Provider store={store}>
        <Framwork/>
        {/* <PortalFramwork/> */}
    </Provider>,
document.getElementById("root"))