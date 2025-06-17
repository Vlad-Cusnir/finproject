import React from "react";
import { Routes, Route } from "react-router-dom";

// Page imports
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Rentals from "./pages/Rentals";
import AddRental from "./components/AddRental";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/addrental" element={<AddRental />} />
      </Routes>
    </div>
  );
}

export default App;
