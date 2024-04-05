import React from 'react';
import { Link } from 'react-router-dom';

const UserHome = () => {
  return (
    <div>
      <h2>User Panel</h2>
      {/* Add User Panel content here */}
      <Link to="/AddPet">
        <button>Add Pet</button> {/* Button for adding a pet */}
      </Link>
      <Link to="/ServiceSearch">
        <button>Find a Service</button> {/* Button for searching for a service */}
      </Link>
      <br />
      <Link to="/">Go back to Homepage</Link> {/* Link to go back to homepage */}
    </div>
  );
};

export default UserHome;
