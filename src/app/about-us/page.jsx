import React from "react";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import HeroSection from "../_components/hero-section";
import AboutComp from "../_components/about-comp";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection name={"About Us"} img="" />
      <AboutComp />
      <Footer />
    </div>
  );
};

export default page;
