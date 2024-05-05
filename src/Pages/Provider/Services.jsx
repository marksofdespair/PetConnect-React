import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';

function Services() {
  
    let [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
      
      const fetchServices = async () => {
        try {
          
          let username = localStorage.getItem('username');
          let token = localStorage.getItem('Token');
       
          const response = await axios.get('http://localhost:8080/api/services', {
          
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
              Authorization: token,
            },
          });
          setProviders(response.data);
  
          console.log(providers);
        } catch (error) {
            console.error('Error fetching services:', error);
          };
      }
  
      fetchServices();
      console.log(services);
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
        <h1>Services</h1>
        {/* <Link to="/MakeAppointment">
          <button>Add New</button>
        </Link> */}
        <ul>
          {providers.map(provider => (
            <li key={provider.id}>
              <Link to={`${provider.id}/MakeAppointment`}><h2>{provider.name}</h2></Link>
              <p>Grooming: {provider.isGroomer}</p>
              <p>Pet Sitting: {provider.isSitter}</p>
              <p>Walking: {provider.isWalker}</p>
              <p>Training: {provider.isTrainer}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default Services;