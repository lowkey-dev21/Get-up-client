import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface navLink {
  title: string;
  path: string;
}

const navLinks: navLink[] = [
  { title: "EXERCISES", path: "exercises" },
  { title: "TRAINERS", path: "trainers" },
  { title: "PRICING", path: "pricing" },
  { title: "LOGIN", path: "login" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className=" z-[5000] fixed flex md:px-[5rem] px-[20px]  md:py-[2.5rem] w-full bg-[#25AD35]   justify-between items-center h-[50px] md:h-[50px] ">
        {/* Logo */}
        <div className=" md:text-2xl  text-[18px] font-semibold">
          <span>Get</span> <span className="text-black ">Up</span>
        </div>

        {/* mobile toggle */}
        <button
          className=" md:hidden  text-3xl text-black "
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <FaXmark /> : <IoMenu />}
        </button>

        {/* desktop navlinks */}
        <div className=" hidden md:flex   font-light  justify-between w-[50%]  text-[17px] ">
          {navLinks.map((nav) => (
            <>
              <NavLink
                className={
                  "hover:bg-black p-[5px] px-4 hover:font-normal rounded-full"
                }
                end
                to={""}
                key={nav.title}
              >
                <a href={`#${nav.path}`}>{nav.title}</a>
              </NavLink>
            </>
          ))}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
