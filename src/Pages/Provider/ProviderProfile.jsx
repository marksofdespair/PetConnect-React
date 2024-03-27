import React from 'react';
import PropTypes from 'prop-types'; 

const ProviderProfile = ({ provider }) => {
  // Destructure provider object to access its properties
  const { name, icon, titles, reviews } = provider;

  return (
    <div className="provider-profile">
      {/* Should display Provider icon */}
      <img src={icon} alt={name} />

      {/* Should display Provider name */}
      <h2>{name}</h2>

      {/* Modify for Providers titles/training */}
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

ProviderProfile.propTypes = {
  provider: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string, // URL for the provider's icon
    titles: PropTypes.string, // Training/titles of the provider
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default ProviderProfile;
