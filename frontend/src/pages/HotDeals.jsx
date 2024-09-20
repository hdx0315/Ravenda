import React from 'react'
import Card from '../components/Card';
import NavBar from '../components/NavBar';

function HotDeals() {
  return (
    
        <div className="min-h-fit font-main">
          
          
        <NavBar/>
          {/* Title Section */}
          <div className="text-center pt-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 font-main mb-4">
              Hot Deals
            </h2>
            <p className="text-gray-600 text-lg sm:text-2xl">
            Don't miss out on the hottest discounts and exclusive sales!
            </p>
          </div>
    
          <div className="flex sm:hidden my-8">
            <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          
          <div className="flex sm:hidden my-8">
            <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
    
          <div className="flex sm:hidden my-8">
            <div className='flex flex-wrap gap-8 m-8 justify-center items-center'>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
    
    

          <div className="hidden sm:flex  my-8">
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

    
        </div>
    



  )
}

export default HotDeals