import React from 'react'
import Card from '../../components/Card';

function HotDealsSection() {
  return (
    <div className="min-h-fit pb-16 pt-16 lg:pt-24 px-8 lg:px-16">
      
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-main mb-4">
          Hot Deals
        </h2>
        <p className="text-gray-600 text-lg sm:text-2xl">
          Don't miss out on the hottest discounts and exclusive sales!
        </p>
      </div>

      {/* Cards Section
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card />
        <Card />
        <Card />
        {/* Extra Cards only visible on medium+ screens }
        <Card className="hidden lg:block" />
        <Card className="hidden lg:block" />
        <Card className="hidden lg:block" />
      </div>
      */}

      <div className="flex my-8">
        <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='hidden md:flex flex-wrap gap-8 m-8  justify-center items-center'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='hidden lg:flex flex-wrap gap-8 m-8  justify-center items-center'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center p-2">
        <a href="/newArrivals">
          <button className="px-8 py-4 text-white font-bold bg-secondary_5 hover:bg-green-500 hover:text-black tracking-widest rounded-lg text-lg transition-transform transform hover:scale-105">
            See More
          </button>
        </a>
      </div>
    </div>
  );
}

export default HotDealsSection