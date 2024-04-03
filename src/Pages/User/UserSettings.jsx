import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSettings = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [publicEmail, setPublicEmail] = useState('');

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
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
    // More submit form data and stuff
    console.log('Form submitted!');
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          About:
          <textarea value={about} onChange={handleAboutChange} />
        </label>
        <br />
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
        <br />
        <button type="submit">Save Changes</button>
      </form>
      <br />
      <Link to="/UserHome">Go Back</Link><br></br><Link to="/AddPet">Add a Pet</Link>
    </div>
  );
};

export default UserSettings;
