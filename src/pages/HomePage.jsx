import React from "react";

const carCategories = [
  { name: "City Compact", image: "/images/City Compact car.png" },
  { name: "SUV", image: "/images/SUV car rental.png" },
  { name: "Convertible", image: "/images/Convertible car rent.png" },
  { name: "Luxury", image: "/images/Luxury car rental.png" },
  { name: "GoKarts", image: "/images/GoKarts F1 car renta.png" },
  { name: "GoKarts F1", image: "/images/go karts and F1 raci.png" },
];

const HomePage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-blue-600 shadow-md p-4 z-20 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Vlad's Rentals</h1>
        <nav className="flex gap-4">
          {["Login", "Register", "Rentals", "Profile"].map((item) => (
            <a
              href={`/${item.toLowerCase()}`}
              className="inline-flex bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold transition hover:bg-blue-100"
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center mt-16"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 absolute inset-0" />
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Drive Your Dream Today</h1>
          <p className="text-xl mb-6">Luxury. Speed. Style. Vlad's Rentals has it all.</p>
          <button
            onClick={() => document.getElementById("fleet").scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Search Form */}
      <section className="bg-white py-10 px-4 shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Find Your Ride</h2>
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input type="text" placeholder="Location" className="p-2 border rounded w-full md:w-60" />
          <input type="date" className="p-2 border rounded w-full md:w-48" />
          <input type="date" className="p-2 border rounded w-full md:w-48" />
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Search</button>
        </form>
      </section>

      {/* Car Categories Section */}
      <section id="fleet" className="py-12 px-6 bg-gray-50 mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Fleet</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {carCategories.map((car) => (
            <div key={car.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold">{car.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>Contact us at support@vladsrentals.com | +44 1234 567 890</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Vlad's Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;