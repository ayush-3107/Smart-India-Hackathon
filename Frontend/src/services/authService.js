import axios from 'axios';

export const login = async (username, password) => {
  try {
    const res = await axios.post('/api/auth/login', { username, password });
    return res.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const register = async (username, password, role) => {
  try {
    await axios.post('/api/auth/register', { username, password, role });
  } catch (error) {
    throw error.response.data.error;
  }
};
