import React from 'react';
import { Link } from 'react-router-dom';

const UserHome = () => {
  const handleAddPet = () => {
    // Logic for adding a pet
    console.log('Adding a pet...');
  };

  const handleSearchService = () => {
    // Logic for searching for a service
    console.log('Searching for a service...');
  };

  return (
    <div>
      <h2>User Panel</h2>
      {/* Add User Panel content here */}
      <button onClick={handleAddPet}>Add Pet</button> {/* Button for adding a pet */}
      <button onClick={handleSearchService}>Find a Service</button> {/* Button for searching for a service */}
      <br />
      <Link to="/">Go back to Homepage</Link> {/* Link to go back to homepage */}
    </div>
  );
};

export default UserHome;
