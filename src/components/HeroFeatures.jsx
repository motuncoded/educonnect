import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Feature = ({ icon, heading, paragraph }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      iconRef.current,
      { scale: 0.8 },
      { scale: 1, duration: 1, delay: 0.5, repeat: -1, yoyo: true },
      { scale: 1, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut" },
    );
  }, []);
  return (
    <div className=" max-w-xl  w-5/6  h-auto my-8 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:w-full ">
      <img
        src={icon}
        ref={iconRef}
        className="mb-2 bg-clr-surface p-2  flex justify-center items-center  rounded-full "
        aria-label={icon}
        alt={icon}
      />
      <h4 className="mb-2 font-medium text-[1.375rem]">{heading}</h4>
      <p className="font-normal tracking-[.5%] text-clr-txt-secondary text-[1rem] max-sm:text-center">
        {paragraph}
      </p>
    </div>
  );
};

export default function HeroFeatures() {
  return (
    <section className="container flex justify-evenly items-center flex-col  py-20 px-10  max-sm:items-center max-sm:my-12 max-xl:my-12 max-xl:items-start max-sm:px-4max-xl:px-2">
      <h2 className="text-3xl font-bold mb-4 max-sm:text-center max-xl:text-center">
        Our Features
      </h2>
      <div className="flex justify-around items-center max-sm:flex-col max-xl:flex-col  gap-20 max-sm:gap-2 max-xl:gap-2  ">
        <div className="max-w-[50%] mt-2  max-sm:max-w-[100%] max-xl:max-w-[100%]">
          <img src="/persons/learner.svg" alt="learner" />
        </div>
        <div className="py-2 max-sm:py-0">
          <Feature
            icon="/icons/help.svg"
            heading="Ask & Answer"
            paragraph="Easily post your academic questions in any subject and receive well-thought-out responses from peers and subject matter experts. Your questions could help others as well!"
          />
          <Feature
            icon="/icons/pen.svg"
            heading="AI Assistance"
            paragraph="Leverage cutting-edge AI technology to solve challenging questions or learn new concepts in seconds. Think of it as your personal, 24/7 study assistant."
          />
          <Feature
            icon="/icons/trophy.svg"
            heading="Leaderboards & Badges"
            paragraph="Participate actively in the community, climb the leaderboard, and collect unique badges as a testament to your knowledge and helpfulness."
          />
        </div>
      </div>
    </section>
  );
}
