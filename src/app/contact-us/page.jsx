import React from 'react'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'
import HeroSection from '../_components/hero-section'
import ContactComp from '../_components/contact-comp'

const page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection name={'Contact Us'} img="" />
        <ContactComp />
        <Footer />
    </div>
  )
}

export default page