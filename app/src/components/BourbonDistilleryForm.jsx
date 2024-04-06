import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const BourbonDistilleryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    licenseNumber: "",
    address: "",
    bourbons: [{ name: "", type: "", abv: "" }],
    customers: [{ name: "", phoneNumber: "" }],
  });

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    const updatedData = { ...formData };
    updatedData[type][index][name] = value;
    setFormData(updatedData);
  };

  const addBourbon = () => {
    setFormData({
      ...formData,
      bourbons: [...formData.bourbons, { name: "", type: "", abv: "" }],
    });
  };

  const addCustomer = () => {
    setFormData({
      ...formData,
      customers: [...formData.customers, { name: "", phoneNumber: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/distilleries", formData);
      console.log("Bourbon Distillery created:", response.data);
      // Optionally, you can redirect to another page or perform any other action upon successful creation
    } catch (error) {
      console.error("Error creating Bourbon Distillery:", error);
      // Handle error, display error message, etc.
    }
    navigate("/distilleries");
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
      <button type="button" onClick={() => navigate("/distilleries")}>
        Go Back
      </button>

        <h2>New Bourbon Distillery</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
            title="Only alphabets and spaces allowed"
          />
        </div>
        <div>
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            placeholder="license number"
            value={formData.licenseNumber}
            onChange={(e) =>
              setFormData({ ...formData, licenseNumber: e.target.value })
            }
            required
            pattern="[0-9]{10}" // Accepts exactly 10 numeric characters
            title="license number must be 10 digits long"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
            pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
            title="Only alphabets and spaces allowed"
          />
        </div>
        <h3>Bourbons:</h3>
        {formData.bourbons.map((bourbon, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={bourbon.name}
              onChange={(e) => handleChange(e, index, "bourbons")}
              placeholder="Name"
              required
              pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
              title="Only alphabets and spaces allowed"
            />
            <select
              name="type"
              value={bourbon.type}
              onChange={(e) => handleChange(e, index, "bourbons")}
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
            {/* <input
              type="number"
              value={bourbon.abv}
              onChange={(e) =>
                handleBourbonChange(index, "abv", e.target.value)
              }
            /> */}
            <input
              type="number"
              name="abv"
              value={bourbon.abv}
              onChange={(e) => handleChange(e, index, "bourbons")}
              placeholder="ABV"
              required
            />
          </div>
        ))}
        <button type="button" onClick={addBourbon}>
          Add Bourbon
        </button>

        <h3>Customers:</h3>
        {formData.customers.map((customer, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={(e) => handleChange(e, index, "customers")}
              placeholder="Name"
              required
              pattern="[A-Za-z\s]+" // Only alphabets and spaces allowed
              title="Name should be only of alphabets and spaces"
            />
            <input
              type="text"
              name="phoneNumber"
              value={customer.phoneNumber}
              onChange={(e) => handleChange(e, index, "customers")}
              placeholder="Phone Number"
              required
              pattern="[0-9]{11}" // Accepts exactly 10 numeric characters
              title="Phone number must be 11 digits long"
            />
          </div>
        ))}
        <button type="button" onClick={addCustomer}>
          Add Customer
        </button>
        <br/>
        <button type="submit" OnClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default BourbonDistilleryForm;
