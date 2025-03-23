import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const EditProfile = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="firstName" type="text" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="lastName" type="text" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button className="w-full bg-yellow-500 text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditProfile;

