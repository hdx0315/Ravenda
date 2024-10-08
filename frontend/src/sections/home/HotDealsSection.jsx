import React from 'react'
import Card from '../../components/Card';
import i2 from '../../assets/logo/logo_2.jpg'
import { images } from '../../assets/images/new/assets-new-images';

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


      
      <div className="flex sm:hidden my-8">
        <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
          <Card 
            title='Frock 04'
            img={images.f4}
            description='frock 4'
            price='1500'
          />
          <Card 
            title='Top 3'
            img={images.t3}
            description='top 3'
            price='3050'
          />
        </div>
      </div>

      <div className="hidden sm:flex  my-8">
        <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
          <Card 
            title='Frock 04'
            img={images.f4}
            description='frock 4'
            price='1500'
          />
          <Card 
            title='Top 3'
            img={images.t3}
            description='top 3'
            price='3050'
          />
        </div>
        <div className='hidden md:flex flex-wrap gap-8 m-8  justify-center items-center'>
          <Card 
            title='Top 1'
            img={images.t1}
            description='top 1'
            price='150'
          />
          <Card 
            title='Bottom 2'
            img={images.b2}
            description='Bottom 2'
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
            title='Frock 2'
            img={images.f2}
            description='frock 2'
            price='1500'
          />
        </div>
      </div>


      {/* Button Section */}
      <div className="flex justify-center items-center p-2">
        <a href="/hotDeals">
          <button className="px-8 py-4 text-white font-bold bg-pink-500 hover:bg-pink-600 hover:text-black tracking-widest rounded-lg text-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
            See More
          </button>
        </a>
      </div>
    </div>
  );
}

export default HotDealsSection