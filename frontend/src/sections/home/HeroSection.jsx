

import React from 'react'

import HeroImg from '../../assets/images/top_1.jpg'

function HeroSection() {
  return (
    <>
      <div className='mt-16 sm:mt-24 border-2 border-red-600 flex'>

        <div className='border-2 border-green-500 text-3xl font-main'>
          Inhale Fashion <br />
          Exhale Style
        </div>

        <div className='border-2 border-blue-500'>
          <img src={HeroImg} alt="hero img"/>
        </div>
      </div>
    </>
  )
}

export default HeroSection