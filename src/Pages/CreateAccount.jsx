import React, { useState } from 'react';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [providerType, setProviderType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation and submission logic
    console.log('Form submitted:', { username, password, confirmPassword, email, providerType });
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
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
            <option value="regular">Regular User</option>
            <option value="provider">Service Provider</option>
          </select>
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
