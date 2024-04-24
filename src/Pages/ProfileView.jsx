import React, { useState, useEffect } from 'react';

const ProfileView = ({ accountType }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/profile');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
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

  // Destructure user data
  const { name, icon, titles, reviews, skills } = userData;

  return (
    <div className="User-profile">
      {/* Display user icon */}
      <img src={icon} alt={name} />

      {/* Display user name */}
      <h2>{name}</h2>

      {/* Display titles/training for providers */}
      {accountType === 'provider' && (
        <div>
          <h3>Titles/Training:</h3>
          <p>{titles}</p>
        </div>
      )}

      {/* Display skills for providers */}
      {accountType === 'provider' && (
        <div>
          <h3>Skills:</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display pets for owners */}
      {accountType === 'owner' && (
        <div>
          <h3>Pets:</h3>
            {/* Display pets for owners */}
            {accountType === 'owner' && <PetsComponent ownerId={ownerId} />}
        </div>
      )}

      {/* Display Reviews feature for both */}
      <div>
        <h3>Reviews:</h3>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileView;
