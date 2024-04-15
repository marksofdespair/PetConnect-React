import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/button';
import axios from 'axios'; 

const ServiceSearch = () => {
  const [serviceType, setServiceType] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = '/api/services'; // API endpoint here, modify as needed :>

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${serviceType} providers...`);
    
    // API logic/request to fetch search results
    axios.get(apiUrl, { params: { serviceType } })
      .then(response => {
        setSearchResults(response.data); // Update searchResults state with API response
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setSearchResults([]); // Set searchResults to empty array in case of errors
      });
  };

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
              <li key={index}>{provider.name}</li> // Should display provider information here
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
