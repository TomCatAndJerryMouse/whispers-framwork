/**
 * saga实现函数
 */
import fetch from "../utils/fetch";
import cfg from "../configs/envConfigs.js"
import {all, takeEvery, put,call} from "redux-saga/effects"
import {
    loginSaga,
    validateSaga,
    isLogin,
    userInfoSaga,
    userInfo,
} from "../actions/index"
/**
 * 登录接口
 */
function* login(){
    yield takeEvery(loginSaga().type,function* login(args) {
        let opts = {
            url : cfg.login,
            type : 'fetch', 
            method : 'POST',
            data : args.payload, 
        }
        let rep = yield call(fetch,opts);
        if (rep.statusCode == 200 && rep.type === "SUCC")
            yield put(userInfoSaga());

      
    })
}
/**
 * 获取用户信息
 */
function* getUserInfo(params) {
    yield takeEvery(userInfoSaga().type,function* getUserInfo(args) {
        let opts = {
            url : cfg.userInfo,
            type : 'fetch', 
        }
        let resp;
        try {
            resp = yield call(fetch,opts);
        } catch (error) {
            console.log(error);
           return;
        }
        if (resp.statusCode == 200 && resp.type === "SUCC")
        {
            yield put(userInfo(resp.datas));
        } else {
            yield put(userInfo(null));
        }
    })
}

 /**
  * 验证用户接口
  */
function* validate(){
    yield takeEvery(validateSaga().type,function* validate(args) {
        let opts = {
            url : cfg.validate,
            type : 'fetch', 
        }
        let resp = yield call(fetch,opts);
        if (resp.statusCode == 200 && resp.type === "SUCC")
        {
            yield put(isLogin(true));
        } else {
            yield put(isLogin(false));
        }
    })
}

export default function* rootSaga(){
    yield all([
        login(),
        validate(),
        getUserInfo(),
    ])
}

