import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCat = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://localhost:8080/api/cat-breeds');
        console.log('Response from API:', response.data);
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching cat breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  // Log the current state of breeds
  console.log('Current breeds state:', breeds);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/cat-breeds', { name, breed });
      setSuccessMessage('Cat added successfully!');
      setName('');
      setBreed('');
    } catch (error) {
      setErrorMessage('Failed to add cat. Please try again.');
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
            {breeds.map((catBreed, index) => (
              <option key={index} value={catBreed.name}>
                {catBreed.name}
              </option>
            ))}
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
