import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Register User
  const register = async (userData) => {
    const response = await axios.post("http://localhost:5000/users", userData);
    return response.data;
  };

  // Login User
  const login = async (email, password) => {
    const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
    if (response.data.length > 0) {
      setUser(response.data[0]);
      localStorage.setItem("user", JSON.stringify(response.data[0]));
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Update Profile
  const updateProfile = async (updatedUser) => {
    await axios.put(`http://localhost:5000/users/${updatedUser.id}`, updatedUser);
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
