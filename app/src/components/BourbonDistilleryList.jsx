import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const BourbonDistilleryList = () => {
  const [distilleries, setDistilleries] = useState([]);

  useEffect(() => {
    fetchDistilleries();
  }, []);

  const fetchDistilleries = () => {
    axios.get('/api/distilleries')
      .then(response => setDistilleries(response.data))
      .catch(error => console.error('Error fetching distilleries:', error));
  };
  const handleDeleteDistillery = async (id) => {
    try {
      await axios.delete(`/api/distilleries/${id}`);
      setDistilleries(distilleries.filter(distillery => distillery.id !== id));
    } catch (error) {
      console.error('Error deleting distillery:', error);
    }
  };

  return (
    <div className="centered-div">
      <button className="button-wrapper"> <Link to="/distilleries/new">Create New Distillery</Link> </button>
      <h2>Bourbon Distilleries</h2>
      <ul className="presentable-list">
        {distilleries.map(distillery => (
          <li key={distillery.id}>
            <Link to={`/distilleries/${distillery.id}`}>{distillery.name}</Link>
            <button className="button-wrapper" ><Link to={`/distilleries/${distillery.id}/update`}>Update</Link></button>
            <button className="button-wrapper" onClick={() => handleDeleteDistillery(distillery.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default BourbonDistilleryList;
