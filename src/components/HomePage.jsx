import React from 'react';

function HomePage() {
  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Car Rental System
        </h1>
        <p className="text-lg text-gray-600">
          Book and manage your rental cars with ease!
        </p>
      </div>
    </section>
  );
}

export default HomePage;
