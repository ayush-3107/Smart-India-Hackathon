import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    userid: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    password: '',
    role: '',
    crewRole: '',
    experience: '',
    skill: '',
    timingPreferences: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, password, role } = formData;
    if (!username || !password || !role) {
      alert('All fields are required');
      return;
    }
    try {
      await axios.post(`${config.apiUrl}/auth/register`, formData);
      alert('Registration successful');
      navigate('/');
    } catch (error) {
      alert('Registration failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F8E8] text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-[50%] p-4 sm:p-10">
          <div className="mt-5 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-[#55AD9B]">Register</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <form onSubmit={handleRegister} className="flex flex-col">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="userid"
                    placeholder="User Id"
                    value={formData.userid}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  >
                    <option value="">Select a Role</option>
                    <option value="manager">Manager</option>
                    <option value="crew">Crew</option>
                  </select>


                  <div className={`${formData.role === 'crew' ? "block" : "hidden"}`}>
                    <select
                      name="crewRole"
                      value={formData.crewRole}
                      onChange={handleChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    >
                      <option value="">Crew Role</option>
                      <option value="driver">Driver</option>
                      <option value="conductor">Conductor</option>
                    </select>
                    <input
                      type="number"
                      name="experience"
                      placeholder="Experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    />
                    <select
                      name="skill"
                      value={formData.skill}
                      onChange={handleChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    >
                      <option value="">Select Skill</option>
                      <option value="Urban">Urban</option>
                      <option value="Busy routes">Busy routes</option>
                      <option value="Suburban">Suburban</option>
                      <option value="Rural">Rural</option>
                      <option value="Highway">Highway</option>
                    </select>
                    <input
                      type="text"
                      name="timingPreferences"
                      placeholder="Timing Preferences"
                      value={formData.timingPreferences}
                      onChange={handleChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-[#95D2B3] text-gray-900 w-full py-4 rounded-lg hover:bg-[#55AD9B] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Register</span>
                  </button>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already a member?{' '}
                  <Link to="/" className="text-[#55AD9B] hover:underline">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#c4dca9] text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/login_bg.jpg")', // Path to your image
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
