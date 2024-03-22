import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ServiceSearch from './Pages/servicesearch';
import './App.css'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to PetConnect!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/user-panel">User Panel</Link>
          </li>
          <li>
            <Link to="/add-pet">Add Pet</Link>
          </li>
          <li>
            <Link to="/servicesearch">Find a Service</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const UserPanel = () => {
  return <h2>User Panel</h2>;
};

const AddPet = () => {
  return <h2>Add Pet</h2>;
};

const FindService = () => {
  return <h2>Find a Service</h2>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userhome" element={<UserPanel />} />
        <Route path="/addpet" element={<AddPet />} />
        <Route path="/servicesearch" element={<ServiceSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
