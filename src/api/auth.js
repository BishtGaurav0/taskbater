import API from './axios';

export const registerUser = async (user) => {
  const res = await API.post('/api/auth/register', user);
  return res.data;
};

export const loginUser = async (user) => {
  const res = await API.post('/api/auth/login', user);
  return res.data;
};
