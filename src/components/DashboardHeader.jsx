import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";
import subjects from "../json/subjects.json";

// Subject catergory navbar
const SubjectNavLinks = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);
  // Close Menu on Outside Click:

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsMenuOpen]);
  return (
    <aside
      ref={menuRef}
      className={`absolute top-[15%] w-[95%] left-0 z-50 h-[588px] px-4 py-6 rounded-lg bg-clr-background transition-transform ${isMenuOpen ? "transform-none" : "transform -translate-x-full"}`}
    >
      <h2 className="font-medium text-[22px]">Subject Categories</h2>
      <ul className="my-6 px-4">
        {subjects.map((subject, id) => {
          return (
            <li key={id} className="flex my-2">
              <NavLink
                to={subject.link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-clr-surface text-clr-base"
                    : "flex  text-clr-txt-accent hover:bg-clr-surface px-4 py-2 rounded w-full transition-all"
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? subject.activeImg : subject.img}
                      alt={subject.label}
                      className="w-6 h-6 mr-3"
                    />
                    {subject.label}
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

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
        className=" max-sm:hidden flex rounded-xl  border bg-clr-search py-3 px-4 w-[468px] "
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

      <div className=" max-sm:hidden flex justify-center items-center ">
        <button
          type="submit"
          className=" bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-6 py-3  rounded-lg mr-10"
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
      </div>

      <div className="hidden max-sm:flex max-sm:space-x-3 max-sm:justify-between max-sm:items-center">
        <form className=" ">
          <img src="/icons/search.svg" alt="search icon" />
        </form>
        <img
          src="/persons/girll.jpeg"
          alt="profile"
          className="rounded-full w-6 h-6"
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle Menu"
          className="focus:outline-none relative"
        >
          {isMenuOpen ? (
            <LiaTimesSolid size="26" className="" />
          ) : (
            <AiOutlineMenu size="26" className="" />
          )}
        </button>
        {isMenuOpen && <SubjectNavLinks />}
        <button
          type="submit"
          className=" bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background p-2 rounded-lg mr-10"
        >
          Ask a question
        </button>
        {/* <SubjectModal/> */}
      </div>
    </header>
  );
}

export default DashboardHeader;
