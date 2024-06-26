import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useParams} from "react-router-dom";
import * as jwtDecode from 'jwt-decode';

function PetInfo() {
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

  return (
    <div>
      <h1>{pet.name}</h1>
            
            <p>Species: {pet.species}</p>
            <p>Breed: {pet.breed}</p>
            {/* <p>Description: {pet.petInfo.description}</p>
            <p>Conditions: {pet.petInfo.conditions}</p> */}
            {/* Add more pet details here as needed */}
          
        
      
      <Link to={`/DeletePet/${petId}`}>
        <button>Remove Pet</button>
      </Link>
      <Link to={`/DeletePet/${petId}`}>
        <button>Update Profile</button>
      </Link>
    </div>
  );
}
export default PetInfo;