import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EasyCar Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
