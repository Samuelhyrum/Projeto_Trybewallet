// Coloque aqui suas actions
import LOGIN_USER from './types';

const loginUser = (userProfile) => ({
  type: LOGIN_USER,
  payload: { userProfile },
});

export default loginUser;
