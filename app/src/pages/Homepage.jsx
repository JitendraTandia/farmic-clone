import React from 'react'
import FlashSale from '../components/FlashSale'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Category from '../components/Category'
import FeaturedCollection from '../components/FeaturedCollection'
import WeAreTheBest from '../components/WeAreTheBest'

const Homepage = () => {
  return (
    <div className='w-full'>
      <FlashSale/>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Category/>
      <FeaturedCollection/>
      <WeAreTheBest/>

      
    </div>
  )
}

export default Homepage