// AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllData from './AllData';
import CustomerDetails from './CustomerDetails';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllData />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
