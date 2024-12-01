import { useEffect } from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { TiPen } from "react-icons/ti";
import { CiTrophy } from "react-icons/ci";
import gsap from 'gsap';



const Feature = ({icon, heading, paragraph}) => {
  useEffect(() => {
    gsap.fromTo(
      ".icon",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.5 },
    );
  }, []);
    return (
      <div className="icon max-w-xl  w-5/6 my-2 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:w-full max-sm:my-2">
        <h3 className="mb-2 bg-clr-surface w-8 h-8  flex justify-center items-center  rounded-full ">
          {icon}
        </h3>
        <h4 className="mb-2 font-bold">{heading}</h4>
        <p className="tracking-tight text-clr-txt-secondary">{paragraph}</p>
      </div>
    );
}

export default function HeroFeatures() {
  return (
    <section className="flex justify-evenly items-center flex-col  bg-[#fff] px-10 min-h-[100vh]  max-sm:py-12">
      <h2 className="text-3xl font-bold mb-4">Our Features</h2>
      <div className="flex justify-around items-center max-sm:flex-col  gap-20">
        <div className="max-w-[45%] mt-2 max-sm:max-w-[100%]">
          <img src="/learner.svg" alt="learner" />
        </div>
        <div className="py-2 ">
          <Feature
            icon={<CiCircleQuestion size="24" />}
            heading="Ask & Answer"
            paragraph="Easily post your academic questions in any subject and receive well-thought-out responses from peers and subject matter experts. Your questions could help others as well!"
          />
          <Feature
            icon={<TiPen size="24" />}
            heading="AI Assistance"
            paragraph="Leverage cutting-edge AI technology to solve challenging questions or learn new concepts in seconds. Think of it as your personal, 24/7 study assistant."
          />
          <Feature
            icon={<CiTrophy size="24" />}
            heading="Leaderboards & Badges"
            paragraph="Participate actively in the community, climb the leaderboard, and collect unique badges as a testament to your knowledge and helpfulness."
          />
        </div>
      </div>
    </section>
  );
}
