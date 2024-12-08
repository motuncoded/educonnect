import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" flex justify-between items-center  h-[112px] px-4">
      <div className="">
        <Link to="/" className="text-4xl font-bold text-clr-primary">
          Educonnect
        </Link>{" "}
      </div>
      <form
        action=""
        className="hidden sm:flex rounded-xl  border bg-clr-search py-3 px-4 w-[468px] "
      >
        <img src="/icons/search.svg" alt="search icon" />
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search"
          className="bg-inherit mx-2 placeholder-[#bababa] outline-none "
        />
      </form>

      <div className="flex justify-center items-center max-sm:flex-row-reverse">
        <button
          type="submit"
          className="bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-6 py-3  rounded-lg mr-10"
        >
          Ask a question
        </button>
        <img
          src="/icons/notification.svg"
          alt="notification icon"
          className="mr-4 max-sm:hidden "
        />

        <img
          src="/persons/girll.jpeg"
          alt="profile"
          className="rounded-full w-6 h-6"
        />
        <div className="hidden max-sm:flex">
          <form className=" ">
            <img src="/icons/search.svg" alt="search icon" />
          </form>
          <img
            src="/persons/girll.jpeg"
            alt="profile"
            className="rounded-full w-6 h-6"
          />
          <div className="sm:hidden  flex mx-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <LiaTimesSolid size="26" className="" />
              ) : (
                <AiOutlineMenu size="26" className="" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-6 py-3  rounded-lg mr-10"
          >
            Ask a question
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
