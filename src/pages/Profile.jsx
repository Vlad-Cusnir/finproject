import React, { useEffect, useState } from 'react'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      setUser(storedUser)
      setFormData(storedUser)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem('user', JSON.stringify(formData))
    localStorage.setItem('registeredUser', JSON.stringify(formData)) // optional sync
    setMessage('Profile updated successfully!')
    setUser(formData)
  }

  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="block w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="block w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  )
}
