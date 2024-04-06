// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BourbonDistilleryList from './components/BourbonDistilleryList';
import BourbonDistilleryDetails from './components/BourbonDistilleryDetails';
import PlaceholderComponent from './components/PlaceholderComponent';
import BourbonDistilleryUpdate from './components/BourbonDistilleryUpdate';
import BourbonDistilleryForm from './components/BourbonDistilleryForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlaceholderComponent />} />
        <Route path="/distilleries/:id" element={<BourbonDistilleryDetails />} />
        <Route path="/distilleries" element={<BourbonDistilleryList />} />
        <Route path="/distilleries/:id/update" element={<BourbonDistilleryUpdate />} />
        <Route path="/distilleries/new" element={<BourbonDistilleryForm />} />

      </Routes>
    </Router>
  );
};

export default App;
