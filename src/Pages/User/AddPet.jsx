import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [petType, setPetType] = useState('');

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

  const handlePetTypeChange = (type) => {
    setPetType(type);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>What kind of pet do you have?</h1>
      <div>
        <button onClick={() => handlePetTypeChange('dog')}>Dog</button>
        <button onClick={() => handlePetTypeChange('cat')}>Cat</button>
      </div>
      {petType && (
        <Link to={`/Add${petType.charAt(0).toUpperCase() + petType.slice(1)}`}>
        <button>Add {petType.charAt(0).toUpperCase() + petType.slice(1)}</button>
        </Link>      
      )}
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