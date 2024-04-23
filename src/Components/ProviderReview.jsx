import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const ReviewsComponent = () => {
  // State to store the reviews
  const [reviews, setReviews] = useState([]);

  // Function to fetch reviews from the backend API
  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/provider-reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // useEffect (hook) to fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []); // Empty dependency array to run effect only once

  const navigate = useNavigate();

  // Function to handle click event on username
  const handleClick = async (username) => {
    try {
      // Fetch user details based on username
      const userDetails = await fetchUserDetailsByUsername(username);

      // Navigate to the user profile page
      navigate(`/user/${username}`);
    } catch (error) {
      console.error('Error fetching user details:', error);
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
              <span onClick={() => handleClick(review.username)}>{review.username}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsComponent;
