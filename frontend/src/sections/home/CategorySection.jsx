import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import f1 from '../../assets/images/frock_1.jpg';
import t1 from '../../assets/images/top_2.jpg';
import b1 from '../../assets/images/bottom_1.jpg';

function CategorySection() {
  return (
    <div className='min-h-fit py-16 bg-gradient-to-b from-white from-0% via-pink-300 to-white to-90%'>
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-main mb-4">
          Our Collections
        </h2>
        <p className="text-gray-600 text-lg sm:text-2xl">
          Explore our curated collections of stylish apparel
        </p>
      </div>

      {/* Categories Section */}
      <div className='flex flex-wrap p-4 justify-center gap-8'>
        {/* Frocks */}
        <a href='/collections#section-0' className='group p-2 mx-0 lg:mx-10 transform transition-all hover:scale-105'>
          <div className='flex items-center text-xl font-bold tracking-wide'>
            Frocks <FiArrowRight className='ml-2 text-lg' />
          </div>
          <img src={f1} alt="Frocks" className='w-60 h-80 object-cover mt-2 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow' />
        </a>

        {/* Tops */}
        <a href='/collections#section-1' className='group p-2 mx-0 lg:mx-10 transform transition-all hover:scale-105'>
          <div className='flex items-center text-xl font-bold tracking-wide'>
            Tops <FiArrowRight className='ml-2 text-lg' />
          </div>
          <img src={t1} alt="Tops" className='w-60 h-80 object-cover mt-2 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow' />
        </a>

        {/* Bottoms */}
        <a href='/collections#section-2' className='group p-2 mx-0 lg:mx-10 transform transition-all hover:scale-105'>
          <div className='flex items-center text-xl font-bold tracking-wide'>
            Bottoms <FiArrowRight className='ml-2 text-lg' />
          </div>
          <img src={b1} alt="Bottoms" className='w-60 h-80 object-cover mt-2 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow' />
        </a>
      </div>

      {/* Browse Collections Button */}
      <div className="flex justify-center items-center py-8">
        <a href="/collections">
          <button className="px-8 py-4 text-white font-bold bg-pink-500 hover:bg-pink-600 hover:text-black tracking-widest rounded-lg text-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
            Browse Collections
          </button>
        </a>
      </div>
    </div>
  );
}

export default CategorySection;
