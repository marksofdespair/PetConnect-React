import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const ReviewsComponent = ({ username }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/provider-reviews/${username}`);
      setReviews(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [username]);

  const handleClick = async (username) => {
    try {
      navigate(`/user/${username}`);
    } catch (error) {
      console.error('Error navigating to user profile:', error);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Provider Reviews</h2>
      <p>Worked with this provider and want to leave a review? Contact petconnectsupport@workmail.com!</p>
      {Array.isArray(reviews) && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.reviewid}>
              <strong>Rating:</strong> {review.rating}, <strong>Comment:</strong>{' '}
              <span onClick={() => handleClick(review.user.id)}>{review.user.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default ReviewsComponent;
