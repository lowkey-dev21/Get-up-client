import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    if (path === "login") {
      navigate("/login"); // navigate to login page
    } else {
      navigate(`/${path}`);
    }
  };
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

        {/* Nav Space */}
        {toggle && (
          <div className=" bg-[#25ad3578] gap-6 text-xl justify-center  flex-col rounded-xl border shadow-2xl md:hidden fixed h-[250px] w-[200px] backdrop-blur-lg flex right-3 top-[50px] ">
            {navLinks.map((nav) => (
              <>
                <ul
                  className=" flex   hover:bg-black w-[80%] rounded-md mx-auto justify-center p-1 "
                  key={nav.title}
                >
                  <li
                    className=" cursor-pointer"
                    onClick={() => handleNavClick(nav.path)}
                  >
                    {nav.title}
                  </li>
                </ul>
              </>
            ))}
          </div>
        )}

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
                onClick={() => handleNavClick(nav.path)}
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
