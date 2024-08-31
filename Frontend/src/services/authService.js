import axios from 'axios';
import config from '../config';

export const login = async (userid, password) => {
  try {
    const res = await axios.post(`${config.apiUrl}/auth/login`, { userid, password });
    return res.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const register = async (username, password, role) => {
  try {
    await axios.post(`${config.apiUrl}/api/auth/register`, { username, password, role });
  } catch (error) {
    throw error.response.data.error;
  }
};
