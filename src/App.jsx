import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Application from './pages/Application';
import Confirmation from './pages/Confirmation';
import Admin from './pages/Admin';

function App() {
  const [applications, setApplications] = useState([]);
  const addApplication = (app) => setApplications((prev) => [...prev, app]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Application addApplication={addApplication} />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/admin" element={<Admin applications={applications} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;