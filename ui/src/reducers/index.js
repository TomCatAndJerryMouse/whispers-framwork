const modalReducer = (state = {visible: false}, action = {}) => {
    switch(action.type) {
      case 'LOGIN':
        console.log('sssssssssssssssssss');
        state.visible = true;
        return state;
      case 'LOGOUT':
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
        return state - 1;
      default: return state;
    }
  }
  
  export default modalReducer;