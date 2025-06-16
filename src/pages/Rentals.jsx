import React, { useState, useEffect } from 'react'
import AddRental from '../components/AddRental'

// Simple modal for confirmation
function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow max-w-sm w-full">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

const initialRentals = [
  {
    id: 1,
    carMake: 'Toyota',
    carModel: 'Corolla',
    year: 2020,
    pricePerDay: 40,
    available: true,
    category: 'Sedan',
    description: 'Reliable and fuel efficient',
  },
  {
    id: 2,
    carMake: 'Honda',
    carModel: 'CR-V',
    year: 2019,
    pricePerDay: 55,
    available: false,
    category: 'SUV',
    description: 'Spacious and comfortable',
  },
]

export default function Rentals() {
  const [rentals, setRentals] = useState([])
  const [editRental, setEditRental] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [rentalToDelete, setRentalToDelete] = useState(null)

  useEffect(() => {
    setRentals(initialRentals)
  }, [])

  function handleAddRental(newRental) {
    const maxId = rentals.length > 0 ? Math.max(...rentals.map((r) => r.id)) : 0
    setRentals([...rentals, { ...newRental, id: maxId + 1 }])
  }

  function handleDeleteClick(rental) {
    setRentalToDelete(rental)
    setShowDeleteModal(true)
  }

  function confirmDelete() {
    setRentals(rentals.filter((r) => r.id !== rentalToDelete.id))
    setRentalToDelete(null)
    setShowDeleteModal(false)
  }

  function cancelDelete() {
    setRentalToDelete(null)
    setShowDeleteModal(false)
  }

  function handleEditClick(rental) {
    setEditRental(rental)
  }

  function handleEditSave(updatedRental) {
    setRentals(
      rentals.map((r) => (r.id === updatedRental.id ? updatedRental : r))
    )
    setEditRental(null)
  }

  function handleEditCancel() {
    setEditRental(null)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Rentals</h2>

      {!editRental && <AddRental onAdd={handleAddRental} />}

      {editRental && (
        <EditRentalForm
          rental={editRental}
          onSave={handleEditSave}
          onCancel={handleEditCancel}
        />
      )}

      <ul>
        {rentals.map((rental) => (
          <li key={rental.id} className="border p-4 mb-2 rounded">
            <h3 className="font-semibold">
              {rental.carMake} {rental.carModel} ({rental.year})
            </h3>
            <p>Category: {rental.category}</p>
            <p>Price per day: ${rental.pricePerDay}</p>
            <p>{rental.available ? 'Available' : 'Not Available'}</p>
            <p>{rental.description}</p>

            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEditClick(rental)}
                className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(rental)}
                className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showDeleteModal && (
        <Modal
          message={`Are you sure you want to delete ${rentalToDelete.carMake} ${rentalToDelete.carModel}?`}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  )
}

// EditRentalForm component for editing rentals
function EditRentalForm({ rental, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...rental })
  const [errors, setErrors] = useState({})

  const categories = ['SUV', 'Sedan', 'Compact', 'Truck', 'Van']

  function validate() {
    const errs = {}
    if (!formData.carMake.trim()) errs.carMake = 'Car make is required'
    if (!formData.carModel.trim()) errs.carModel = 'Car model is required'
    if (!formData.year || isNaN(formData.year) || formData.year < 1900)
      errs.year = 'Enter a valid year (>=1900)'
    if (
      !formData.pricePerDay ||
      isNaN(formData.pricePerDay) ||
      formData.pricePerDay <= 0
    )
      errs.pricePerDay = 'Price per day must be a positive number'
    if (!formData.category) errs.category = 'Select a category'
    if (!formData.description.trim()) errs.description = 'Description is required'
    return errs
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    onSave({
      ...formData,
      year: Number(formData.year),
      pricePerDay: Number(formData.pricePerDay),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded mb-6 max-w-md">
      <h3 className="text-xl font-semibold mb-4">Edit Rental</h3>

      <label className="block mb-2">
        Car Make:
        <input
          type="text"
          name="carMake"
          value={formData.carMake}
          onChange={handleChange}
          className="block w-full border rounded p-1"
        />
        {errors.carMake && <p className="text-red-600 text-sm">{errors.carMake}</p>}
      </label>

      <label className="block mb-2">
        Car Model:
        <input
          type="text"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          className="block w-full border rounded p-1"
        />
        {errors.carModel && <p className="text-red-600 text-sm">{errors.carModel}</p>}
      </label>

      <label className="block mb-2">
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="block w-full border rounded p-1"
          min="1900"
          max={new Date().getFullYear()}
        />
        {errors.year && <p className="text-red-600 text-sm">{errors.year}</p>}
      </label>

      <label className="block mb-2">
        Price per day ($):
        <input
          type="number"
          name="pricePerDay"
          value={formData.pricePerDay}
          onChange={handleChange}
          className="block w-full border rounded p-1"
          min="1"
        />
        {errors.pricePerDay && (
          <p className="text-red-600 text-sm">{errors.pricePerDay}</p>
        )}
      </label>

      <label className="block mb-2">
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="block w-full border rounded p-1"
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-600 text-sm">{errors.category}</p>
        )}
      </label>

      <label className="block mb-2">
        Available:
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
          className="ml-2"
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full border rounded p-1"
          rows="3"
        />
        {errors.description && (
          <p className="text-red-600 text-sm">{errors.description}</p>
        )}
      </label>

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 rounded px-4 py-2 hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
