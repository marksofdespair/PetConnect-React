import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';


function Pets() {
  
  let [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    
    const fetchPets = async () => {
      try {
        
        let username = localStorage.getItem('username');
        let token = localStorage.getItem('Token');
     
        const response = await axios.get('http://localhost:8080/api/pets', {
        
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        setPets(response.data);

        console.log(pets);
      } catch (error) {
          console.error('Error fetching pets:', error);
        };
    }

    fetchPets();
    console.log(pets);
  }, []);

    // Fetch pet data from the backend - only update if port or api URL changes.
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <div>
      <h1>My Pets</h1>
      <Link to="/AddPet">
        <button>Add New</button>
      </Link>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <Link to={`/PetInfo/${pet.id}`}><h2>{pet.name}</h2></Link>
            <p>Species: {pet.species}</p>
            <p>Breed: {pet.breed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Pets;