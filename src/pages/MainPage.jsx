// src/pages/MainPage.jsx
import React from 'react';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1470&q=80')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Vlad's Rentals
          </h1>
          <p className="text-gray-300 max-w-xl mb-8 text-lg md:text-xl drop-shadow">
            Reliable and affordable car rentals at your fingertips. Explore our fleet and book your perfect ride today.
          </p>
          <div>
            <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mr-4 font-semibold shadow">
              Login
            </a>
            <a href="/register" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold shadow">
              Register
            </a>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Fleet</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: 'SUV Adventure',
              img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60',
              desc: 'Spacious SUV perfect for family trips and off-road adventures.'
            },
            {
              name: 'Compact City Car',
              img: 'https://images.unsplash.com/photo-1501238295340-b3c3b72b0057?auto=format&fit=crop&w=800&q=60',
              desc: 'Fuel efficient and easy to park, ideal for urban driving.'
            },
            {
              name: 'Luxury Sedan',
              img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60',
              desc: 'Experience premium comfort and style for business or leisure.'
            },
            {
              name: 'Convertible Fun',
              img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
              desc: 'Feel the wind in your hair with our sporty convertible.'
            },
          ].map((car) => (
            <div key={car.name} className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{car.name}</h3>
                <p className="text-gray-600 text-sm">{car.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        &copy; {new Date().getFullYear()} Vlad's Rentals. All rights reserved.
      </footer>
    </div>
  );
}
