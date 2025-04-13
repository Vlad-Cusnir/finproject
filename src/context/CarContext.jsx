import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  // Fetch cars from json-server
  useEffect(() => {
    axios.get("http://localhost:5000/cars")
      .then(response => setCars(response.data))
      .catch(error => console.error("Error fetching cars:", error));
  }, []);

  // Add a car
  const addCar = async (car) => {
    const response = await axios.post("http://localhost:5000/cars", car);
    setCars([...cars, response.data]);
  };

  // Update a car
  const updateCar = async (id, updatedCar) => {
    await axios.put(`http://localhost:5000/cars/${id}`, updatedCar);
    setCars(cars.map(car => (car.id === id ? updatedCar : car)));
  };

  // Delete a car
  const deleteCar = async (id) => {
    await axios.delete(`http://localhost:5000/cars/${id}`);
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <CarContext.Provider value={{ cars, addCar, updateCar, deleteCar }}>
      {children}
    </CarContext.Provider>
  );
};

