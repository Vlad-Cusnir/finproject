import React, { useState } from "react";

export default function AddRental({ onAdd }) {
  const [formData, setFormData] = useState({
    carModel: "",
    year: "",
    pricePerDay: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ carModel: "", year: "", pricePerDay: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add Rental</h2>
      <label>
        Car Model:
        <input type="text" name="carModel" value={formData.carModel} onChange={handleChange} required />
      </label>
      <label>
        Year:
        <input type="number" name="year" value={formData.year} onChange={handleChange} required />
      </label>
      <label>
        Price Per Day:
        <input type="number" name="pricePerDay" value={formData.pricePerDay} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Add Rental</button>
    </form>
  );
}
