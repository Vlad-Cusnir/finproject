import React from 'react';

const Home = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">
        Welcome to EasyCar Rentals
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Find your perfect car rental for every occasion. Explore our wide selection of vehicles and book your ride today!
      </p>
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
        alt="Car Rental"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default Home;
