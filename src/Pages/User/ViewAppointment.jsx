import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useParams} from "react-router-dom";
import * as jwtDecode from 'jwt-decode';

function PetInfo() {
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
          console.error('Error fetching pet:', error);
        }
      };
  
      fetchAppointment();
    }, appointmentId);

  return (
    <div>
      <h1>{appointment.name}</h1>
            
            {/* <p>Pet: {appointment.pet}</p> */}
            <p>Location: {appointment.setting}</p>
            <p>Time: {appointment.time}</p>
            <p>Description: {appointment.description}</p>
            {/* <p>Provider: {appointment.provider}</p> */}
          
        
      
      <Link to={`/DeleteAppointment/${appointmentId}`}>
        <button>Cancel Appointment</button>
      </Link>
      {/* <Link to={`/UpdateAppointment/${appointmentId}`}>
        <button>Update Profile</button>
      </Link> */}
    </div>
  );
}
export default PetInfo;