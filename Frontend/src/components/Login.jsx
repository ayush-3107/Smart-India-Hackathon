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
    <div className='w-screen h-screen flex items-center justify-center '>
      <form onSubmit={handleSubmit}
        className='w-[60%] flex flex-col items-center justify-center border-2 border-blue-800' >
        <div className='w-full flex m-4 justify-center items-center gap-4'>
          <p className='text-2xl '>Username:</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required
            className=' border-2 h-10 p-4 border-blue-500 text-black outline-none' />
        </div>
        <div className='w-full flex m-4 justify-center items-center gap-4'>
          <p className='text-2xl' >Password:</p>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required 
           className=' border-2 h-10 p-4 border-blue-500 text-black outline-none'/>
        </div>
        <button className="relative px-6 py-3 border-none rounded-xl text-[#212121] bg-[#e8e8e8] font-extrabold text-lg shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] transition-all duration-250 overflow-hidden
  before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-xl before:bg-[#212121] before:z-[-1] before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] before:transition-all before:duration-250 hover:text-[#e8e8e8] hover:before:w-full">
  Login
</button>


      </form>
    </div>
  )
};

export default LoginForm;
