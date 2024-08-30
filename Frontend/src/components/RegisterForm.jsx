import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config'; // Import the config
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('manager');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password || !role) {
      alert('All fields are required');
      return;
    }
    try {
      await axios.post(`${config.apiUrl}/auth/register`, {  // Use the variable for API path
        username,
        password,
        role,
      });
      alert('Registration successful');
      navigate('/');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[url("/Bg.jpeg")] bg-cover bg-center'>
      <form onSubmit={handleRegister}
        className='w-auto h-auto text-white bg-transparent rounded flex flex-col items-center justify-center border-2 border-[rgba(255,255,255,0.2)]
     backdrop-blur-sm shadow-custom p-10'>

        <h1 className='text-5xl text-teal-700 my-4 font-bold'
        >TransitMATE</h1>


        <div className='w-full flex m-4 justify-evenly items-center gap-4'>
          <label className='text-2xl'
          >Username:</label>
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=' border-2 h-10 p-4 bg-transparent border-blue-600 outline-none rounded-lg placeholder:text-lg ml-10'
          />
        </div>


        <div className='w-full flex m-4 justify-evenly items-center gap-4'>
          <label className='text-2xl '>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=' border-2 h-10 p-4 bg-transparent border-blue-600 outline-none rounded-lg placeholder:text-lg'
            placeholder="Password"
          />
        </div>


        <div className='w-full flex m-4 justify-evenly items-center gap-5'>
          <label className='text-2xl '>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}
            className='text-black w-32 h-8 px-4 text-lg outline-none rounded-md'>
            <option value="manager">Manager</option>
            <option value="crew">Crew</option>
          </select>
        </div>


        <button type="submit"
          className="m-4 px-7 py-3 w-32 border-none outline-none rounded-xl text-black bg-white transition ease-in-out duration-500 text-xl 
            hover:shadow-[inset_0_-100px_0_0_blue] hover:bg-blue-800 hover:text-white  active:scale-90"
        >Register</button>

        <p
          className="text-white font-normal text-lg px-4">Already A Member
          <Link
            to="/"
            className='text-blue-500 hover:underline ml-2'
          >Log In</Link>
          </p>
      </form>
    </div>
  );
};

export default RegisterForm;
