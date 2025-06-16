import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function ProfilePage() {
  const { user, updateProfile } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Pre-fill form with user info
  useEffect(() => {
    if (user) {
      setUsername(user.firstName);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) return;

    const updatedUser = {
      ...user,
      firstName: username,
      email: email,
    };

    updateProfile(updatedUser);
    alert("Profile updated successfully!");
  };

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
}

export default ProfilePage;