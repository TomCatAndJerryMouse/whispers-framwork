/**
 * 创建redux store以及绑定中间件
 */
import { createStore,applyMiddleware } from 'redux';
import reducers from "../reducers"
import createSagaMiddleware  from 'redux-saga';
import reduxSagas from '../sagas';
// 创建react的store并绑定saga中间件
var rootSaga = createSagaMiddleware()
var store = createStore(reducers,applyMiddleware(rootSaga));
rootSaga.run(reduxSagas);
export default store;
