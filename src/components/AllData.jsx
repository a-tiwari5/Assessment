import React, { useState } from "react";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import "../App.css";
import customers from "./CustomerData"; 

const AllData = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(customers[0].id);

  const selectedCustomer = customers.find(
    (customer) => customer.id === selectedCustomerId
  );

  const onSelectCustomer = (customerId) => {
    setSelectedCustomerId(customerId);
  };

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={onSelectCustomer}
      />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default AllData;
