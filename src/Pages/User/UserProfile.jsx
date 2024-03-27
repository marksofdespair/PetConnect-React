import React from 'react';
import PropTypes from 'prop-types'; 

const UserProfile = ({ User }) => {
  // Destructure User object to access its properties
  const { name, icon, titles, reviews } = User;

  return (
    <div className="User-profile">
      {/* Should display User icon */}
      <img src={icon} alt={name} />

      {/* Should display User name */}
      <h2>{name}</h2>

      {/* Modify for Users titles/training */}
      <div>
        <h3>Titles/Training:</h3>
        <p>{titles}</p>
      </div>

      {/* Modify for Reviews feature */}
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

UserProfile.propTypes = {
  User: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string, // URL for the User's icon
    titles: PropTypes.string, // Training/titles of the User
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default UserProfile;