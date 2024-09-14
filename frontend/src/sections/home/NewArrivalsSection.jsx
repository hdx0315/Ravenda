

import React from 'react';
import Card from '../../components/Card';

function NewArrivalsSection() {
  return (
    <div className="h-svh bg-gray-50 py-12 px-4 sm:px-8 lg:px-16 border-2 border-red-500">
      
      {/* Title Section */}
      <div className="text-center mb-8 border-2 border-red-500">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-main mb-4" tracking-widest>
          New Arrivals
        </h2>

        <p className="text-gray-600 text-lg">
          Discover the latest trends fresh off the runway.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 border-2 border-red-500">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Button Section */}
      <div className="flex justify-center border-2 border-red-500">
        <a href="/newArrivals">
          <button className="px-8 py-3 text-black bg-secondary hover:bg-gray-800 rounded-lg text-lg transition-transform transform hover:scale-105">
            See More
          </button>
        </a>
      </div>
    </div>
  );
}

export default NewArrivalsSection;


