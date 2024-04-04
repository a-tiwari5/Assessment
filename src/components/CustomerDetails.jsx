// CustomerDetails.js
import React from 'react';
import PhotoGrid from './PhotoGrid';
import "../App.css"
const CustomerDetails = ({ customer }) => {
  return (
    <div className="customer-details">
       <div className="customer-content">
        <h2>{customer.name}</h2>
        <p>{customer.title}</p>
        <p>{customer.address}</p>
      </div>
      <PhotoGrid customerName={customer.name} />
    </div>
  );
};

export default CustomerDetails;