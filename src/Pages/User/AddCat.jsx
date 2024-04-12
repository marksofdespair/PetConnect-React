import React, { useState } from 'react';
import axios from 'axios';

const AddCat = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/pet/create-cat', { name, breed });
      setSuccessMessage('Pet added successfully!');
      setName('');
      setBreed('');
    } catch (error) {
      setErrorMessage('Failed to add pet. Please try again.');
    }
  };

  return (
    <div>
      <h1>Tell Us About Your Cat:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Breed:</label>
          <select value={breed} onChange={(e) => setBreed(e.target.value)} className="form-select">
            <option value="">Select Breed</option>
            {/* Populate options dynamically. I hope */}
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-success" />
        </div>
      </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
};

export default AddCat;
