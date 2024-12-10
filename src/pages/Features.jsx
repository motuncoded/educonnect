import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-custom-gradient min-h-[90vh]  flex  flex-wrap justify-evenly items-center max-sm:px-1 max-sm:min-h-[70vh]">
      <div className="container mx-auto text-center">
        <h1 className="text-[56px] leading-[64px] font-bold mb-4 max-sm:text-4xl max-sm:leading-[44px]">
          Discover How EduConnect Empowers <br /> Your Learning Journey!
        </h1>
        <p className="font-medium text-clr-txt-secondary">
          Explore features designed to make learning easier, collaborative, and
          fun.
        </p>
        <button
          onClick={() => navigate("/signup")}
          type="submit"
          className="mt-6  bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-4 py-2  rounded-xl max-sm:w-[378px]"
        >
          Start Learning Now
        </button>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Ask & Answer",
    description:
      "Got a tough question? Post it on EduConnect and unlock a world of knowledge! Whether it’s solving complex equations, understanding historical events, or analyzing literary works, our community of learners and AI assistants are here to provide clear and accurate answers. No question is too small or too big, just ask away!",
    icon: "/icons/help.svg",
  },
  {
    title: "Vote and Earn Badges",
    description:
      "Empower the community by recognizing quality contributions. Upvote answers that are insightful, accurate, and helpful. As you engage more, you’ll earn badges that showcase your expertise and dedication, motivating others to strive for excellence. Compete with peers to climb the leaderboard and leave a mark on the EduConnect community!",
    icon: "/icons/trophy.svg",
  },
  {
    title: "Organized Subject Categories",
    description:
      "Effortlessly navigate through a well-organized system of subject categories. Whether you’re into algebra, organic chemistry, Shakespearean literature, or world history, find questions and resources tailored to your academic needs. Save time and stay focused with seamless access to your favorite subjects and topics.",
    icon: "/icons/folder.svg",
  },
  {
    title: "AI Assistance",
    description:
      "Tap into the power of cutting-edge AI to supercharge your learning. Our intelligent assistant provides instant, accurate answers to even the most challenging questions. From solving equations step-by-step to offering concise explanations, the AI is your 24/7 study buddy, making learning fast, easy, and efficient.",
    icon: "/icons/pen.svg",
  },
  {
    title: "Personalized Learning Experience",
    description:
      "Enjoy a platform that adapts to your unique learning needs. With personalized suggestions, tailored content, and smart recommendations based on your activity, EduConnect ensures every moment spent here adds value to your academic journey.",
    icon: "/icons/personal.svg",
  },
  {
    title: "Engagement and Rewards",
    description:
      "Stay motivated with exciting rewards and recognition! Earn points for every answer, upvote, and contribution. Exchange points for badges, achieve milestones, and enjoy the satisfaction of being recognized for your efforts. Every interaction counts toward making you a star in the EduConnect community.",
    icon: "/icons/reward.svg",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 max-sm:py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 max-sm:text-[28px]">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:mx-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "my-4" : ""}  bg-[#F6FBFE]  border rounded-lg p-6 shadow hover:shadow-md transition`}
            >
              <img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="mx-auto mb-4 bg-[#E9F3FC] p-2 rounded-full"
              />
              <h3 className="text-[22px] font-normal mb-2">{feature.title}</h3>
              <p className="text-clr-txt-secondary text-[16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const ImageSection = () => {
  const navigate = useNavigate();

  return (
    <section className="my-12 container m-auto relative h-[505px] max-sm:mb-8 -mx-2 ">
      <div className="absolute inset-0 ">
        <img
          src="/students.png"
          alt="Students Learning"
          className="w-full h-full  rounded-lg  object-fill"
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/40 rounded-lg ">
        <h1 className="text-[45px] font-bold mb-4 w-9/12 max-sm:text-[28px]">
          Discover How EduConnect Empowers Your Learning Journey!
        </h1>

        <button
          onClick={() => navigate("/signup")}
          type="submit"
          className="mt-2  bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-4 py-2  rounded-xl "
        >
          Start Learning Now
        </button>
      </div>
    </section>
  );
};

function Features() {
  return (
    <>
      <Header />
      <main className="">
        <HeroSection />
        <FeaturesSection />
        <ImageSection />
      </main>
      <Footer />
    </>
  );
}

export default Features;
