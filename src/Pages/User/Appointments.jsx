import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Appointments(){
let [appointments, setAppointments] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    

    const fetchAppointments = async () => {
        try {
          
          let username = localStorage.getItem('username');
          let token = localStorage.getItem('Token');
       
          const response = await axios.get('http://localhost:8080/api/appointments', {
          
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
              Authorization: token,
            },
          });
          setAppointments(response.data);
  
          console.log(appointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
          };
      }
  
      fetchAppointments();

    
}, []);
return (
    <div>
      <h1>My Appointments</h1>
      <Link to="/ListProviders">
        <button>Add New</button>
      </Link>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {/* Figure out how to pull the userid from the appointment */}
            <Link to={`/ViewAppointment/${appointment.id}`}><h2>{appointment.name}</h2></Link>
            <p>Location: {appointment.setting}</p>
            <p>Time: {appointment.time}</p>
            <p>Description: {appointment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;