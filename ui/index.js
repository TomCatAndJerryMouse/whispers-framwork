import React, { Component } from 'react';
import { createStore,applyMiddleware } from 'redux';
import reducers from "./src/reducers"
import { Provider } from 'react-redux';
import createSagaMiddleware  from 'redux-saga';
import { helloSaga } from './src/sagas';
import ReactDOM from 'react-dom';
import Framwork from './src/components/Framwork/index';
import PortalFramwork from './src/components/PortalFramwork/index';

// 创建react的store并绑定saga中间件
const rootSaga = createSagaMiddleware()
const store = createStore(reducers,applyMiddleware(rootSaga));
rootSaga.run(helloSaga);
ReactDOM.render (
    <Provider store={store}>
        <Framwork/>
        {/* <PortalFramwork/> */}
    </Provider>,
document.getElementById("root"))