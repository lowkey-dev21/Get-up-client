import { RiTimerFill } from "react-icons/ri";
import { SiLinuxserver } from "react-icons/si";
import { RiFileList2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

interface Navlinks {
  path: string;
  title: string;
  icon: any;
}

const navLinks: Navlinks[] = [
  {
    path: "classic",
    title: "Classic",
    icon: <RiTimerFill />,
  },
  {
    path: "discover",
    title: "Discover",
    icon: <SiLinuxserver />,
  },
  {
    path: "personal",
    title: "Personal",
    icon: <RiFileList2Fill />
  }
];

const HomeNavBar = () => {
  return (
    <>
      <section className=" flex bg-[#25AD35] border-t-[1px] border-slate-300   shadow-2xl w-full  h-[75px] fixed bottom-0">
        <div className=" flex w-full justify-center items-center  " >
          {navLinks.map((nav)=>(
            <>
            <div className=" flex w-full items-center justify-between  " >
              <NavLink end to={nav.path} className="text-black  items-center flex-col flex mx-auto  " >
             
           <span className=" text-2xl" >
             {nav.icon}
            </span>
            <span className=" text-xs" >
                {nav.title}
              </span>
              </NavLink> 
            </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
export default HomeNavBar;
