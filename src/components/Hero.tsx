import {
  body,
  burpees,
  lifting,
  pushup,
  running,
  squats,
  yoga,
  getyour,
  lastImg,
} from "../assets";
import Footer from "./Footer";
import Trainers from "./Trainers";
import { useNavigate } from "react-router-dom";

interface Exercise {
  title: string;
  img: string;
}

const exercises: Exercise[] = [
  {
    title: "Squats",
    img: squats,
  },
  {
    title: "Burpees",
    img: burpees,
  },
  {
    title: "Yoga",
    img: yoga,
  },
  {
    title: "Running",
    img: running,
  },
  {
    title: "Lifting",
    img: lifting,
  },
  {
    title: "PushUp",
    img: pushup,
  },
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className={`h-64  w-full bg-gradient-to-r from-[#25AD35] to-[#25AD35]`}
      >
        <div
          id="home"
          className="inset-0 lg:px-[5rem]  md:px-[3rem] px-[20px] mt-[-1rem] flex p-2"
        >
          {/* Update badge */}
          <div className="flex h-[40px] p-1 pl-1.5 pr-5 bg-[#2827274a] backdrop-opacity-30 items-center justify-center gap-2 rounded-full">
            <span className="bg-white text-black p-1 sm:px-2 text-[12px] rounded-full ">
              NEW
            </span>
            <span className="font-light text-[13px]">
              High Intensity workout to burn calories
            </span>
          </div>
        </div>

        <div className=" md:px-[3rem]  lg:px-[5rem] px-[20px] absolute md:mt-[15rem] mt-[9rem] inset-0 flex flex-col">
          <div className="w-full md:gap-[2rem] md:flex">
            <div className="lg:w-[80%]">
              <p className="text-[450%] sm:text-[800%] md:leading-[90%] font-semibold leading-[90%] flex flex-col">
                <span>Cardio</span>
                <span className="text-black"> Workout</span>
              </p>
              <p className="font-light sm:text-xl text-xs mt-2">
                Sweat it out, turn your sweat into strength!
              </p>
            </div>

            <div className="flex md:flex-col lg:justify-normal sm:gap-5 gap-[3rem] justify-between lg:w-[20%] sm:w-[50%] w-full mt-10">
              <div className="bg-[#2827274a] rounded-2xl backdrop-opacity-30 p-2 w-[50%] md:w-[150px] md:p-4 flex flex-col items-center justify-center">
                <span className="text-xl text-[#FB1351]">165</span>
                <span className="font-light">EST CALORIES</span>
              </div>

              <div className="bg-[#2827274a] rounded-2xl backdrop-opacity-30 p-2 w-[50%] md:w-[150px] md:p-4 flex flex-col items-center justify-center">
                <span className="text-xl text-[#FFE642]">30:00</span>
                <span className="font-light">TIME</span>
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-[4rem] md:text-xl z-[500] text-[17px] flex  sm:w-[60%] lg:w-[30%] w-full gap-[3rem]">
            <button
              onClick={() => navigate("/sign-up")}
              className="bg-white rounded-lg text-black p-4 md:p-5 w-full"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="z-[9000] bg-black rounded-lg text-white md:p-5  p-2 w-full"
            >
              Login
            </button>
          </div>
        </div>

        {/* Image Background */}
        <img
          src={body}
          alt="cardio workout"
          className="absolute inset-0 md:mt-[7rem] md:ml-[-6rem] mt-[15.6rem] mix-blend-overlay"
        />

        {/* Image Background */}
        <img
          src={lastImg}
          alt="cardio workout"
          className="absolute mx-auto inset-0 w-[1000px] lg:mt-[55rem] sm:mt-[140rem] md:mt-[130rem] sm:w-[1600px]  lg:w-[1200px]  md:ml-[-6rem] mt-[190.6rem]  pb-5 mix-blend-overlay"
        />

        {/* Popular exercise */}
        <div
          id="exercises"
          className=" lg:px-[5rem] md:px-[3rem] px-[20px]  relative sm:mt-[32rem] md:mt-[32rem] mt-[26.5rem] bg-[#2827274a] backdrop-opacity-30 w-full h-[2070px] lg:h-[800px] sm:h-[1070px]   "
        >
          <nav className=" w-full pt-4 justify-between items-center flex  ">
            <p className=" md:text-[29px] text-[17px]">Popular Exercises</p>
            <button className=" text-[#FFFFFF] bg-black p-5 text-[15px] sm:flex hidden">
              SEE MORE
            </button>
          </nav>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exercises.map((exe) => (
              <>
                <div>
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to top, #000000aa, #89888700, #89888700 ), url(${exe.img})`,
                    }}
                    className="bg-cover items-end flex rounded-lg bg-center h-64 w-full"
                  ></div>
                  <div className="font-[600] text-[40px] mt-[-2rem] ml-5 flex">
                    {exe.title}
                  </div>
                  <p className="font-light ml-5 text-xs">250 est calories</p>
                </div>
              </>
            ))}

            <div className=" w-full flex justify-end ">
              <button className=" text-[#FFFFFF] items-center justify-center  bg-black p-5 text-[13px] sm:hidden flex w-[120px] h-[50px] ">
                SEE MORE
              </button>
            </div>
          </div>
        </div>

        {/* Transform */}
        <div
          id="plans"
          className=" lg:px-[5rem]  w-full flex flex-col lg:flex lg:h-[400px] md:h-[] h-[600px] justify-center lg:justify-between lg:flex-row  items-center "
        >
          <div className=" flex-col md:px-[3rem]    justify-center   px-[20px] lg:w-[40%] flex h-[400px] items-center  ">
            <p className=" text-5xl z-[2] md:text-[450%] md:leading-[100%] font-semibold  ">
              Get your plan and get started
            </p>
            <img className=" mt-[-4rem]" src={getyour} alt="" />
          </div>

          <div className=" bg-[#ffffff4c] w-full lg:w-[40%] flex items-center flex-col justify-center backdrop-opacity-30 lg:h-[300px] h-[400px] ">
            <p className=" lg:px-[5rem] md:px-[3rem]   px-[20px] md:text-2xl font-light text-black  ">
              Transform your fitness journey with our app! Personalized
              workouts, real-time tracking, and expert guidance—all in one
              place. Join our community and start getting stronger today!
              <br />
              <button className=" bg-black text-white p-2 px-5 rounded-md mt-5">
                Let's start
              </button>
            </p>
          </div>
        </div>

        {/* Trainers */}
        <section id="trainers" className=" lg:px-[5rem]  px-[20px] bg-black  ">
          <p className=" text-center pt-4 text-2xl font-semibold"> Trainers</p>
          <Trainers />
        </section>

        {/* Footer */}
        <section id="videos" className=" md:px-[5rem] px-[20px] ">
          <Footer />
        </section>
      </section>
    </>
  );
};

export default Hero;
