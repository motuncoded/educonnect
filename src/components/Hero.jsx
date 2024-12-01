import { useEffect } from 'react'
import { LiaBookSolid } from "react-icons/lia";
import { SiMoleculer } from "react-icons/si";
import { PiAtomThin } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { TbSquareRoot2 } from "react-icons/tb";

import gsap from 'gsap';


function Hero() {

    useEffect(() => {
             gsap.fromTo(
              ".hero-title",
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: .5 },
        );
          gsap.fromTo(
            ".hero-subtitle",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.7 },
        );
          gsap.fromTo(
              ".signup-btn",
              { scale: .8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1, delay: 0.9 },
            );
    
    
    gsap.fromTo(
      ".hero-img",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 1,
      },
    );
        gsap.fromTo(
          ".book-icon",
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 5,
            ease: "power3.out",
            repeat: -1,

            delay: 1.2,
          },
        );
         gsap.fromTo(
           ".atom-icon",
           { scale: 0.8, rotation: 0, opacity: 0 },
           {
             scale: 1,
             rotation: 360,
             opacity: 1,
             duration: 5,
             repeat: -1,

             ease: "power3.out",
             delay: 1.5,
           },
         );
            gsap.fromTo(
              ".molecule-icon",
              { x: 50, opacity: 0, scale: 0.8 },
              { y: 0, opacity: 1, duration: 1, repeat: -1, delay: 1.7, scale:1 },
            );
       gsap.fromTo(
         ".math-icon",
         { opacity: 0, scale: 0.8, rotation: 0 },
         {
           y: 0,
           opacity: 1,
           duration: 1,
           rotation: 360,
           scale: 1.2,
           repeat: -1,
           delay: 1.9,
         },
       );
            gsap.fromTo(
              ".globe-icon",
              { scale: 0.8, rotation: 0, opacity: 0 },
              {
                scale: 1,
                rotation: 360,
                opacity: 1,
                duration: 5,
                repeat: -1,

                ease: "power3.out",
                delay: 2.1,
              },
            );
      
    
    },[])
    return (
      <section className="container flex  flex-wrap justify-evenly items-center bg-gradient-to-r from-clr-background  via-clr-secondary-background  to-clr-surface   px-4 min-h-[90vh] max-xl:justify-start max-xl:py-8 ">
        <div className="max-w-xl relative max-sm:py-20">
          <LiaBookSolid
            size="28"
            className="book-icon absolute -top-20 left-2 text-clr-icon-book max-sm:top-4 max-xl:-top-8"
            aria-label="Book icon"
          />
          <PiAtomThin
            size="28"
            className="atom-icon absolute -top-14 left-[24rem] text-clr-icon-atom max-sm:top-8 max-sm:left-[14rem] max-sm:"
            aria-label="Atom icon"
          />
          <TbSquareRoot2
            size="28"
            className="math-icon absolute top-24 left-[34rem] border-clr-primary border-2 rounded-md opacity-50 text-clr-icon-math max-sm:top-[10rem] max-sm:left-[15rem]"
            aria-label="Square-root icon"
          />

          {/* <PiShareNetworkLight size="28" className="share-icon absolute -top-10 left-0" /> */}
          <h2 className="hero-title mb-4 text-5xl font-bold max-sm:text-3xl max-sm:text-center">
            Empowering Students Through Collaborative Learning
          </h2>
          <h3 className="hero-subtitle mb-4 text-clr-txt-secondary text-[.875rem] max-sm:text-center">
            Get quick answers to your study questions and help others grow
            academically.
          </h3>

          <button className="signup-btn bg-clr-primary  text-clr-background border px-4 py-2  focus:outline-none focus:ring-2 rounded-2xl max-sm:w-[100%]">
            Sign up for free
          </button>
          <SiMoleculer
            size="28"
            className="molecule-icon absolute -bottom-20 left-2 text-clr-icon-molecule max-sm:top-[20rem] max-sm:left-[2rem] max-xl:top-[15rem]"
            aria-label="molecule icon"
          />

          <CiGlobe
            size="28"
            className="globe-icon absolute -bottom-10 right-28 text-clr-icon-globe max-sm:top-[22rem] max-sm:left-[18rem] max-xl:top-[15rem]"
            aria-label="globe icon"
          />
        </div>

        <div className="max-w-[50%] mt-2 max-sm:max-w-[100%] max-xl:max-w-[100%]">
          <img
            src="/learners.svg"
            alt="Illustration of learners collaborating in a study session"
            className="hero-img rounded-lg w-full"
          />
        </div>
      </section>
    );
}

export default Hero
