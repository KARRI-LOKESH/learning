import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Adjust the path as needed
import About from './About'; // Adjust the path as needed

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default Routing;
