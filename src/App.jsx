import React from "react";
import { Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import MainPage from "./pages/MainPage";
import Rentals from "./pages/Rentals";
import AddRental from "./components/AddRental"; // Correct import path

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/addrental" element={<AddRental />} />
      </Routes>
    </div>
  );
}

export default App;
