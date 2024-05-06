import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import {useParams} from "react-router-dom";
import * as jwtDecode from 'jwt-decode';

function DeleteAppointment() {
let [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { appointmentId } = useParams();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/appointments/${appointmentId}`);
        console.log('Response from API:', response.data);
        setAppointment(response.data);
        console.log(appointment);
      } catch (error) {
        console.error('Error fetching Appointment:', error);
      }
    };

    fetchAppointment();
  }, [appointmentId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    //   let username = localStorage.getItem('username');
    //   if (!username) {
    //     throw new Error('Username not found in local storage');
    //   }
    //   username = username.replace(/^"|"$/g, '');
  
      // Send the request with the username
      const response = await axios.post(`http://localhost:8080/api/appointments/delete/${appointmentId}`, { 
      });
  
      setSuccessMessage('Appointment cancelled.');
    } catch (error) {
      setErrorMessage('Failed to cancel appointment. Please try again.');
    }
  };

  return (
    <div>
      <h1>Cancel appointment {appointment.name} for {appointment.location} at {appointment.time}?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="submit" value="Cancel Appointment" className="btn btn-success" />
        </div>
        </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
};

export default DeleteAppointment;