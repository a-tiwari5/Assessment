import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import "./App.css";
import customers from "./components/CustomerData"; 

const App = () => {
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

export default App;
