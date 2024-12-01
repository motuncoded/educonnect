import React from "react";
import Hero from "../components/Hero";
import HeroFeatures from "../components/HeroFeatures";
import HeroTestimonial from "../components/HeroTestimonal";
import Footer from "../components/Footer";


function Home() {
  return(
    
    <main>
      <Hero/>
      <HeroFeatures/>
      <HeroTestimonial />
      <Footer/>

    </main>
  )
}

export default Home;
