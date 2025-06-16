import React from 'react';
import { Link } from 'react-router-dom';

function CarListPage() {
  return (
    <section className="py-10 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <p className="text-xl font-semibold text-gray-700">Car Model 1</p>
              <p className="text-gray-500">$50/day</p>
            </div>
            <div className="flex border-t divide-x">
              <Link
                to="/edit-car/1"
                className="flex-1 text-center py-2 text-blue-600 hover:bg-gray-100"
              >
                Edit
              </Link>
              <Link
                to="/"
                className="flex-1 text-center py-2 text-red-600 hover:bg-gray-100"
              >
                Delete
              </Link>
            </div>
          </div>
          {/* Repeat or map through cars dynamically here */}
        </div>
      </div>
    </section>
  );
}

export default CarListPage;
