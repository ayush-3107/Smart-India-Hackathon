import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardManager from './components/DashboardManager';
import DashboardCrew from './components/DashboardCrew';
import RegisterPage from './pages/RegisterPage';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />  {/* Register route */}
        <Route path="/dashboard-manager" element={<DashboardManager />} />
        <Route path="/dashboard-crew" element={<DashboardCrew />} />
      </Routes>
    </Router>
  );
}

export default App;
