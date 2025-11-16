// App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const BlackHatMEA = lazy(() => import('./JPOevent'));
const Workshops = lazy(() => import('./pages/workshops'));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<BlackHatMEA />} />
          <Route path="/workshops" element={<Workshops />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;