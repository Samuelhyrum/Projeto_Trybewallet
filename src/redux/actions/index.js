// Coloque aqui suas actions
import LOGIN from './types';

const loginUser = (userProfile) => ({
  type: LOGIN,
  payload: { userProfile },
});

export default loginUser;
