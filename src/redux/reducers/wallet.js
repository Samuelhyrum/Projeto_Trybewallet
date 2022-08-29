// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET, API, FAIL, EXPENSES, DELETE_COSTUMER } from '../actions/types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
    };
  case API:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses }],
    };
  case DELETE_COSTUMER:
    return {
      ...state,
      expenses: state.expenses.filter((arr) => arr.id !== action.payload.arr),
    };
  case FAIL:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
}

export default walletReducer;
