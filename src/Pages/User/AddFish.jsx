import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// Dont look at this its just copy-pasted cat page LMAO
const AddFish = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <h1>Tell Us About Your Fish:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Type:</label>
          <select value={breed} onChange={(e) => setBreed(e.target.value)} className="form-select">
            <option value="">Select Type</option>
            {breeds.map((catBreed, index) => (
              <option key={index} value={catBreed.name}>
                {catBreed.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-success" />
          <Link to="/pets" className="btn btn-secondary">Back to Pets</Link> {/* Button to go back to /pets page */}
        </div>
      </form>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </div>
  );
};

export default AddFish;
