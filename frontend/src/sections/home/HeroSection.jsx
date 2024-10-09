import React from 'react';
import HeroImgNew from '../../assets/images/new/pink.jpg';
import HeroImgNew2 from '../../assets/images/new/pink2.jpeg';
import HeroImgNew3 from '../../assets/images/new/heroNew.jpg';

function HeroSection() {
  return (
    <div 
      className="pt-16 sm:pt-24 min-h-screen flex flex-col sm:flex-row items-center justify-evenly px-4 sm:px-12 bg-cover bg-center relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${HeroImgNew})` }}
      >
      </div>
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${HeroImgNew3})` }}
      >
      </div>
      
      <div className="block sm:hidden text-left max-w-lg flex-col justify-center items-center pt-30 sm:pt-0 z-10 animate-fade-in-up">
        <div className="text-5xl sm:text-7xl font-bold font-main tracking-wider text-shadow-lg">
          <p className=" text-white">  
            Find
            Your...
          </p>
          <p className="ml-16 text-white">
            Perfect
            Style...
          </p>
        </div>
              
        <div className="flex justify-center w-full mt-8">
          <a href="/collections" className="group">
            <button className="px-8 py-4 text-white font-bold bg-pink-300 hover:bg-pink-400 hover:text-black tracking-widest rounded-lg text-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
              Shop Now
            </button>
          </a>
        </div>
      </div>


    </div>
  );
}

export default HeroSection;