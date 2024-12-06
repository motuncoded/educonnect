import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

// the First section of the home page
function Hero() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 },
    );
    gsap.fromTo(
      ".hero-subtitle",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.7 },
    );
    gsap.fromTo(
      ".signup-btn",
      { scale: 0.8, opacity: 0 },
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
      { y: 0, opacity: 1, duration: 1, repeat: -1, delay: 1.7, scale: 1 },
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
  }, []);

  const navigate = useNavigate();
  return (
    <section className=" flex  flex-wrap justify-evenly items-center bg-gradient-to-r from-clr-background  via-clr-secondary-background  to-clr-surface   px-4 min-h-[90vh] max-xl:justify-start max-xl:py-8 max-xl:px-8 ">
      <div className="max-w-xl relative max-sm:py-20">
        <img
          src="/icons/book.svg"
          className="book-icon w-12 h-12 absolute -top-20 left-2 max-sm:top-4 max-xl:-top-8"
          aria-label="Book icon"
          alt="book-icon"
        />
        <img
          src="/icons/atom.svg"
          className="atom-icon absolute w-12 h-12  -top-14 left-[24rem] max-sm:top-8 max-sm:left-[14rem] max-sm:"
          aria-label="atom icon"
          alt="atom-icon"
        />
        <img
          src="/icons/math.svg"
          className="math-icon absolute w-12 h-12  top-28 left-[38rem]    max-sm:top-[10rem] max-sm:left-[15rem]"
          aria-label="math icon"
          alt="math-icon"
        />

        {/* <PiShareNetworkLight size="28" className="share-icon absolute -top-10 left-0" /> */}
        <h2 className="hero-title mb-4 text-[3.5rem] -tracking-[.25%] leading-[4rem]	font-bold max-sm:text-3xl max-sm:text-center">
          Empowering Students Through Collaborative Learning
        </h2>
        <h3 className="hero-subtitle mb-4 font-medium text-clr-txt-secondary text-[1rem] max-sm:text-center">
          Get quick answers to your study questions and help others grow
          academically.
        </h3>

        <button
          onClick={() => navigate("/signup")}
          type="submit"
          className="signup-btn  bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-4 py-2  rounded-xl max-sm:w-[100%]"
        >
          Sign up for free
        </button>
        <img
          src="/icons/molecule.svg"
          className="molecule-icon absolute  -bottom-20 -left-8 text-clr-icon-molecule max-sm:top-[20rem] max-sm:left-[2rem] max-xl:top-[15rem]"
          aria-label="molecule icon"
          alt="molecule-icon"
        />

        <img
          src="/icons/globe.svg"
          className="globe-icon absolute w-12 h-12  -bottom-10 right-28  max-sm:top-[22rem] max-sm:left-[18rem] max-xl:top-[15rem]"
          aria-label="globe icon"
          alt="globe-icon"
        />
      </div>

      <div className="max-w-[50%] mt-2 max-sm:max-w-[100%] max-xl:max-w-[100%] max-xl:py-4">
        <img
          src="/persons/learners.svg"
          alt="illustration of learners collaborating in a study session"
          className="hero-img rounded-lg w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
