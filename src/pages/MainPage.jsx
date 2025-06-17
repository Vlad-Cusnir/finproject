import React from 'react';

const carCategories = [
  { name: 'City Compact', image: '/images/City Compact car.png' },
  { name: 'SUV', image: '/images/SUV car rental.png' },
  { name: 'Convertible', image: '/images/Convertible car rent.png' },
  { name: 'Luxury', image: '/images/Luxury car rental.png' },
  { name: 'GoKarts', image: '/images/GoKarts F1 car renta.png' },
  { name: 'GoKarts F1', image: '/images/go karts and F1 raci.png' },
];

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">A Fleet That Meets Your Needs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {carCategories.map((car) => (
          <div
            key={car.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center">{car.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Car Rental in Europe with Vlad's Rentals</h2>
        <p className="text-gray-700">
          Discover the best vehicles for your European adventures. Whether you want the luxury of a convertible or the practicality of a compact car, Vlad's Rentals has you covered.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
