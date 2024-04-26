import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

let username = localStorage.getItem('username');
// Check if username exists
if (!username) {
  throw new Error('Username not found in local storage');
}
//const authStr = 'Bearer + 4521J7';
username = username.replace(/^"|"$/g, '');
function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {

    const fetchPets = async () => {
      try {

        let username = localStorage.getItem('username');
        // Check if username exists
        if (!username) {
          throw new Error('Username not found in local storage');
        }

        username = username.replace(/^"|"$/g, '');

        const response = await axios.get('http://localhost:8080/api/pets', {
          username
        });
        setPets(response.data);
      } catch (error) {
          console.error('Error fetching pets:', error);
        };
    }

    fetchPets();
  }, []);

    // Fetch pet data from the backend - only update if port or api URL changes.

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      <h1>My Pets</h1>
      <Link to="/AddPet">
        <button>Add New</button>
      </Link>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <h2>{pet.name}</h2>
            <p>Species: {pet.species}</p>
            <p>Breed: {pet.breed}</p>
            {/* Add more pet details here as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pets;