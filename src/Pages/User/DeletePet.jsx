import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import {useParams} from "react-router-dom";
import * as jwtDecode from 'jwt-decode';



function DeletePet() {
let [pet, setPet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { petId } = useParams();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/pets/delete/${petId}`);
        console.log('Response from API:', response.data);
        setPet(response.data);
      } catch (error) {
        console.error('Error fetching pet:', error);
      }
    };

    fetchPet();
  }, [petId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Retrieve the username from local storage
      let username = localStorage.getItem('username');
  
      // Check if username exists
      if (!username) {
        throw new Error('Username not found in local storage');
      }

      // Remove extra characters from the username
      username = username.replace(/^"|"$/g, '');
  
      // Send the request with the username
      const response = await axios.post(`http://localhost:8080/api/pets/delete/${petId}`, { 
      });
  
      setSuccessMessage('Pet removed.');
    } catch (error) {
      setErrorMessage('Failed to remove pet. Please try again.');
    }
  };

return (
    <div>
      <h1>Remove {pet.name}?</h1>
      <h4>Species: {pet.species}</h4>
      <h4>Breed: {pet.breed}</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="submit" value="Delete" className="btn btn-success" />
        </div>
        </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
};

export default DeletePet;