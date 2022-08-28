// Coloque aqui suas actions
import { LOGIN_USER, WALLET, API, FAIL } from './types';

export const loginUser = (userProfile) => ({
  type: LOGIN_USER,
  payload: { userProfile },
});

const walletRequest = () => ({
  type: WALLET,
});
const API_ACTION = (payload) => ({ type: API, payload });

const fail = (error) => ({
  type: FAIL,
  payload: { error },
});

export function fetchMoeadas() {
  return async (dispactch) => {
    dispactch(walletRequest());
    try {
      const API_REQUEST = await fetch('https://economia.awesomeapi.com.br/json/all');
      const resposta = await API_REQUEST.json();
      const keys = Object.keys(resposta);
      const currencies = keys.filter((moeada) => moeada !== 'USDT');
      dispactch(API_ACTION(currencies));
    } catch (error) {
      dispactch(fail(error));
    }
  };
}
