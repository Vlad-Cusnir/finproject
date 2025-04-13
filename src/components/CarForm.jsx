import React, { useState } from 'react';

function CarFormPage() {
  const [carName, setCarName] = useState('');
  const [carPrice, setCarPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add or update car in the database
    console.log('Car Added/Updated:', carName, carPrice);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Add/Edit Car</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Car Model</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Enter car model"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Price Per Day</label>
            <div className="control">
              <input
                type="number"
                className="input"
                placeholder="Enter price"
                value={carPrice}
                onChange={(e) => setCarPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary">
                Save Car
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CarFormPage;
