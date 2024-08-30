import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [yearOfJoining, setYearOfJoining] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('manager');

  // Crew-specific fields
  const [crewRole, setCrewRole] = useState('');
  const [experience, setExperience] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [timingPreferences, setTimingPreferences] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !id || !password || !phoneNumber || !email || !dob || !gender || !yearOfJoining || !address || !role) {
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
        yearOfJoining,
        address,
        role,
        crewRole: role === 'Crew' ? crewRole : undefined,
        experience: role === 'Crew' ? experience : undefined,
        skillLevel: role === 'Crew' ? skillLevel : undefined,
        timingPreferences: role === 'Crew' ? timingPreferences : undefined,
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
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Year of Joining"
                    value={yearOfJoining}
                    onChange={(e) => setYearOfJoining(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                    required
                  >
                    <option value="manager">Manager</option>
                    <option value="crew">Crew</option>
                  </select>
                  
                  {role === 'crew' && (
                    <>
                      <input
                        type="text"
                        placeholder="Crew Role (e.g., Conductor/Driver)"
                        value={crewRole}
                        onChange={(e) => setCrewRole(e.target.value)}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                      />
                      <input
                        type="number"
                        placeholder="Experience (in years)"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                      />
                      <select
                        value={skillLevel}
                        onChange={(e) => setSkillLevel(e.target.value)}
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
                        placeholder="Timing Preferences"
                        value={timingPreferences}
                        onChange={(e) => setTimingPreferences(e.target.value)}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-[rgb(254,255,250)] border border-[#95D2B3] placeholder-gray-500 text-sm focus:outline-none focus:border-[#55AD9B] focus:bg-white mt-5"
                      />
                    </>
                  )}

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