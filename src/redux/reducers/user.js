// src/reducers/login.js
import LOGIN_USER from '../actions/types';

const INITIAL_STATE = {
  email: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_USER:
    return action.payload.userProfile;
  default:
    return state;
  }
}

export default loginReducer;
