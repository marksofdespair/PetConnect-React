import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const ReviewsComponent = ({ providerId }) => {
  // State to store the reviews
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch reviews from the backend API
  const fetchReviews = async () => {
    try {
      const response = await axios.get(`/api/provider-review/provider/${providerId}`);
      setReviews(response.data.reviews);
    } catch (error) {
      setError(error.message);
    }
  };
  

  // useEffect (hook) to fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []); // Re-fetch reviews when providerId changes

  const navigate = useNavigate();

  // Function to handle click event on username
  const handleClick = async (userId) => {
    try {
      // Navigate to the user profile page
      navigate(`/user/${userId}`);
    } catch (error) {
      console.error('Error navigating to user profile:', error);
    }
  };

  return (
    <div>
      <h2>Provider Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>Rating:</strong> {review.rating}, <strong>Comment:</strong>{' '}
              <span onClick={() => handleClick(review.user.id)}>{review.user.name}</span>
            </li>
          ))}
        </ul>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ReviewsComponent;
