import { useContext, useState } from "react";
import { CarContext } from "../context/CarContext";
import CarForm from "../components/CarForm";
import Modal from "../components/Modal";

const Cars = () => {
  const { cars, deleteCar } = useContext(CarContext);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Car Management</h2>
      <CarForm car={selectedCar} setCar={setSelectedCar} />
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Brand</th>
            <th className="border p-2">Model</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Price/Day</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id} className="border text-center">
              <td className="p-2">{car.brand}</td>
              <td className="p-2">{car.model}</td>
              <td className="p-2">{car.year}</td>
              <td className="p-2">${car.pricePerDay}</td>
              <td className="p-2">{car.status}</td>
              <td className="p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={() => setSelectedCar(car)}>Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2" onClick={() => { setSelectedCar(car); setIsModalOpen(true); }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal
          message={`Are you sure you want to delete ${selectedCar.brand} ${selectedCar.model}?`}
          onConfirm={() => {
            deleteCar(selectedCar.id);
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Cars;
