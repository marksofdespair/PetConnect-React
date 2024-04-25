import React, { useState, useEffect } from 'react';
import ReviewsComponent from '../Components/ReviewsComponent';

const Profile = ({ accountType }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // Retrieve username from local storage
      let storedUsername = localStorage.getItem("username");
      if (!storedUsername) {
        setError('Username not found in local storage');
        setIsLoading(false);
        return;
      }
  
      // Remove quotes from the username if present
      storedUsername = storedUsername.replace(/['"]+/g, '');
  
      try {
        const response = await fetch(`http://localhost:8080/api/profile/${storedUsername}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  // Destructure user data
  const { name, username, accountType: userType, pets, reviews } = userData;

  return (
    <div className="User-profile">
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Account Type: {userType}</p>
  
      {/* Conditionally render pets if accountType is Owner */}
      {accountType === "Owner" && (
        <div>
          <h3>Pets</h3>
          <ul>
            {pets.map((pet, index) => (
              <li key={index}>
                <p>Name: {pet.name}</p>
                <p>Species: {pet.species}</p>
                <p>Breed: {pet.breed}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
  
      {/* Conditionally render reviews */}
      {userType === "Provider" && (
        <div>
          <h3>Reviews</h3>
          <ReviewsComponent username={username} />
        </div>
      )}
    </div>
  );  
}

export default Profile;
