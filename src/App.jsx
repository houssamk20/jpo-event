// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlackHatMEA from './JPOevent';
import Workshops from './pages/workshops';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlackHatMEA />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
    </Router>
  );
}

export default App;