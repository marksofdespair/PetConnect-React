import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [accountType, setAccountType] = useState('');
  const [name, setName] = useState('');
  const [titles, setTitles] = useState('');
  const [about, setAbout] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [publicEmail, setPublicEmail] = useState('');

  useEffect(() => {
    // Retrieve account type from local storage
    const storedAccountType = localStorage.getItem('accountType');
    if (storedAccountType) {
      setAccountType(storedAccountType); // Set the state without modifications this time
    }
  }, []);
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTitlesChange = (event) => {
    setTitles(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePublicEmailChange = (event) => {
    setPublicEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Public Email:
          <input type="email" value={publicEmail} onChange={handlePublicEmailChange} />
        </label>
      </div>
      {accountType === '"Provider"' && (
        <>
          <div>
            <label>
              Profile Picture:
              <input type="file" accept="image/*" />
            </label>
            <br />
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Titles:
              <input type="text" value={titles} onChange={handleTitlesChange} />
            </label>
            <br />
            <label>
              About:
              <textarea value={about} onChange={handleAboutChange} />
            </label>
          </div>
          <Link to="/AddService">Add Service</Link>
        </>
      )}
      <button type="submit" onClick={handleSubmit}>Save Changes</button>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );  
};

export default Settings;