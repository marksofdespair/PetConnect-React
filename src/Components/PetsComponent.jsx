import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetsComponent = ({ owner_id }) => {
  const [pets, setPets] = useState([]);
  
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`/api/users/${owner_id}/pets`);
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, [owner_id]);

  return (
    <div>
      <h3>Pets:</h3>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetsComponent;
