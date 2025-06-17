import React from 'react';

const carCategories = [
  {
    name: 'City Compact',
    image: '/images/City Compact car.png',
  },
  {
    name: 'SUV',
    image: '/images/SUV car rental.png',
  },
  {
    name: 'Convertible',
    image: '/images/Convertible car rent.png',
  },
  {
    name: 'Luxury',
    image: '/images/Luxury car rental.png',
  },
  {
    name: 'GoKarts',
    image: '/images/GoKarts F1 car renta.png',
  },
  {
    name: 'GoKarts F1',
    image: '/images/go karts and F1 raci.png',
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4 flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold mb-4">Car Rental in Europe with Vlad's Rentals</h1>
          <p className="text-xl mb-6">Reliable. Affordable. Stylish.</p>
          <button className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-600 transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">A fleet that meets your needs</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {carCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden text-center">
              <div className="w-full h-[200px] overflow-hidden flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;