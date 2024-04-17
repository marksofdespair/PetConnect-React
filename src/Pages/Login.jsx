import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('regular');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
        accountType,
      });

      // Assuming login was successful, should redirect the user to another page
      console.log('Login successful', response.data);
      // Redirect logic here

    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, ex, display error message to user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="accountType">Account Type:</label>
          <select 
            id="accountType" 
            name="accountType" 
            value={accountType} 
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="regular">Pet Parent</option>
            <option value="provider">Service Provider</option>
          </select>
        </div>
            <button type="submit">Login</button>
        <br />
        No account? <Link to="/CreateAccount">Create one</Link>.
      </form>
    </div>
  );
};

export default Login;
