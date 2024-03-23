import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserHome from './Pages/UserHome'; // Import UserHome component
import ServiceSearch from './Pages/ServiceSearch'; // Assuming correct file path
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to PetConnect!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/userhome">User Panel</Link> {/* Link to UserHome page */}
            </li>
            <li>
              <Link to="/servicesearch">Find a Service</Link> {/* Link to ServiceSearch page */}
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/userhome" element={<UserHome />} /> {/* Route for UserHome */}
        <Route path="/servicesearch" element={<ServiceSearch />} /> {/* Route for ServiceSearch */}
      </Routes>
    </Router>
  );
};

export default App;
