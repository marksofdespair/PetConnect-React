import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountType, setAccountType] = useState('');

  useEffect(() => {
    // Testing logic to check if the user is logged in
    const isAuthenticated = /* Checks authentication status, pls dont remove for now */ true;
    setIsLoggedIn(isAuthenticated);
  }, []);

  useEffect(() => {
    // Redirect logic based on authentication
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/ProfileView');
    }
  }, [isLoggedIn, navigate]);

  // Return null since we're temporarily(?) handling redirects programmatically
  return null;
};

export default Profile;
