import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('Owner');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
        accountType,
      });
      // Extract token from response data
      localStorage.setItem('accountType', accountType);
      localStorage.setItem('username', username);
      console.log('Login successful', response.data);
      // console.log('Token:', token);
      console.log('Account Type:', accountType);
      // const token = response.data;
      localStorage.setItem('token', response.data);
      navigate('/WelcomeBack'); // Redirects to welcome back page if login successful
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, display error message to user
      if (error.response && error.response.data && error.response.data.message) {
        alert(`Login failed: ${error.response.data.message}`);
      } else {
        alert('Login failed. Please try again later.');
      }
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
            <option value="Owner">Owner</option>
            <option value="Provider">Provider</option>
          </select>
        </div>
        <button type="submit">Login</button>
        <br />
        No account? <Link to="/RegisterForm">Create one</Link>.
      </form>
    </div>
  );
};
export default Login;