import React from "react";

const cityCompactCars = [
  { name: "Toyota Yaris", price: "$30/day", consumption: "5.6L/100km", image: "/images/yaris.png" },
  { name: "Honda Fit", price: "$32/day", consumption: "5.9L/100km", image: "/images/fit.png" },
  { name: "Ford Fiesta", price: "$28/day", consumption: "6.2L/100km", image: "/images/fiesta.png" },
  { name: "Volkswagen Polo", price: "$35/day", consumption: "5.8L/100km", image: "/images/polo.png" },
  { name: "Hyundai i20", price: "$31/day", consumption: "6.0L/100km", image: "/images/i20.png" },
  { name: "Kia Rio", price: "$29/day", consumption: "5.7L/100km", image: "/images/rio.png" },
  { name: "Mazda 2", price: "$34/day", consumption: "6.1L/100km", image: "/images/mazda2.png" },
  { name: "Nissan Micra", price: "$30/day", consumption: "5.9L/100km", image: "/images/micra.png" },
];

const CityCompact = () => {
  return (
    <div className="font-sans text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Select Your City Compact Car</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cityCompactCars.map((car) => (
          <div key={car.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition text-center">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">{car.name}</h3>
            <p className="text-gray-700">{car.price}</p>
            <p className="text-gray-500">{car.consumption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCompact;