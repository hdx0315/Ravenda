import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import HeroSection from '../sections/home/HeroSection'
import NewArrivalsSection from '../sections/home/NewArrivalsSection'
import CategorySection from '../sections/home/CategorySection'
import HotDealsSection from '../sections/home/HotDealsSection'


function Home() {
  return (
    <div className='font-main'>
      <NavBar/>

      <HeroSection/>

      <NewArrivalsSection/>

      <CategorySection/>

      <HotDealsSection/>

      <Footer/>

    </div>
  )
}

export default Home