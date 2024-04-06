import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const BourbonDistilleryDetails = () => {
  console.log("in details");
  const { id } = useParams();
  const navigate = useNavigate();
  const [distillery, setDistillery] = useState(null);

  useEffect(() => {
    fetchDistilleryDetails();
  }, []);

  const fetchDistilleryDetails = () => {
    axios
      .get(`/api/distilleries/${id}`)
      .then((response) => setDistillery(response.data))
      .catch((error) =>
        console.error("Error fetching distillery details:", error)
      );
  };

  if (!distillery) {
    return <div>Loading...</div>;
  }

  return (
    <div className="centered-div">
      <button className="button-wrapper" type="button" onClick={() => navigate("/distilleries")}>
        Back
      </button>

      <h2>{distillery.name}</h2>
      <div>
        <strong>License Number:</strong> {distillery.licenseNumber}
      </div>
      <div>
        <strong>Address:</strong> {distillery.address}
      </div>
      <div>
        <h3>Bourbons:</h3>
        <ul>
          {distillery.bourbons.map((bourbon, index) => (
            <li key={index}>
              <strong>Name:</strong> {bourbon.name}, <strong>Type:</strong>{" "}
              {bourbon.type}, <strong>ABV:</strong> {bourbon.abv}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Customers:</h3>
        <ul>
          {distillery.customers.map((customer, index) => (
            <li key={index}>
              <strong>Name:</strong> {customer.name},{" "}
              <strong>Phone Number:</strong> {customer.phoneNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BourbonDistilleryDetails;
