import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const ServiceSearch = () => {
  let [searchResults, setSearchResults] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [distance, setDistance] = useState('');
  const [isGroomer, setIsGroomer] = useState(null);
  const [isSitter, setIsSitter] = useState(null);
  const [isTrainer, setIsTrainer] = useState(null);
  const [isWalker, setIsWalker] = useState(null);

  const apiUrl = '/api/services'; // Replace with actual API endpoint

  const handleSearch = async (event) => {
    event.preventDefault();
    try {

      const response = await axios.post('http://localhost:8080/api/providers/search', {
        zipCode,
        distance,
        isGroomer,
        isSitter,
        isTrainer,
        isWalker
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
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Sets searchResults to an empty array in case of errors
    }

  //   for (let i = 0; i < searchResults.length; i++) {

  //     let jsObject = JSON.parse(String.searchResults[i]);

  //     searchResultsParsed.push(jsObject);

  // }

  // console.log(searchResultsParsed);

  };

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

  return (
    <div>
      <h2>Search Page</h2>
      <div>
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
            {searchResults.map((provider,index) => (
              <li key={index}>
                <Link to={`/Profile/${provider.userId}`}>
                  <h2>{provider.name}</h2>
                </Link>
                <p>Distance: {provider.distance} Miles</p>
                <p>Groomer: {provider.groomer}</p>
                <p>Sitter: {provider.sitter}</p>
                <p>Walker: {provider.walker}</p>
                <p>Trainer: {provider.trainer}</p>
              </li>
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
