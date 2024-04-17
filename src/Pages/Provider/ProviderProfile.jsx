import React from 'react';
import PropTypes from 'prop-types'; 
import axios from 'axios';

const ProviderProfile = ({ provider }) => {
  // Destructure provider object to access properties
  const { name, icon, titles, reviews } = provider;
  const [additionalInfo, setAdditionalInfo] = useState('');

  useEffect(() => {
    // Fetch additional info about the provider
    const fetchAdditionalInfo = async () => {
      try {
        const response = await axios.get(`/api/providers/${name}`); // PLACEHOLDER FOR API URL, REPLACE
        setAdditionalInfo(response.data.additionalInfo);
      } catch (error) {
        console.error('Error fetching additional provider info:', error);
      }
    };

    fetchAdditionalInfo();
  }, [name]);

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
      <div>
        <h3>Additional Information:</h3>
        <p>{additionalInfo}</p>
      </div>
    </div>
  );
};

/* ProviderProfile.propTypes = {
  provider: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string, // URL for the provider's icon
    titles: PropTypes.string, // Training/titles of the provider
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string,
        rating: PropTypes.number,
      })
    ),
  }).isRequired,
}; */

export default ProviderProfile;
