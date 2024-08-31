import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import your Layout component
import LoginPage from './pages/LoginPage';
import DashboardManager from './components/DashboardManager';
import DashboardCrew from './components/DashboardCrew';
import RegisterPage from './pages/RegisterPage';  
import Contact from './components/Contact/Contact';
import AboutPage from './components/About/about';
import SimpleOutlet from './components/SimpleOutlet';

function App() {
  return (
    <Router>
      <Routes>
         {/* Layout with Header and Footer */}
         <Route element={<Layout />}>
          <Route path="/dashboard-manager" element={<DashboardManager />} />
          <Route path="/dashboard-crew" element={<DashboardCrew />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Layout without Header and Footer */}
        <Route path='/' element={<SimpleOutlet />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
