import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../shared/Logo";
import { useAppSelector } from "@/store/hooks";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PopoverClose } from "@radix-ui/react-popover";
import LogoutButton from "../shared/LogoutButton";
import { ArrowDown2 } from "iconsax-react";

interface IMenu {
  label: string;
  to: string;
}

const menuList: IMenu[] = [
  { label: "Home", to: "/" },
  { label: "Resources", to: "/resources" },
  { label: "Support", to: "/support" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-[0px_4px_4px_0px_#C4C4C440] sticky top-0 left-0 z-30">
      <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-[25%_50%_25%] lg:h-[100px] md:h-[80px] h-[60px] relative">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center justify-around poppins-regular">
          {menuList.map((menu, i) => (
            <li key={i}>
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  `text-black hover:text-primary ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                {menu.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Volunteer Button */}
        <div className="hidden lg:flex items-center justify-end">
          {!user ? (
            <Link to="/auth/login">
              <Button
                size={"lg"}
                className="cursor-pointer poppins-regular py-4 px-10 rounded-md"
              >
                Volunteer
              </Button>
            </Link>
          ) : (
            <Popover>
              <PopoverTrigger>
                <button className="flex items-center cursor-pointer">
                  <Avatar className="size-10 poppins-semibold mr-1">
                    <AvatarImage src={user?.image} />
                    <AvatarFallback>{user?.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <span className="">Hello, {user?.firstName}</span>
                  <ArrowDown2 size={16} className="ml-2" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[208px] p-2.5 px-1.5">
                <div className="flex flex-col space-y-1 poppins-regular">
                  <PopoverClose asChild>
                    <Link
                      to="#"
                      className="text-sm flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-sm p-2 duration-300 hover:bg-primary/30 hover:bg-opacity-20"
                    >
                      Profile
                    </Link>
                  </PopoverClose>
                  <PopoverClose asChild>
                    <Link
                      to="#"
                      className="text-sm flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-sm p-2 duration-300 hover:bg-primary/30 hover:bg-opacity-20"
                    >
                      Volunteer
                    </Link>
                  </PopoverClose>
                  <PopoverClose asChild>
                    <LogoutButton />
                  </PopoverClose>
                </div>
              </PopoverContent>
            </Popover>
          )}
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
          className={`fixed lg:hidden inset-x-0 bottom-0 bg-white z-50 transform transition-transform duration-300 ease-in-out h-[calc(100dvh-60px)] ${
            isMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex flex-col h-full w-full px-4 py-8">
            <ul className="flex flex-col space-y-10 poppins-regular pt-10">
              {menuList.map((menu, i) => (
                <li key={i}>
                  <NavLink
                    to={menu.to}
                    className={({ isActive }) =>
                      `text-black hover:text-primary ${
                        isActive ? "text-primary font-semibold" : ""
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {menu.label}
                  </NavLink>
                </li>
              ))}

              {user && (
                <>
                  <li>
                    <NavLink
                      to={"/profile"}
                      className={({ isActive }) =>
                        `text-black hover:text-primary ${
                          isActive ? "text-primary font-semibold" : ""
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/volunteer"}
                      className={({ isActive }) =>
                        `text-black hover:text-primary ${
                          isActive ? "text-primary font-semibold" : ""
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      Volunteer
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <div className="mt-auto">
              {!user ? (
                <Link to="/auth/login">
                  <Button
                    size={"lg"}
                    className="w-full cursor-pointer poppins-regular py-4 rounded-md"
                  >
                    Volunteer
                  </Button>
                </Link>
              ) : (
                <LogoutButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
