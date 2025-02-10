import React from 'react'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'
import HeroSection from '../_components/hero-section'

const page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection name={'Blogs'} img="" />
        
        <Footer />
    </div>
  )
}

export default page