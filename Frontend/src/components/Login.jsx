import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
      // console.log("Hello");
      const response = await axios.post(`${config.apiUrl}/auth/login`, {
        username,
        password,
      });

      console.log('Response data:', response.data); // Log the response data for debugging

      const { token, role } = response.data;
      // console.log(token);
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
    <div className='w-screen h-screen flex items-center justify-center bg-[url("/Bg.jpeg")] bg-cover bg-center'>
      <form onSubmit={handleSubmit}
        className='w-auto h-auto text-white bg-transparent rounded-2xl flex flex-wrap flex-col items-center justify-center border-2 border-[rgba(255,255,255,0.2)]
        backdrop-blur-sm shadow-custom p-10' >

          <h1 className='text-5xl text-teal-700 my-4 font-bold'
          >TransitMATE</h1>

        <div className='w-full flex m-4 justify-center items-center gap-4'>
          <p className='text-2xl '>Username:</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required
            className=' border-2 h-10 p-4 bg-transparent border-blue-600 outline-none rounded-lg placeholder:text-lg' />
        </div>

        <div className='w-full flex m-4 justify-center items-center gap-[18px]'>
          <p className='text-2xl' >Password:</p>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
            className=' border-2 h-10 p-4 bg-transparent border-blue-600 outline-none rounded-lg placeholder:text-lg' />
        </div>

        <button className="m-4 px-7 py-3 w-32 border-none outline-none rounded-xl text-black bg-white transition ease-in-out duration-500 text-xl 
            hover:shadow-[inset_0_-100px_0_0_blue] hover:bg-blue-800 hover:text-white  active:scale-90" >
          Login
        </button>

        <p
        className="text-white font-normal text-lg px-4">New Member?
          <Link 
        to="/register"
        className='text-blue-500 hover:underline ml-2'
        >Register</Link></p>
      </form>
    </div>
  )
};

export default LoginForm;
