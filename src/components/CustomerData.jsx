const generateCustomers = () => {
  const customers = [];

  for (let i = 1; i <= 1000; i++) {
    const newCustomer = {
      id: i,
      name: `Customer ${i.toString().padStart(2, "0")}`,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
    customers.push(newCustomer);
  }

  return customers;
};

const customers = generateCustomers();

export default customers;
