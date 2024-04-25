import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsComponent from '../Components/ReviewsComponent';

const Profile = ({ accountType }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get userId from URL parameters
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/profile/${userId}`);
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
  }, [userId]); // Add userId to the dependency array to re-fetch data when it changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
      {accountType === "Owner " && (
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
