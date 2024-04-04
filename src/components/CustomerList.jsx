import React, { useState, useEffect } from 'react';
import "../App.css"

const CustomerList = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  const [visibleCustomers, setVisibleCustomers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const customersPerPage = 10;

  useEffect(() => {
    loadMoreCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once when the component mounts

  const loadMoreCustomers = () => {
    const startIndex = (pageNumber - 1) * customersPerPage;
    const endIndex = startIndex + customersPerPage;
    setVisibleCustomers(prevCustomers => [...prevCustomers, ...customers.slice(startIndex, endIndex)]);
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      loadMoreCustomers();
    }
  };

  return (
    <div className="customer-list" onScroll={handleScroll}>
      {visibleCustomers.map(customer => (
        <div
          key={customer.id}
          className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
