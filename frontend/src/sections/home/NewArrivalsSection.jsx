import React from 'react';
import Card from '../../components/Card';

import { images } from '../../assets/images/new/assets-new-images';

function NewArrivalsSection() {
  return (
    <div className="min-h-fit pb-16 pt-16 lg:pt-24 px-8 lg:px-16">
      
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-pink-500 font-main mb-4">
          New Arrivals
        </h2>
        <p className="text-pink-400 text-lg sm:text-2xl">
          Discover the latest trends fresh off the runway.
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


<div className="flex sm:hidden my-8">
        <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
          <Card 
            title='Frock 03'
            img={images.f3}
            description='frock 3'
            price='1500'
          />
          <Card 
            title='Top 2'
            img={images.t2}
            description='top 2'
            price='3050'
          />
        </div>
      </div>

      <div className="hidden sm:flex  my-8">
        <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
          <Card 
            title='Frock 03'
            img={images.f3}
            description='frock 3'
            price='1500'
          />
          <Card 
            title='Top 2'
            img={images.t2}
            description='top 2'
            price='3050'
          />
        </div>
        <div className='hidden md:flex flex-wrap gap-8 m-8  justify-center items-center'>
          <Card 
            title='Top 4'
            img={images.t4}
            description='top 4'
            price='150'
          />
          <Card 
            title='Frock 1'
            img={images.f1}
            description='frock 1'
            price='150'
          />
        </div>
        <div className='hidden lg:flex flex-wrap gap-8 m-8  justify-center items-center'>

          <Card 
            title='Bottom 1'
            img={images.b1}
            description='Bottom 1'
            price='1000'
          />
          <Card 
            title='Frock 5'
            img={images.f5}
            description='frock 5'
            price='1500'
          />
        </div>
      </div>


      {/* Button Section */}
      <div className="flex justify-center items-center p-2">
        <a href="/newArrivals">
        <button className="px-8 py-4 text-white font-bold bg-pink-500 hover:bg-pink-600 hover:text-black tracking-widest rounded-lg text-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
            See More
          </button>
        </a>
      </div>
    </div>
  );
}

export default NewArrivalsSection;
