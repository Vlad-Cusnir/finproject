import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          EasyCar Rentals
        </Link>

        {/* Hamburger button - visible on small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu links */}
        <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent w-full left-0 md:w-auto md:opacity-100 transition-all duration-300 ease-in-out
          ${isOpen ? 'top-full opacity-100 shadow-md' : 'top-[-490px] opacity-0'}`}>
          <Link
            to="/cars"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Cars
          </Link>
          <Link
            to="/add-car"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Add Car
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
