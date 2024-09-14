

import React from 'react'

import HeroImg from '../../assets/images/hero_top_1.jpg'

function HeroSection() {
  return (
    <>
      <div className="pt-16 sm:pt-24 h-svh  flex flex-col sm:flex-row  items-center justify-evenly px-4 sm:px-12 bg-gray-50 bg-gradient-to-r from-primary  to-90%">
      
      <div className="text-left max-w-lg flex-col justify-center items-center">
        <div className="text-5xl sm:text-7xl font-bold font-main ">
          <p>  
            Inhale
          </p>
          <p className='ml-16 sm:ml-24'>
           Fashion...
          </p>
          <p>
            Exhale
          </p>
          <p className='ml-16 sm:ml-24'>
            Style...
          </p>
        </div>
              
        <div className="flex justify-center w-full">
          <button className="m-4 px-6 py-3 text-black font-bold bg-secondary hover:bg-secondary-200 rounded-lg text-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex ">
        <img src={HeroImg} alt="hero img" className="w-80 sm:w-96 h-auto object-cover rounded-lg shadow-lg" />
      </div>
      
    </div>
    </>
  )
}

export default HeroSection;