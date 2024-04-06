//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//
//const BourbonDistilleryManager = () => {
//  const [distilleries, setDistilleries] = useState([]);
//  const [loading, setLoading] = useState(false);
//
//  useEffect(() => {
//      setLoading(true);
//    // Fetch distilleries from the API when the component mounts
//    axios.get('/api/distilleries')
//      .then(response => {
//      setDistilleries(response.data)
//      console.log("api response => ", response.data)
//      })
//      .catch(error => console.error('Error fetching distilleries:', error));
//       setLoading(false);
//
//  }, []);
//
//  if (loading) {
//    return <p>Loading...</p>;
//  }
//  const handleDelete = (id) => {
//    axios.delete(`/api/distilleries/${id}`)
//      .then(() => {
//        // Remove the deleted distillery from the list
//        setDistilleries(distilleries.filter(distillery => distillery.id !== id));
//      })
//      .catch(error => console.error('Error deleting distillery:', error));
//  };
//
//  return (
//    <div>
//      <h1>Bourbon Distilleries</h1>
//      <ul>
//        {distilleries.map(distillery => (
//          <li key={distillery.id}>
//            <span>{distillery.name}</span>
//            <button onClick={() => handleDelete(distillery.id)}>Delete</button>
//          </li>
//        ))}
//      </ul>
//    </div>
//  );
//};
//
//export default BourbonDistilleryManager;

import React, { useState, useEffect } from "react";
import axios from "axios";

const BourbonDistilleryManager = () => {
  const [distilleries, setDistilleries] = useState([]);
  const [newDistillery, setNewDistillery] = useState({
    name: "",
    licenseNumber: "",
    address: "",
    bourbons: [],
    customers: [],
  });

  useEffect(() => {
    fetchDistilleries();
  }, []);

  const fetchDistilleries = () => {
    axios
      .get("/api/distilleries")
      .then((response) => setDistilleries(response.data))
      .catch((error) => console.error("Error fetching distilleries:", error));
  };

  const handleCreateDistillery = () => {
    axios
      .post("/api/distilleries", newDistillery)
      .then((response) => {
        setDistilleries([...distilleries, response.data]);
        setNewDistillery({
          name: "",
          licenseNumber: "",
          address: "",
          bourbons: [],
          customers: [],
        });
      })
      .catch((error) => console.error("Error creating distillery:", error));
  };

  const handleDeleteDistillery = (id) => {
    axios
      .delete(`/api/distilleries/${id}`)
      .then(() => {
        setDistilleries(
          distilleries.filter((distillery) => distillery.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting distillery:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDistillery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Bourbon Distilleries</h2>
      <div>
        <h3>Create New Distillery</h3>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newDistillery.name}
          onChange={handleChange}
        />
        <label>License Number:</label>
        <input
          type="text"
          name="licenseNumber"
          value={newDistillery.licenseNumber}
          onChange={handleChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={newDistillery.address}
          onChange={handleChange}
        />
        {/* Input fields for bourbons */}
        <h4>Add Bourbons</h4>
        <label>Bourbon Name:</label>
        <input
          type="text"
          name="bourbonName"
          value={newDistillery.bourbonName}
          onChange={handleChange}
        />
        {/* Add more input fields for other bourbon attributes as needed */}
        {/* Input fields for customers */}
        <h4>Add Customers</h4>
        <label>Customer Name:</label>
        <input
          type="text"
          name="customerName"
          value={newDistillery.customerName}
          onChange={handleChange}
        />
        {/* Add more input fields for other customer attributes as needed */}
        <button onClick={handleCreateDistillery}>Create</button>
      </div>
      <ul>
        {distilleries.map((distillery) => (
          <li key={distillery.id}>
            <div>Name: {distillery.name}</div>
            <div>License Number: {distillery.licenseNumber}</div>
            <div>Address: {distillery.address}</div>
            {/* Display bourbons */}
            <div>
              Bourbons:
              <ul>
                {distillery.bourbons.map((bourbon) => (
                  <li key={bourbon.id}>{bourbon.name}</li>
                ))}
              </ul>
            </div>
            {/* Display customers */}
            <div>
              Customers:
              <ul>
                {distillery.customers.map((customer) => (
                  <li key={customer.id}>{customer.name}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => handleDeleteDistillery(distillery.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BourbonDistilleryManager;
