// PlaceholderComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const PlaceholderComponent = () => {
  return (
    <div className="centered-div">
      <h1>Welcome to Bourbon Distillery Management Application</h1>
      <p>This is the homepage. Click on a distillery name to view its details.</p>
      <Link to="/distilleries">Click here to see the distillery listing!</Link>

    </div>
  );
};

export default PlaceholderComponent;
