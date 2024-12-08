import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

// Header section

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
        {/* Logo */}
        <div>
          <Link to="/" className="text-4xl font-bold text-clr-primary">
            Educonnect
          </Link>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute sm:static top-[60px] left-0 w-full sm:w-auto bg-clr-background sm:bg-transparent z-50  h-4/6 sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 sm:p-0 transition-all duration-300`}
        >
          <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-clr-primary border-b-2 border-clr-primary pb-1 max-sm:border-none"
                    : "hover:text-clr-primary transition-colors"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive
                    ? "text-clr-primary border-b-2 border-clr-primary pb-1"
                    : "hover:text-clr-primary transition-colors"
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? "text-clr-primary border-b-2 border-clr-primary pb-1"
                    : "hover:text-clr-primary transition-colors"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-clr-primary border-b-2 border-clr-primary pb-1"
                    : "hover:text-clr-primary transition-colors"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="md:hidden sm:hidden">
              <button
                onClick={() => navigate("/signin")}
                className="px-4 py-2 border border-clr-btn-default  rounded-xl text-clr-primary transition hover:bg-clr-surface"
              >
                Login
              </button>
            </li>
            <li className="md:hidden sm:hidden">
              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-2 bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background rounded-xl  transition"
              >
                Sign up
              </button>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={() => navigate("/signin")}
            className="px-4 py-2 border border-clr-btn-default  rounded-xl text-clr-primary transition hover:bg-clr-surface"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background rounded-xl  transition"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <LiaTimesSolid size="26" className="text-clr-icon-menu" />
            ) : (
              <AiOutlineMenu size="26" className="text-clr-icon-menu" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
      </div>
    </header>
  );
}

export default Navbar;
