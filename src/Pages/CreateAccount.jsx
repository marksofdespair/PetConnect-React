import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [providerType, setProviderType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        name,
        username,
        password,
        verifyPassword: confirmPassword,
        email,
        accountType: providerType || 'regular',
      });

      console.log('Account created successfully:', response.data);
      // Redirect logic here

    } catch (error) {
      console.error('Account creation error:', error.response);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Provider Type:
          <select value={providerType} onChange={(e) => setProviderType(e.target.value)}>
            <option value="">Select Account Type</option>
            <option value="Owner">Regular User</option>
            <option value="provider">Service Provider</option>
          </select>
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
