import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="container flex justify-between  place-items-center py-4 px-2">
      <div>
        <h1 className="font-bold text-[2rem] text-clr-primary">Educonnect</h1>
      </div>
      <nav className="text-[1rem]">
        <ul className="grid grid-cols-4 gap-2 place-items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 text-clr-primary border-clr-primary" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? "border-b-2 text-clr-primary border-clr-primary" : ""
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "border-b-2 text-clr-primary border-clr-primary" : ""
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b-2 text-clr-primary border-clr-primary" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <button className="border px-4 py-2 mx-4 focus:outline-none focus:ring-2 rounded-2xl border-[#131313] ">
          Login{" "}
        </button>
        <button className="border bg-[#131313]  text-[#fff]  px-4 py-2 focus:outline-none focus:ring-2 rounded-2xl">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
