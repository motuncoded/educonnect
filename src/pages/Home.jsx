import React from "react";
import Hero from "../components/Hero";
import HeroFeatures from "../components/HeroFeatures";
import HeroTestimonial from "../components/HeroTestimonal";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return(
    <>
      <Header/>
    <main>
      <Hero/>
      <HeroFeatures/>
      <HeroTestimonial />
      <Footer/>

    </main>
    </>
  )
}

export default Home;
