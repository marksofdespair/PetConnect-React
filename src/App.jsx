import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import UserHome from './Pages/UserHome';
import ServiceSearch from './Pages/ServiceSearch'; 
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home page/Home */}
          <Route path="/Login" element={<Login />} /> {/* Route for Login */}
          <Route path="/UserHome" element={<UserHome />} /> {/* Route for UserHome */}
          <Route path="/ServiceSearch" element={<ServiceSearch />} /> {/* Route for ServiceSearch */}
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <footer>© Team Laika Capstone Project 2024</footer>
    </div>
  );
};

export default App;
