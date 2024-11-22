import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface navLink {
  title: string;
  path: string;
}

const navLinks: navLink[] = [
  { title: "HOME", path: "home" },
  { title: "EXERCISES", path: "exercises" },
  { title: "TRAINERS", path: "trainers" },
  { title: "VIDEOS", path: "videos" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const handleNavClick = (path: string) => {
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
      setToggle(false); // Close mobile menu after click
    }
  };

  return (
    <>
      <nav className="z-[5000] top-0 fixed flex lg:px-[5rem] px-[20px]  md:py-[2.5rem] w-full bg-[#25AD35] justify-between items-center h-[50px] md:h-[50px] ">
        {/* Logo */}
        <div className="md:text-2xl w-[50%]  text-[18px] font-semibold">
          <span>Get</span> <span className="text-black ">Up</span>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden  text-3xl text-black"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <FaXmark /> : <IoMenu />}
        </button>

        {/* Mobile nav space */}
        {toggle && (
          <div className="bg-[#25ad3578] gap-6 text-xl justify-center  flex-col rounded-xl border shadow-2xl md:hidden fixed p-3 w-[200px] backdrop-blur-lg flex right-3 top-[65px] ">
            {navLinks.map((nav) => (
              <ul
                className="flex hover:bg-black w-[80%] rounded-md mx-auto justify-center p-1"
                key={nav.title}
              >
                <NavLink
                  to={""}
                  className="cursor-pointer"
                  onClick={() => handleNavClick(nav.path)}
                >
                  {nav.title}
                </NavLink>
              </ul>
            ))}
            <NavLink
              className=" mx-auto hover:bg-black p-[5px] px-4 hover:font-normal text-center w-[80%] rounded-md cursor-pointer"
              to={`/login`} // This will scroll within the page
            >
              LOGIN
            </NavLink>
          </div>
        )}

        {/* Desktop nav links */}
        <div className="hidden md:flex font-light gap-3  w-[100%] lg:w-[50%]  text-[17px] ">
          {navLinks.map((nav) => (
            <NavLink
              className="hover:bg-black p-[5px] px-4 hover:font-normal rounded-full cursor-pointer"
              key={nav.title}
              to={`#${nav.path}`} // This will scroll within the page
              onClick={() => handleNavClick(nav.path)}
            >
              {nav.title}
            </NavLink>
          ))}
          <NavLink
            className="   hover:bg-black p-[5px] px-4 hover:font-normal rounded-full cursor-pointer"
            to={`/login`} // This will scroll within the page
          >
            LOGIN
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
