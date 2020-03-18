import {createReducer} from "redux-act"
import {
  isLogin,
  userInfo,
} from "../actions/index"

// const modalReducer = (state = {visible: false}, action = {}) => {
//     switch(action.type) {
//       case 'LOGIN':
//         console.log('sssssssssssssssssss');
//         state.visible = true;
//         return state;
//       case 'LOGOUT':
//         console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
//         return state - 1;
//       default: return state;
//     }
//   }
  
export default createReducer({
      [isLogin]:(state,data)=>{
        console.log("createReducer " + data);
        console.log("createReducer " + data.isLogin);
       1
        // state.set("isLogin",data)
      },
      [userInfo]:(state,data)=>
        state.set("userInfo",data),
  },0)