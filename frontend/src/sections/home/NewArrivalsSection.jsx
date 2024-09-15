

import React from 'react';
import Card from '../../components/Card';

function NewArrivalsSection() {
  return (
    <div className="min-h-fit bg-gray-50 py-12 px-4 sm:px-8 lg:px-16 ">
      
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-main mb-4" >
          New Arrivals
        </h2>

        <p className="text-gray-600 text-lg sm:text-2xl">
          Discover the latest trends fresh off the runway.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex">
        <div className='flex flex-wrap gap-8 mx-4 mb-8  justify-center items-center'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='hidden sm:flex flex-wrap gap-8 mb-8  justify-center items-center'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center">
        <a href="/newArrivals">
          <button className="px-8 py-3 text-white font-bold bg-secondary_5 hover:bg-green-500 hover:text-black tracking-widest rounded-lg text-lg transition-transform transform hover:scale-105">
            See More
          </button>
        </a>
      </div>
    </div>
  );
}

export default NewArrivalsSection;


