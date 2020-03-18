import {createAction} from "redux-act"
export const isLogin = createAction("用户是否登录");
export const userInfo = createAction("用户信息");
export const validateSaga = createAction("验证用户");
export const loginSaga = createAction("用户登录");
export const logOutSaga = createAction("用户注销");