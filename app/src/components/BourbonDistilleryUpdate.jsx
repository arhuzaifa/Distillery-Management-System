// BourbonDistilleryUpdate.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BourbonDistilleryUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [distillery, setDistillery] = useState({
    name: "",
    licenseNumber: "",
    address: "",
    bourbons: [],
    customers: [],
  });

  useEffect(() => {
    fetchDistillery();
  }, []);

  const fetchDistillery = async () => {
    try {
      const response = await axios.get(`/api/distilleries/${id}`);
      setDistillery(response.data);
    } catch (error) {
      console.error("Error fetching distillery:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDistillery((prevDistillery) => ({
      ...prevDistillery,
      [name]: value,
    }));
  };

  const handleBourbonChange = (index, field, value) => {
    setDistillery((prevDistillery) => ({
      ...prevDistillery,
      bourbons: prevDistillery.bourbons.map((bourbon, idx) =>
        idx === index ? { ...bourbon, [field]: value } : bourbon
      ),
    }));
  };

  const handleCustomerChange = (index, field, value) => {
    setDistillery((prevDistillery) => ({
      ...prevDistillery,
      customers: prevDistillery.customers.map((customer, idx) =>
        idx === index ? { ...customer, [field]: value } : customer
      ),
    }));
  };

  //   const handleBourbonDelete = (index) => {
  //     setDistillery((prevDistillery) => ({
  //       ...prevDistillery,
  //       bourbons: prevDistillery.bourbons.filter((bourbon, idx) => idx !== index),
  //     }));
  //   };

  //   const handleCustomerDelete = (index) => {
  //     setDistillery((prevDistillery) => ({
  //       ...prevDistillery,
  //       customers: prevDistillery.customers.filter(
  //         (customer, idx) => idx !== index
  //       ),
  //     }));
  //   };

  // Inside BourbonDistilleryUpdate.jsx

  const handleBourbonDelete = async (index) => {
    const bourbonId = distillery.bourbons[index].id;
    try {
      await axios.delete(`/api/bourbons/${bourbonId}`);
      setDistillery((prevDistillery) => ({
        ...prevDistillery,
        bourbons: prevDistillery.bourbons.filter((_, idx) => idx !== index),
      }));
    } catch (error) {
      console.error("Error deleting bourbon:", error);
    }
  };

  const handleCustomerDelete = async (index) => {
    const customerId = distillery.customers[index].id;
    try {
      await axios.delete(`/api/customers/${customerId}`);
      setDistillery((prevDistillery) => ({
        ...prevDistillery,
        customers: prevDistillery.customers.filter((_, idx) => idx !== index),
      }));
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/distilleries/${id}`, distillery);
      navigate("/distilleries");
    } catch (error) {
      console.error("Error updating distillery:", error);
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Update Bourbon Distillery</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={distillery.name}
            onChange={handleChange}
            pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
            title="Only alphabets and spaces allowed"
            required
          />
        </div>
        <div>
          <label>License Number:</label>
          <input
            type="text"
            name="licenseNumber"
            placeholder="license number"
            value={distillery.licenseNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}" // Accepts exactly 10 numeric characters
            title="license number must be 10 digits long"
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            value={distillery.address}
            onChange={handleChange}
            pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
            title="Only alphabets and spaces allowed"
            required
          />
        </div>
        <h2>Bourbons</h2>
        {distillery.bourbons.map((bourbon, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="name"
              value={bourbon.name}
              onChange={(e) =>
                handleBourbonChange(index, "name", e.target.value)
              }
              pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
              title="Only alphabets and spaces allowed"
              required
            />
            <select
              name="type"
              value={bourbon.type}
              onChange={(e) =>
                handleBourbonChange(index, "type", e.target.value)
              }
              required>
              <option value="">Select Type</option>
              {[
                "SINGLE_BARREL",
                "CASK_STRENGTH",
                "WHEATED",
                "HIGH_RYE",
                "HIGH_CORN",
                "SMALL_BATCH",
              ].map((option) => (
                <option key={option} value={option}>
                  {option.replace(/_/g, " ")}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={bourbon.abv}
              onChange={(e) =>
                handleBourbonChange(index, "abv", e.target.value)
              }
            />
            <button type="button" onClick={() => handleBourbonDelete(index)}>
              Delete
            </button>
          </div>
        ))}
        <h2>Customers</h2>
        {distillery.customers.map((customer, index) => (
          <div key={index}>
            <input
              type="text"
              value={customer.name}
              placeholder="name"
              onChange={(e) =>
                handleCustomerChange(index, "name", e.target.value)
              }
              pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
              title="Only alphabets and spaces allowed"
              required
            />
            <input
              type="text"
              value={customer.phoneNumber}
              placeholder="phone number"
              onChange={(e) =>
                handleCustomerChange(index, "phoneNumber", e.target.value)
              }
              required
              pattern="[0-9]{11}" // Accepts exactly 10 numeric characters
              title="Phone number must be 11 digits long"
            />
            <button type="button" onClick={() => handleCustomerDelete(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type="submit">Update Distillery</button>
      </form>
    </div>
  );
};

export default BourbonDistilleryUpdate;
