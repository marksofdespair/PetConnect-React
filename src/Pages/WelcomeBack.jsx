import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeBack = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    // For now, just navigate to the login page
    navigate('/Login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome Back, {username || 'User'}!</h1>
      <p>You have successfully logged in.</p>
      <p>Feel free to explore the site.</p>
      <button onClick={handleLogout} style={{ backgroundColor: '#f44336', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
    </div>
  );
};

export default WelcomeBack;
