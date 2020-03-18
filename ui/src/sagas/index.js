/**
 * saga实现函数
 */
import { disbatch } from 'redux-act';
import fetch from "../utils/fetch";
import cfg from "../configs/envConfigs.js"
import {all, takeEvery, put} from "redux-saga/effects"
import {
    loginSaga,
    validateSaga,
    isLogin,
    userInfo,
} from "../actions/index"
/**
 * 登录接口
 */
function* login(){
    yield takeEvery(loginSaga().type,function* login(args) {
        // console.log(args);
        // let {username,password} = args.payload;
        // let data = {
        //     username:username,
        //     password:password
        // }
        yield fetch(cfg.login,args.payload,"POST").then((data)=>{
            if (data.code === "00001")
            {
              
                //disbatch(isLogin("sss"));
            } else {
                //console.log(this.props.logout);
            }
        });
        yield put({type:isLogin().type,state:{},payload:{isLogin:true}})
    })
}

 /**
  * 验证用户接口
  */
function* validate(){
    console.log("validate");
    yield takeEvery(validateSaga().type,function* validate(args) {
        fetch(cfg.validate).then((data)=>{
            if (data.code === "00001")
            {
                console.log("11111");
                // this.props.login();
            } else {
               // console.log(this.props.logout);
                // this.props.logout();
            }
        });
    })
}

export function* helloSaga() {
    console.log('Hello Sagas!');
}

export default function* rootSaga(){
    yield all([
        login(),
        validate(),
    ])
}

