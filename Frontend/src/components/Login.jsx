import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, role } = await login(username, password);
      localStorage.setItem('token', token);
      if (role === 'manager') {
        navigate('/dashboard-manager'); 
      } else if (role === 'crew') {
        navigate('/dashboard-crew'); 
      }
    } catch (error) {
      alert('Login failed: ' + error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
