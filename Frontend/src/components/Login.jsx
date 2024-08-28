import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Username and password are required');
      return;
    }
    try {
      const response = await axios.post(`${config.apiUrl}/auth/login`, {
        username,
        password,
      });
      
      console.log('Response data:', response.data); // Log the response data for debugging
  
      const { token, role } = response.data;
      localStorage.setItem('token', token);
  
      if (role === 'manager') {
        navigate('/dashboard-manager');
      } else if (role === 'crew') {
        navigate('/dashboard-crew');
      } else {
        alert('Unknown role');
      }
    } catch (error) {
      console.error('Login error:', error); // Log error details for debugging
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
