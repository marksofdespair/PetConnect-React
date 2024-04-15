import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountType, setAccountType] = useState('');

  // Testing logic check for user authentication and account type
  useEffect(() => {
    // Testing logic to check if the user is logged in
    const isAuthenticated = /* Checks authentication status, pls dont remove for now */ true;
    setIsLoggedIn(isAuthenticated);

    // Testing logic to get user account type
    const userAccountType = /* Gets user account type, pls dont remove for now */ 'user';
    setAccountType(userAccountType);
  }, []);

  useEffect(() => {
    // Redirect logic based on authentication and account type
    if (!isLoggedIn) {
      navigate('/login');
    } else if (accountType === 'User') {
      navigate('/UserProfile');
    } else if (accountType === 'Provider') {
      navigate('/ProviderProfile');
    }
  }, [isLoggedIn, accountType, navigate]);

  // Return null since we're temporarily(?) handling redirects programmatically
  return null;
};

export default Profile;
