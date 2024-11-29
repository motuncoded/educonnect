import React, { useEffect } from 'react'
import { LiaBookSolid } from "react-icons/lia";
import { PiShareNetworkLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import gsap from 'gsap';
import { TbAtom } from "react-icons/tb";


function Hero() {

    useEffect(() => {
        gsap.fromTo(".book-icon",
            { x: -50, opacity: 0 },
            {
                x: 0, opacity: 1, duration: 1, delay: 0.5
        })
            gsap.fromTo(
              ".share-icon",
              { y: -50, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: 0.7 },
        );
            gsap.fromTo(
              ".network-icon",
              { y: -50, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: 0.9 },
            );
             gsap.fromTo(
              ".hero-title",
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: 1 },
        );
          gsap.fromTo(
            ".hero-subtitle",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.2 },
        );
          gsap.fromTo(
              ".signup-btn",
              { scale: .8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1, delay: 1.5 },
            );
    
    
    gsap.fromTo(
      ".hero-img",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 1.7 },
    );
    
    },[])
    return (
      <section className="flex flex-wrap justify-evenly items-center bg-gradient-to-r from-clr-background to-clr-surface px-10 min-h-[87.5vh]">
        <div className="max-w-2xl relative">
          <LiaBookSolid
            size="28"
            className="book-icon absolute -top-14 left-2 text-clr-primary"
            aria-label="Book icon"
          />
          {/* <PiShareNetworkLight size="28" className="share-icon absolute -top-10 left-0" /> */}
          <h2 className=" hero-title mb-4 text-4xl font-bold">
            Empowering Students Through Collaborative Learning
          </h2>
          <h3 className="hero-subtitle mb-4 text-clr-txt-secondary">
            Get quick answers to your study questions and help others grow
            academically.
          </h3>
          <button className="signup-btn bg-clr-primary  text-clr-fill border px-4 py-2  focus:outline-none focus:ring-2 rounded-2xl">
            Sign up for free
          </button>
          <TfiWorld
            size="28"
            className=" network-icon absolute -bottom-10 right-28 text-clr-accent"
            aria-label="world icon"
          />
        </div>

        <div className="max-w-[50%] mt-2">
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
