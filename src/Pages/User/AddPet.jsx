import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch pet data from the backend - only update if port or api URL changes.
    axios.get('http://localhost:8080/api/pets')
      .then(response => {
        setPets(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>My Pets</h1>
      <Link to="/AddPet"> {/* Link to the AddPet component */}
        <button>Add Pet</button> {/* Button to add a new pet */}
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
