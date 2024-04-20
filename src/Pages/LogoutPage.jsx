import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here, such as clearing session storage or sending a logout request to the backend
    // If we decide to use session storage to store login state, we can clear it like this:
    sessionStorage.removeItem('isLoggedIn');

    // Redirect the user to the homepage after logging out
    navigate.push('/');
  }, [navigate]);

  return (
    <div>
      <h1>Logging Out...</h1>
      {/* We can optionally display a message to users showing that they are being logged out */}
    </div>
  );
};

export default LogoutPage;
