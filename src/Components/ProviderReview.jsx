import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
              {review.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsComponent;
