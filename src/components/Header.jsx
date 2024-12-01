import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-clr-background">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-clr-primary">Educonnect</h1>
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
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute sm:static top-[60px] left-0 w-full sm:w-auto bg-clr-background sm:bg-transparent z-50  h-2/6 sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 sm:p-0 transition-all duration-300`}
        >
          <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
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
                to="/faqs"
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
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex space-x-4">
          <button className="px-4 py-2 border border-clr-primary rounded-lg text-clr-primary transition">
            Login
          </button>
          <button className="px-4 py-2 bg-clr-primary text-clr-background rounded-lg  transition">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
