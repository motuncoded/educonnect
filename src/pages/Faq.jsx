import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const FaqHeader = () => {
  return (
    <div className="flex flex-col  items-center justify-center bg-custom-gradient py-10 ">
      <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
      <p className="text-lg text-clr-txt-secondary max-sm:text-center">
        Find quick answers to common questions about EduConnect.
      </p>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" my-4  ">
      <div
        className={`flex justify-between items-center  p-4 bg-[#B9DAF7] ${isOpen ? "rounded-t-xl" : "rounded-xl"} cursor-pointer transition-all duration-300 ease-in-out`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-md font-medium">{question}</h2>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-[#F7F7F7] rounded-b-xl">
          <p className="text-[#4D4D4D]">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const faqs = [
    {
      question: "How do I post a question?",
      answer:
        "Click the 'Ask Question' button on the dashboard, select a category, and type your question.",
    },
    {
      question: "Is EduConnect free to use?",
      answer: "Yes, EduConnect is completely free for all students.",
    },
    {
      question: "How does the AI feature work?",
      answer:
        "Our AI uses advanced algorithms to provide accurate, context-based answers to your queries.",
    },
    {
      question: "Can I answer questions even if I'm not an expert?",
      answer:
        "Yes! As long as you’re confident in your answer, share it and help your peers.",
    },
    {
      question: "What are badges, and how do I earn them?",
      answer:
        "Badges are rewards for active participation. Earn them by asking, answering, and voting on questions.",
    },
  ];

  return (
    <div className=" max-w-[1054px] w-[calc(100% -2rem)] m-auto my-10">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};
// Faq page
function Faq() {
  return (
    <>
      <Header />
      <main className=" max-sm:px-4 bg-custom-gradient">
        <FaqHeader />
        <Accordion />
      </main>
      <Footer />
    </>
  );
}
export default Faq;
