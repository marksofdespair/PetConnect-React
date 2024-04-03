import React, { useState } from 'react';

const AddPet = () => {
  return (
    <div>
      <h1>What Species Is Your Pet?</h1>
      <div>
        <p>Select the species of your pet:</p>
        <ul>
          <li><a href="/add-dog">Dog</a></li>
          <li><a href="/add-cat">Cat</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AddPet;
