import { useState } from "react";
import { NavLink } from "react-router-dom";
import atikLogo from "../images/atik-logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Function to close the dropdown after clicking a link
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const links = (
    <>
      <li onClick={closeDropdown}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>
      </li>
      <li onClick={closeDropdown}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          About
        </NavLink>
      </li>
      <li onClick={closeDropdown}>
        <NavLink
          to="/project"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Project
        </NavLink>
      </li>
      <li onClick={closeDropdown}>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Blogs
        </NavLink>
      </li>
      <li onClick={closeDropdown}>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        {/* Navbar Start */}
        <div className="navbar-start items-center ">
          <div className="dropdown ">
            <button
              aria-expanded={isDropdownOpen}
              aria-controls="dropdown-menu"
              onClick={toggleDropdown}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul
                id="dropdown-menu"
                className="menu menu-sm dropdown-content absolute bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            )}
          </div>
          {/* logo of atikur's */}
          <div className="lg:pl-28 ">
            <img src={atikLogo} alt="" className=" w-14 lg:w-28 " />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
