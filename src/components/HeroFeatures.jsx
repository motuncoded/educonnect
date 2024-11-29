import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { IoPencil } from "react-icons/io5";
import { FiAward } from "react-icons/fi";



const Feature = ({icon, heading, paragraph}) => {
    return (
      <div className="max-w-xl  w-5/6 my-8">
        <h3 className="mb-2">{icon}</h3>
        <h4 className="mb-2 font-bold">{heading}</h4>
        <p className="tracking-tight">{paragraph}</p>
      </div>
    );
}

export default function HeroFeatures() {
  return (
    <section className="flex justify-evenly items-center flex-col bg-[#fff] px-10 min-h-[100vh] ">
      <h2 className="text-3xl font-bold">Our Features</h2>
      <div className="flex justify-around items-center  gap-20">
        <div className="max-w-[45%] mt-2">
          <img src="/learner.svg" alt="learner" />
        </div>
        <div className="py-2">
          <Feature
            icon={<CiCircleQuestion size="24" />}
            heading="Ask & Answer"
            paragraph="Easily post your academic questions in any subject and receive well-thought-out responses from peers and subject matter experts. Your questions could help others as well!"
          />
          <Feature
            icon={<IoPencil size="24" />}
            heading="AI Assistance"
            paragraph="Leverage cutting-edge AI technology to solve challenging questions or learn new concepts in seconds. Think of it as your personal, 24/7 study assistant."
          />
          <Feature
            icon={<FiAward size="24" />}
            heading="Leaderboards & Badges"
            paragraph="Participate actively in the community, climb the leaderboard, and collect unique badges as a testament to your knowledge and helpfulness."
          />
        </div>
      </div>
    </section>
  );
}
