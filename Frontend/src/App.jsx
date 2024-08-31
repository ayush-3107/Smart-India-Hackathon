import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardManager from './components/DashboardManager';
import DashboardCrew from './components/DashboardCrew';
import RegisterPage from './pages/RegisterPage';  
import Contact from './components/Contact/Contact';
import AboutPage from './components/About/about';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard-manager" element={<DashboardManager />} />
        <Route path="/dashboard-crew" element={<DashboardCrew />} />
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
