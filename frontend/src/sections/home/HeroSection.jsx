

import React from 'react'

import HeroImg from '../../assets/images/top_1.jpg'

function HeroSection() {
  return (
    <>
      <div className="mt-16 sm:mt-24 h-screen flex items-center justify-between px-4 sm:px-12 bg-gray-50 border-2 border-red-500 bg-gradient-to-r from-primary  to-90% ">
      
      <div className="text-left max-w-lg">
        <div className="text-5xl sm:text-7xl font-bold leading-tight font-main">
          <p>  
            Inhale
          </p>
          <p className='ml-12'>
           Fashion
          </p>
          <p>
            Exhale
          </p>
          <p className='ml-12'>
            Style
          </p>
        </div>
        
        <button className="mt-6 px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg text-lg">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <img src={HeroImg} alt="hero img" className="w-80 sm:w-96 h-auto object-cover rounded-lg shadow-lg" />
      </div>
      
    </div>
    </>
  )
}

export default HeroSection;