import { useState } from "react";

const subjects = [
  { label: "Mathematics", value: "Mathematics" },
  { label: "Science", value: "Science" },
  { label: "Literature", value: "Literature" },
  { label: "History", value: "History" },
  { label: "Language", value: "Language" },
  { label: "Art", value: "Art" },
  { label: "Physics", value: "Physics" },
  { label: "Computer", value: "Computer" },
  { label: "Health", value: "Health" },
  { label: "Chemistry", value: "Chemistry" },
];

const SubjectsOption = () => {
  const [selected, setSelected] = useState("Subject");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };
  return (
    <div className="relative col-span-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[141px] max-sm:w-full flex  justify-between items-center  py-1 px-3 border text-clr-select rounded-2xl"
      >
        {selected}
        <img src="/subject-icons/arrow-down.svg" alt="arrow icon" />
      </button>
      {isOpen && (
        <ul className="absolute w-[278px] px-4 mt-4 border shadow-xl rounded-3xl text-clr-select bg-clr-background">
          <li className="px-2 pt-6 pb-2   cursor-pointer">Select a Subject</li>
          {subjects.map((subject) => (
            <li
              key={subject.value}
              onClick={() => handleSelect(subject.label)}
              className="p-2  rounded-lg hover:bg-clr-surface cursor-pointer"
            >
              {subject.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DateOption = () => {
  const dates = ["Today", "Last 7 days", "Last 30 days"];

  const [selected, setSelected] = useState("Date Added");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };
  return (
    <div className="relative col-span-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[141px]  max-sm:w-full flex justify-between items-center  py-1 px-3 border  text-clr-select rounded-2xl"
      >
        {selected}
        <img src="/subject-icons/arrow-down.svg" alt="arrow icon" />
      </button>
      {isOpen && (
        <ul className="absolute w-[278px] px-4 mt-4 border shadow-xl rounded-3xl text-clr-select bg-clr-background">
          <li className="px-2 pt-6 pb-2  cursor-pointer">Date Added</li>
          {dates.map((date) => (
            <li
              key={date}
              onClick={() => handleSelect(date)}
              className="p-2  rounded-lg hover:bg-clr-surface cursor-pointer"
            >
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TimeOption = () => {
  const times = ["1 Min ago", "5-10 Mins ago", "Last 30 days"];

  const [selected, setSelected] = useState("Time Added");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };
  return (
    <div className="relative col-span-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[144px]   max-sm:w-full  flex justify-between items-center  py-1 px-3 border text-clr-select rounded-2xl"
      >
        {selected}
        <img src="/subject-icons/arrow-down.svg" alt="arrow icon" />
      </button>
      {isOpen && (
        <ul className="absolute w-[278px] px-4 mt-4 border shadow-xl rounded-3xl text-clr-select bg-clr-background">
          <li className="px-2 pt-6 pb-2 cursor-pointer">Time Added</li>
          {times.map((time) => (
            <li
              key={time}
              onClick={() => handleSelect(time)}
              className="p-2  rounded-lg hover:bg-clr-surface cursor-pointer"
            >
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AnswersOption = () => {
  const answers = ["Answered", "All"];

  const [selected, setSelected] = useState("Unanswered");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };
  return (
    <div className="relative col-span-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[138px]  max-sm:w-full flex justify-between items-center  py-1 px-3 border text-clr-select rounded-2xl"
      >
        {selected}
        <img src="/subject-icons/arrow-down.svg" alt="arrow icon" />
      </button>
      {isOpen && (
        <ul className="absolute w-[278px] px-4 mt-4 border shadow-xl rounded-3xl text-clr-select bg-clr-background">
          <li className="px-2 pt-6 pb-2   cursor-pointer">Unanswered</li>
          {answers.map((answer) => (
            <li
              key={answer}
              onClick={() => handleSelect(answer)}
              className="p-2  rounded-lg hover:bg-clr-surface cursor-pointer"
            >
              {answer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Message = () => {
  return (
    <div className="border-t ">
      <div className="px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/persons/boy.jpeg"
            alt="boy"
            className="w-8 h-8 rounded-full"
          />
          <h4 className="pl-4 font-medium"> Joseph </h4>
          <h4>
            <img src="/icons/dot.svg" alt="dot" className="mx-2" />
          </h4>
          <h4 className="text-clr-txt-accent"> Mathematics</h4>
        </div>
        <h5 className="text-clr-txt-accent font-medium font-inter">
          1 min ago
        </h5>
      </div>
      <p className="px-6  text-clr-txt-accent font-normal">
        Find an equation of the tangent to the curve at the given point by two
        methods. Find X and Y if Z is 24
      </p>
      <div className="py-4 flex justify-between px-6">
        <div className=" flex space-x-4">
          <div className="flex space-x-3">
            <img src="/icons/bubble-chat.svg" alt="bubble-chat icon" />
            <p className="text-clr-txt-accent font-medium">20 Answers</p>
          </div>
          <div className="flex space-x-3">
            <img src="/icons/link-forward.svg" alt="link-forward icon" />
            <p className="text-clr-txt-accent font-medium">80</p>
          </div>
          <div className="flex space-x-3">
            <img src="/icons/link-backward.svg" alt="link-backward icon" />
            <p className="text-clr-txt-accent font-medium">2</p>
          </div>
        </div>
        <div className=" flex space-x-5">
          <img src="/icons/bookmark.svg" alt="eye icon" />
          <img src="/icons/menu-vertical.svg" alt="menu vertical icon" />
        </div>
      </div>
    </div>
  );
};
const Chat = () => {
  return (
    <div className="sticky to-20% left-50% flex flex-col z-99 p-2 w-[648px] max-sm:w-[398px]  h-[128px] bg-clr-search rounded-2xl">
      <form className="bg-clr-border py-3 px-3 my-2 mx-2  flex justify-between items-center rounded-2xl">
        <input
          type="text"
          placeholder="How can I help you ?"
          className=" outline-none bg-inherit placeholder:text-[1rem] placeholder:font-medium placeholder:text-[#6A6A6A]"
        />
        <img src="/icons/sent.svg" alt="sent icon" />
      </form>
      <div className="flex justify-between items-center mx-2  my-6 ">
        <img src="/icons/attachment.svg" alt="attachment icon" />
        <p>Ask AI</p>
      </div>
    </div>
  );
};
function QuestionChat() {
  return (
    <section className="col-span-6 py-4 border rounded-lg  max-sm:col-span-12 max-sm:mx-4">
      <h2 className="text-[22px] font-medium px-6 max-sm:text-center">
        Questions other students are asking
      </h2>

      <div className="py-4 px-2 ">
        <h3 className="pb-4 px-6 font-medium">Filter</h3>
        <div className="grid grid-cols-12 gap-4 mx-6 max-sm:flex max-sm:flex-col ">
          <SubjectsOption />
          <DateOption />
          <TimeOption />
          <AnswersOption />
        </div>
      </div>
      <Message />
      <Message />
      <Message />
      <Chat />
    </section>
  );
}

export default QuestionChat;
