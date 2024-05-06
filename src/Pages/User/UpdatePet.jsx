import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useParams} from "react-router-dom";
import * as jwtDecode from 'jwt-decode';

function UpdatePet() {
    let [pet, setPet] = useState([]);
    const [name, setName] = useState('');
    const [conditions, setConditions] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { petId } = useParams();
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

      const response = await axios.post(`http://localhost:8080/api/pets/update/${petId}`, {
        name,
         // Include the username in the request body
      });
      setSuccessMessage('Cat added successfully!');
      setName('');
      setDescription('');
      setConditions('');
    } catch (error) {
      setErrorMessage('Failed to add cat. Please try again.');
    }
  };

    return (
        <div>
          <h1>Update {pet.name}:</h1>
        <form>
                <p>Current Name: {pet.name}</p>
                <div className="form-group">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                {/* <p>Current Bio: {pet.description}</p>
                <div className="form-group">
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                </div>
                <p>Current Conditions: {pet.conditions}</p> 
                <div className="form-group">
                    <input type="text" value={conditions} onChange={(e) => setConditions(e.target.value)} className="form-control" />
                </div> */}
                <div className="form-group">
          <input type="submit" value="Update" className="btn btn-success" />
        </div>
      </form>
                
              
            
          
        </div>
      );
}
export default UpdatePet;