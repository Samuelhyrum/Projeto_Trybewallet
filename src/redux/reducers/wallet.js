// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET } from '../actions/types';

const INITIAL_STATE = {};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return action.payload.walletProfile;
  default:
    return state;
  }
}

export default loginReducer;
