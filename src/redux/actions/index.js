// Coloque aqui suas actions
import { LOGIN_USER, WALLET } from './types';

export const loginUser = (userProfile) => ({
  type: LOGIN_USER,
  payload: { userProfile },
});

export const walletUser = (walletProfile) => ({
  type: WALLET,
  payload: { walletProfile },
});
