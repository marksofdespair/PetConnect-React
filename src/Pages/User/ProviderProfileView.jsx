import React, { useState, useEffect } from 'react';

const ProviderProfileView = () => {
  const [providerData, setProviderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProviderData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/providers');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProviderData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProviderData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Destructure provider data
  const { name, icon, titles, reviews } = providerData;

  return (
    <div className="User-profile">
      {/* Should display Provider icon */}
      <img src={icon} alt={name} />

      {/* Should display Provider name */}
      <h2>{name}</h2>

      {/* Modify to display Provider titles/training */}
      <div>
        <h3>Titles/Training:</h3>
        <p>{titles}</p>
      </div>

      {/* Display Reviews feature */}
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

export default ProviderProfileView;
