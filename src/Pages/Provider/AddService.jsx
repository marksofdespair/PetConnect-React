import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const AddService = () => {
  const [serviceType, setServiceType] = useState('');
  const [certificates, setCertificates] = useState('');
  const [yearsExperience, setYearsExperience] = useState('');
  const [notes, setNotes] = useState('');

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleCertificatesChange = (event) => {
    setCertificates(event.target.value);
  };

  const handleYearsExperienceChange = (event) => {
    setYearsExperience(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder: Submit form data to the backend or other actions as needed
    console.log('Form submitted!');
  };

  return (
    <div>
      <h2>Add Service</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Service Type:
          <select value={serviceType} onChange={handleServiceTypeChange}>
            <option value="">Select a service</option>
            <option value="Dog Walking">Dog Walking</option>
            <option value="Pet Sitting">Pet Sitting</option>
            <option value="Training">Training</option>
            <option value="Grooming">Grooming</option>
          </select>
        </label>
        <br />
        <label>
          Certificates:
          <input type="text" value={certificates} onChange={handleCertificatesChange} />
        </label>
        <br />
        <label>
          Years of Experience:
          <input type="text" value={yearsExperience} onChange={handleYearsExperienceChange} />
        </label>
        <br />
        <label>
          Notes:
          <textarea value={notes} onChange={handleNotesChange} />
        </label>
        <br />
        <button type="submit">Add Service</button>
      </form>
      <br />
      <Link to="/settings">Go Back</Link>
    </div>
  );
};

export default AddService;
