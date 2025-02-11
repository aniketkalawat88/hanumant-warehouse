import React from 'react'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'
import HeroSection from '../_components/hero-section'
import BlogPage from '../_components/blog-section'

const page = () => {
  return (
    <div>
        <Navbar />
        <HeroSection name={'Blogs'} img="" />
        <BlogPage />
        
        <Footer />
    </div>
  )
}

export default page