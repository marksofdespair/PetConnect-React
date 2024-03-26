import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('regular');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, like sending data to backend ig
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Account Type:', accountType);
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
        <br>
        </br>
        No account? <Link to="/CreateAccount">Create one</Link>.
      </form>
    </div>
  );
};

export default Login;
