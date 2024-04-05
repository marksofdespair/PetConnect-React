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
      <div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  User: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string, // URL for the User's icon
  }).isRequired,
};

export default UserProfile;