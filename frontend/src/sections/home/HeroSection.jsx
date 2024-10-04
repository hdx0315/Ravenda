

import React from 'react'

import HeroImg from '../../assets/images/hero_top_1.jpg'
import HeroImg2 from '../../assets/images/frock_hero.jpg'

function HeroSection() {
  return (
    <>
      <div 
        className="pt-16 sm:pt-24 h-svh flex flex-col sm:flex-row items-center justify-evenly px-4 sm:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImg2})`
        }}>
      
      <div className="text-left max-w-lg flex-col justify-center items-center">
        <div className="text-5xl sm:text-7xl font-bold font-main text-amber-100 tracking-wider">
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
          <a href="/collections">
            <button className="mt-4 px-8 py-4 text-white font-bold bg-secondary_5 hover:bg-green-500 hover:text-black tracking-widest rounded-lg text-lg transition-transform transform hover:scale-105">
              Shop Now
            </button>
          </a>
        </div>
      </div>

      {/* Image Section 
      <div className="flex ">
        <img src={HeroImg} alt="hero img" className="w-80 sm:w-96 h-auto object-cover rounded-lg shadow-lg" />
      </div>
      */}
      <div
      className='min-w-80 min-h-80'>
      </div>
    </div>
    </>
  )
}

export default HeroSection;