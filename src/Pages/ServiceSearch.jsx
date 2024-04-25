import React, { useState } from 'react';
import axios from 'axios';

const ServiceSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [distance, setDistance] = useState('');
  const apiUrl = '/api/services'; // Replace with actual API endpoint

  const handleSearch = async () => {
    try {
      // API Logic holding parking spot, ex axios.get(apiUrl, { params: { zipCode, distance } })
      console.log(`Searching for providers near zip code ${zipCode} within ${distance} miles.`);
      // Updates searchResults state based on API response
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Sets searchResults to an empty array in case of errors
    }
  };

  return (
    <div>
      <h2>Search Page</h2>
      <div>
        <input type="checkbox" id="skillGrooming" name="isGroomer" value="true" />
        <label htmlFor="skillGrooming"> Grooming </label>
      </div>
      <div>
        <input type="checkbox" id="skillSitting" name="isSitter" value="true" />
        <label htmlFor="skillSitting"> Pet Sitting </label>
      </div>
      <div>
        <input type="checkbox" id="skillTraining" name="isTrainer" value="true" />
        <label htmlFor="skillTraining"> Training </label>
      </div>
      <div>
        <input type="checkbox" id="skillWalking" name="isWalker" value="true" />
        <label htmlFor="skillWalking"> Walking </label>
      </div>
      <div>
        <label htmlFor="zipCode">Enter Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="distance">Enter Distance (in miles):</label>
        <input
          type="number"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 ? (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((provider, index) => (
              <li key={index}>{provider.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No search results yet.</p>
      )}
    </div>
  );
};

export default ServiceSearch;
