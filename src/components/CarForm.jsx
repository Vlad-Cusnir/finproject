import React, { useState } from 'react';

function CarFormPage() {
  const [carName, setCarName] = useState('');
  const [carPrice, setCarPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Car Added/Updated:', carName, carPrice);
  };

  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add/Edit Car</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Car Model</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter car model"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Price Per Day</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter price"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Save Car
          </button>
        </form>
      </div>
    </section>
  );
}

export default CarFormPage;
