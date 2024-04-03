import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/button';

const ServiceSearch = () => {
  const [serviceType, setServiceType] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search based on the selected service type - this currently only logs it, sry :[
    console.log(`Searching for ${serviceType} providers...`);
    // Put actual search in the database and updates to the searchResults state here
    // Just putting an empty placeholding array here for now.
    setSearchResults([]);
  };

  // Eventually this will probably be check-boxes. Page is currently inoperable.
  return (
    <div>
      <h2>Search Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select a service type: 
          <select value={serviceType} onChange={handleServiceTypeChange}>
            <option value="">Select a service</option>
            <option value="Training">Training</option> 
            <option value="Grooming">Grooming</option> 
            <option value="Pet Sitting">Pet Sitting</option>
            <option value="Dog Walking">Dog Walking</option>
          </select>
        </label>
        <Button type="submit" text="Search" />
      </form>
      {searchResults.length > 0 ? (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((provider, index) => (
              <li key={index}>{provider.name}</li> // Display provider information here
            ))}
          </ul>
        </div>
      ) : (
        <p>No search results yet.</p>
      )}
      <Link to="/UserHome">
      <Button type="submit" text="Go Back" />
      </Link>
    </div>
  );
};

export default ServiceSearch;
