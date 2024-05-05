import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';

function Users() {
    let [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    
        const fetchUsers = async () => {
          try {
            
            let username = localStorage.getItem('username');
            let token = localStorage.getItem('Token');
         
            const response = await axios.get('http://localhost:8080/api/providers', {
            
              headers: {
                accept: "*/*",
                "Content-Type": "application/json",
                Authorization: token,
              },
            });
            setUsers(response.data);
    
            console.log(users);
          } catch (error) {
              console.error('Error fetching pets:', error);
            };
        }
    
        fetchUsers();
        console.log(users);
      }, []);

      return (
        <div>
          <h1>Users for Service</h1>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <h2>{user.username}</h2>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <Link to={`/${user.id}/MakeAppointment`}><h4>Make Appointment</h4></Link>
              </li>
            ))}
          </ul>
        </div>
      );
} 
export default Users;