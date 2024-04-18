import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '', // Add password field
    verifyPassword: '',
    accountType: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);

      console.log('Registration successful:', response.data);
      // Redirect logic here

    } catch (error) {
      console.error('Registration error:', error.response);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Verify Password:
          <input type="password" name="verifyPassword" value={formData.verifyPassword} onChange={handleChange} />
        </label>
        <label>
          Account Type:
          <select name="accountType" value={formData.accountType} onChange={handleChange}>
            <option value="">Select Account Type</option>
            <option value="Owner">Owner</option>
            <option value="Provider">Provider</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
