// src/reducers/login.js
import LOGIN from '../actions/types';

const INITIAL_STATE = {
  email: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return action.payload.userProfile;
  default:
    return state;
  }
}

export default loginReducer;
