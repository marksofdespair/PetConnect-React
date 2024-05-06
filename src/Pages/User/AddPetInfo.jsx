import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import {jwtDecode} from 'jwt-decode';

const AddPetInfo = () => {
  const { petId } = useParams();

  const [pet, setPet] = useState('');
  const [conditions, setConditions] = useState('');
  const [description, setDescription] = useState('');
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/pets/petinfo/${petId}`);
        console.log('Response from API:', response.data);
        setPet(response.data);
        console.log(pet);
      } catch (error) {
        console.error('Error fetching pet:', error);
      }
    };

    fetchPet();
  }, petId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      let username = localStorage.getItem('username');
      if (!username) {
        throw new Error('Username not found in local storage');
      }
      username = username.replace(/^"|"$/g, '');

      const response = await axios.post(`http://localhost:8080/api/pets/add-pet-profile/${petId}`, {
          description,
          conditions,
          pet
      });
      setSuccessMessage('Info Updated!');
      setName('');
      setSetting('');
      setDescription('');
    } catch (error) {
      //setErrorMessage('Failed to update Information. Please try again.');
    }
  };

  return (
    <div>
      <h1>Update a Pet Bio for {pet.name}:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Bio:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Conditions and Other Important Info:</label>
          <input type="text" value={conditions} onChange={(e) => setConditions(e.target.value)} className="form-control" />
        </div>
        
        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-success" />
        </div>
      </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
}
export default AddPetInfo;