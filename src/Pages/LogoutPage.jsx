import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here
    // Remove items from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('accountType');

    // Redirect the user to the homepage after logging out
    navigate('/'); 
  }, [navigate]);

  return (
    <div>
      <h1>Logging Out...</h1>
      {/* Optionally, you can display a message to users indicating that they are being logged out */}
    </div>
  );
};

export default LogoutPage;
