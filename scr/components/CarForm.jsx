import { useContext, useEffect, useState } from "react";
import { CarContext } from "../context/CarContext";

const CarForm = ({ car, setCar }) => {
  const { addCar, updateCar } = useContext(CarContext);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    status: "Available",
    type: "Sedan"
  });

  useEffect(() => {
    if (car) {
      setFormData(car);
    }
  }, [car]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.brand || !formData.model || !formData.year || !formData.pricePerDay) {
      alert("All fields are required!");
      return;
    }

    if (car) {
      updateCar(formData);
    } else {
      addCar({ ...formData, id: Date.now() });
    }

    setCar(null);
    setFormData({ brand: "", model: "", year: "", pricePerDay: "", status: "Available", type: "Sedan" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} className="border p-2 w-full" required />
      <input name="model" placeholder="Model" value={formData.model} onChange={handleChange} className="border p-2 w-full" required />
      <input name="year" type="number" placeholder="Year" value={formData.year} onChange={handleChange} className="border p-2 w-full" required />
      <input name="pricePerDay" type="number" placeholder="Price Per Day" value={formData.pricePerDay} onChange={handleChange} className="border p-2 w-full" required />
      <select name="status" value={formData.status} onChange={handleChange} className="border p-2 w-full">
        <option value="Available">Available</option>
        <option value="Rented">Rented</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">{car ? "Update" : "Add"} Car</button>
    </form>
  );
};

export default CarForm;

