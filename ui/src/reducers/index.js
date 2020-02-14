import {createReducer} from "redux-act"
import {
  isLogin,
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
      [isLogin]:(state,data)=>
        state.set("isLogin",data),
  })