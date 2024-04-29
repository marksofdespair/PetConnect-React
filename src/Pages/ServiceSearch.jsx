import React, { useState } from 'react';
import axios from 'axios';

const ServiceSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [distance, setDistance] = useState('');
  const [isGroomer, setIsGroomer] = useState(null);
  const [isSitter, setIsSitter] = useState(null);
  const [isTrainer, setIsTrainer] = useState(null);
  const [isWalker, setIsWalker] = useState(null);

  const handleSearch = async () => {
    try {
      const params = {
        zipCode,
        distance,
        isGroomer,
        isSitter,
        isTrainer,
        isWalker
      };

      // Send API request with params
      const response = await axios.get(apiUrl, { params });

      // Update searchResults state based on API response
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Sets searchResults to an empty array in case of errors
      setSearchResults([]);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    switch(name) {
      case 'isGroomer':
        setIsGroomer(checked);
        break;
      case 'isSitter':
        setIsSitter(checked);
        break;
      case 'isTrainer':
        setIsTrainer(checked);
        break;
      case 'isWalker':
        setIsWalker(checked);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h2>Search Page</h2>
      <div>
        <input 
          type="checkbox" 
          id="skillGrooming" 
          name="isGroomer" 
          value="true"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="skillGrooming"> Grooming </label>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="skillSitting" 
          name="isSitter" 
          value="true"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="skillSitting"> Pet Sitting </label>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="skillTraining" 
          name="isTrainer" 
          value="true"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="skillTraining"> Training </label>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="skillWalking" 
          name="isWalker" 
          value="true"
          onChange={handleCheckboxChange}
        />
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
            {searchResults.map((index) => (
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
