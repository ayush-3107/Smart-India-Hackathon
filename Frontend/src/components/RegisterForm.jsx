import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    phoneNumber: '',
    email: '',
    dob: '',
    gender: '',
    yearOfJoining: '',
    address: '',
    role: 'manager',
    crewRole: '',
    experience: '',
    skillLevel: '',
    timingPreferences: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const {
      name,
      id,
      password,
      phoneNumber,
      email,
      dob,
      gender,
      address,
      role,
      crewRole,
      experience,
      skillLevel,
      timingPreferences,
    } = formData;

    if (!name || !id || !password || !phoneNumber || !email || !dob || !gender || !address || !role) {
      alert('All fields are required');
      return;
    }
    try {
      await axios.post(`${config.apiUrl}/auth/register`, {
        name,
        id,
        password,
        phoneNumber,
        email,
        dob,
        gender,
        address,
        role,
        crewRole: role === 'crew' ? crewRole : undefined,
        experience: role === 'crew' ? experience : undefined,
        skillLevel: role === 'crew' ? skillLevel : undefined,
        timingPreferences: role === 'crew' ? timingPreferences : undefined,
      });
      alert('Registration successful');
      navigate('/');
    } catch (error) {
      alert('Registration failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F8E8] text-gray-900 flex justify-center"> {/* Background color */}
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-[#55AD9B]">Register</h1> {/* Heading color */}
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <form onSubmit={handleRegister} className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white"
                    required
                  />
                  <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={formData.id}
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
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
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
                    <option value="manager">Manager</option>
                    <option value="crew">Crew</option>
                  </select>

                  {formData.role === 'crew' && (
                    <>
                      <input
                        type="text"
                        name="crewRole"
                        placeholder="Crew Role (e.g., Conductor/Driver)"
                        value={formData.crewRole}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                      />
                      <input
                        type="number"
                        name="experience"
                        placeholder="Experience (in years)"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                      />
                      <select
                        name="skillLevel"
                        value={formData.skillLevel}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                      >
                        <option value="">Select Skill Level</option>
                        <option value="Urban">Urban</option>
                        <option value="Busy routes">Busy routes</option>
                        <option value="Suburban">Suburban</option>
                        <option value="Rural">Rural</option>
                        <option value="Highway">Highway</option>
                      </select>
                      <input
                        type="text"
                        name="timingPreferences"
                        placeholder="Timing Preferences (e.g., Day/Night Shift)"
                        value={formData.timingPreferences}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                      />
                    </>
                  )}

                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-[#95D2B3] text-gray-100 w-full py-4 rounded-lg hover:bg-[#55AD9B] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                      ></path>
                    </svg>
                    <span className="ml-3">Register</span>
                  </button>
                </form>
                <div className="mt-5 text-center">
                  <p className="text-sm">
                    Already have an account?{' '}
                    <Link to="/" className="text-[#95D2B3]">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#c4dca9] text-center hidden lg:flex ">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
            style={{
              backgroundImage: 'url("/login_bg.jpg")', 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
