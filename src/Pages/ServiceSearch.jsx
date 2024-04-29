import React, { useState } from 'react';
import axios from 'axios';

const ServiceSearch = () => {
  let [searchResults, setSearchResults] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [distance, setDistance] = useState('');
  const [isGroomer, setIsGroomer] = useState(null);
  const [isSitter, setIsSitter] = useState(null);
  const [isTrainer, setIsTrainer] = useState(null);
  const [isWalker, setIsWalker] = useState(null);
<<<<<<< HEAD

  let searchResultsParsed = [];

  const apiUrl = '/api/services'; // Replace with actual API endpoint
=======
>>>>>>> refs/remotes/origin/main

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
<<<<<<< HEAD

      const response = await axios.post('http://localhost:8080/api/providers/search', {
=======
      const params = {
>>>>>>> refs/remotes/origin/main
        zipCode,
        distance,
        isGroomer,
        isSitter,
        isTrainer,
        isWalker
<<<<<<< HEAD
      });
      // API Logic holding parking spot, ex axios.get(apiUrl, { params: { zipCode, distance } })

      // let searchResultsParsed = [];

      // for (let searchResult in response.data) {

      //   let jsonParsed = JSON.parse(searchResult);

      //   searchResultsParsed.push(jsonParsed);

      // }

      // console.log(searchResultsParsed);

      setSearchResults(response.data);

      console.log(`Searching for providers near zip code ${zipCode} within ${distance} miles.`);
      // Updates searchResults state based on API response
=======
      };

      // Send API request with params
      const response = await axios.get(apiUrl, { params });

      // Update searchResults state based on API response
      setSearchResults(response.data);
>>>>>>> refs/remotes/origin/main
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Sets searchResults to an empty array in case of errors
      setSearchResults([]);
    }

  //   for (let i = 0; i < searchResults.length; i++) {

  //     let jsObject = JSON.parse(String.searchResults[i]);

  //     searchResultsParsed.push(jsObject);

  // }

  // console.log(searchResultsParsed);

  };

<<<<<<< HEAD
  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setSelectedSkills((
  //     isGroomer,
  //     isSitter,
  //     isTrainer,
  //     isWalker) => ({
  //       isGroomer = "true", [name]: checked,
  //       isSitter = "true", [name]: checked,
  //       isTrainer = "true", [name]: checked,
  //       isWalker = "true", [name]: checked
  //       })
  //     );
  // }
=======
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
>>>>>>> refs/remotes/origin/main

  return (
    <div>
      <h2>Search Page</h2>
      <div>
<<<<<<< HEAD
        <input type="checkbox" id="skillGrooming" name="isGroomer" value="true" onChange={(e) => setIsGroomer(e.target.value)}/>
        <label htmlFor="skillGrooming"> Grooming </label>
      </div>
      <div>
        <input type="checkbox" id="skillSitting" name="isSitter" value="true" onChange={(e) => setIsSitter(e.target.value)}/>
        <label htmlFor="skillSitting"> Pet Sitting </label>
      </div>
      <div>
        <input type="checkbox" id="skillTraining" name="isTrainer" value="true" onChange={(e) => setIsTrainer(e.target.value)}/>
        <label htmlFor="skillTraining"> Training </label>
      </div>
      <div>
        <input type="checkbox" id="skillWalking" name="isWalker" value="true" onChange={(e) => setIsWalker(e.target.value)}/>
=======
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
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
            {searchResults.map((provider,index) => (
              <li key={index}>
                <h2>{provider.name}</h2>
                <p>Distance: {provider.distance} Miles</p>
                <p>Groomer: {provider.groomer}</p>
                <p>Sitter: {provider.sitter}</p>
                <p>Walker: {provider.walker}</p>
                <p>Trainer: {provider.trainer}</p>
              </li>
=======
            {searchResults.map((index) => (
              <li key={index}>{provider.name}</li>
>>>>>>> refs/remotes/origin/main
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
