import React from "react";

const suvCars = [
  { name: "Toyota Highlander", price: "$50/day", consumption: "9.5L/100km", image: "/images/highlander.png" },
  { name: "Ford Explorer", price: "$55/day", consumption: "10.2L/100km", image: "/images/explorer.png" },
  { name: "Jeep Grand Cherokee", price: "$60/day", consumption: "10.8L/100km", image: "/images/cherokee.png" },
  { name: "Honda Pilot", price: "$52/day", consumption: "9.8L/100km", image: "/images/pilot.png" },
];

const SUV = () => {
  return (
    <div className="font-sans text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Select Your SUV</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {suvCars.map((car) => (
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

export default SUV;