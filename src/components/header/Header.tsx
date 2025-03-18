import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-[0px_4px_4px_0px_#C4C4C440] sticky top-0 left-0 z-30">
      <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-[25%_50%_25%] lg:h-[100px] md:h-[80px] h-[60px] relative">
        {/* Logo */}
        <div className="flex items-center">
          <h4 className="lg:text-3xl text-2xl text-primary poppins-extrabold">
            edufree<span className="text-secondary">4all.</span>
          </h4>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center justify-around poppins-regular">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-black hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `text-black hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `text-sm text-black hover:text-primary block ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `text-sm text-black hover:text-primary ${
                  isActive ? "text-primary font-bold" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Volunteer Button */}
        <div className="hidden lg:flex items-center justify-end">
          <Button
            size={"lg"}
            className="cursor-pointer poppins-regular py-4 px-10 rounded-md"
          >
            Volunteer
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-end">
          <button
            onClick={toggleMenu}
            className="flex flex-col space-y-1.5 focus:outline-none cursor-pointer"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu (Slides from Bottom) */}
        <div
          className={`fixed inset-x-0 bottom-0 bg-white z-50 transform transition-transform duration-300 ease-in-out h-[calc(100dvh-60px)] ${
            isMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex flex-col h-full w-full px-4 py-8">
            <ul className="flex flex-col space-y-10 poppins-regular pt-10">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-black hover:text-primary ${
                      isActive ? "text-primary font-bold" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `text-black hover:text-primary ${
                      isActive ? "text-primary font-bold" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `text-black hover:text-primary ${
                      isActive ? "text-primary font-bold" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `text-sm text-black hover:text-primary block ${
                      isActive ? "text-primary font-bold" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `text-sm text-black hover:text-primary ${
                      isActive ? "text-primary font-bold" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="mt-auto">
              <Button
                size={"lg"}
                className="w-full cursor-pointer poppins-regular py-4 rounded-md"
              >
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;