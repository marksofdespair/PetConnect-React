import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import {jwtDecode} from 'jwt-decode';

const MakeAppointment = () => {
  const [name, setName] = useState('');
  const [setting, setSetting] = useState('');
  const { userId } = useParams();
  const [description, setDescription] = useState('');
  const [pet, setPet] = useState('');
  const [pets, setPets] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/appointments/add-appointment');
        console.log('Response from API:', response.data);
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      let username = localStorage.getItem('username');
      if (!username) {
        throw new Error('Username not found in local storage');
      }
      username = username.replace(/^"|"$/g, '');
      let token = localStorage.getItem('Token');

      const response = await axios.post(`http://localhost:8080/api/appointments/${userId}/add-appointment`, {
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: token,
          },
          name,
          description,
          setting,
          pet
      });
      setSuccessMessage('Appointment added successfully!');
      setName('');
      setSetting('');
      setDescription('');
    } catch (error) {
      setErrorMessage('Failed to add appointment. Please try again.');
    }
  };

  return (
    <div>
      <h1>Make an Appointment:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Appointment Title:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Place and Time:</label>
          <input type="text" value={setting} onChange={(e) => setSetting(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Appointment Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Pet:</label>
          <select value={pet} onChange={(e) => setPet(e.target.value)} className="form-select">
            <option value="">Schedule for:</option>
            {pets.map((pet, index) => (
              <option key={index} value={pet.id}>
                {pet.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-success" />
        </div>
      </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
}
export default MakeAppointment;