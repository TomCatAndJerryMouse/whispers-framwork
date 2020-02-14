/**
 * saga实现函数
 */
import fetch from "../utils/fetch";
import cfg from "../configs/envConfigs.js"
import {all, takeEvery} from "redux-saga/effects"
import {loginSaga,validateSaga} from "../actions/index"
/**
 * 登录接口
 */
function* login(){
    yield takeEvery(loginSaga().type,function* login(args){
        let data = {
            username:"admin",
            pwd:"admin"
        }
        fetch(cfg.login,data,"POST").then((data)=>{
            if (data.code === "00001")
            {
                console.log("11111");
                // this.props.login();
            } else {
                console.log(this.props.logout);
                // this.props.logout();
            }
        });
    })
}

 /**
  * 验证用户接口
  */
function* validate(){
    console.log("validate");
    takeEvery(validateSaga().type,function* validate(args){
        fetch(cfg.validate).then((data)=>{
            if (data.code === "00001")
            {
                console.log("11111");
                // this.props.login();
            } else {
                console.log(this.props.logout);
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

