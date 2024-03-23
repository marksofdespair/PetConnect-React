import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserHome from './Pages/UserHome'; // Import UserHome component
import Login from './Pages/Login';
import ServiceSearch from './Pages/ServiceSearch'; 
import PetConnectLogo from './assets/PetConnectLogo.png';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <img src={PetConnectLogo} alt="Team Laika logo" />
          <h1>Welcome to PetConnect!</h1>
          <nav>
            <ul id="simplenav">
              <li>
                <Link to="/UserHome">User Panel</Link> {/* Link to UserHome page */}
              </li>
              <li>
                <Link to="/ServiceSearch">Find a Service</Link> {/* Link to ServiceSearch page */}
              </li>
            </ul>
          </nav>
        </div>
        <div>
          Not a member yet? <Link to="/Login">Join now or Login!</Link>
        </div>
        <Routes>
        <Route path="/Login" element={<Login />} /> {/* Route for UserHome */}
          <Route path="/userhome" element={<UserHome />} /> {/* Route for UserHome */}
          <Route path="/servicesearch" element={<ServiceSearch />} /> {/* Route for ServiceSearch */}
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <footer>© Team Laika Capstone Project 2024</footer>
    </div>
  );
};

export default App;
