import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import GuidePage from './pages/GuidePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/guide" element={<GuidePage />} />
    </Routes>
  );
}

export default App;
