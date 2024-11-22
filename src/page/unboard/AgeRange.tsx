import { useNavigate } from "react-router-dom";
import { postConfig } from "../../utils/crud.config";
import { GrLinkNext } from "react-icons/gr";
import redirect from "../../utils/redirect.config";
import { useState } from "react";
import { toasterE } from "../../utils/Toaster";

interface AgeRange {
  range: string;
}

interface FormData {
  ageRange: string;
}
const AgeRange = () => {
  const navigate = useNavigate();
  redirect("token", "/login");

  const [chooseAgeRange, setChooseAgeRange] = useState("");

  const ageRange: AgeRange[] = [
    {
      range: "18 - 30",
    },
    {
      range: "30 - 45",
    },
    {
      range: "45 - 60",
    },
  ];

  const handleSetGoal = async () => {
    try {
      if (!chooseAgeRange) return toasterE("choose range");
      navigate("/set-profile-picture");
      const formData: FormData = { ageRange: chooseAgeRange };
      await postConfig("/home/starter/age-range", formData);
    } catch (error: any) {
      const errMsg = error.response?.data?.msg || "An unexpected error occured";
      toasterE(errMsg);
    }
  };

  return (
    <>
      <nav className=" items-center flex mt-4 ml-4 w-full   ">
        <button
          className="rotate-180  text-xl  z-[1000] text-black "
          onClick={() => navigate("/goal")}
        >
          <GrLinkNext />
        </button>

        {/* reader */}
        <div className=" flex items-center  mx-auto ">
          <div className=" flex   gap-1 h-1   ">
            <div className="h-1 bg-black w-[50px] "></div>
            <div className="h-1 bg-black w-[50px] "></div>
            <div className="h-1 bg-black w-[50px] "></div>
            <div className="h-1 bg-black w-[50px] transition-opacity duration-500 ease-in-out animate-fadeIn "></div>
            <div className="h-1 bg-[#2827274a] w-[50px] "></div>
          </div>
        </div>
      </nav>
      <section className="h-full  mt-[-1rem] w-full fixed flex flex-col justify-center transition-opacity duration-500 ease-in-out animate-fadeIn sm:px-[6rem] md:px-[15rem] px-[20px]">
      <div className="h-full  mt-[-1rem] w-full fixed flex bg-bl  flex-col justify-center transition-opacity sm:px-auto  md:px-[15rem] px-[20px]">
        <h1 className=" text-3xl mt-[-16rem] sm:mt-[-21rem] fixed sm:text-5xl font-semibold">
          What's your focus area ?
        </h1>
        {ageRange.map((range) => (
          <>
            <div className="  mt-1  " key={range.range}>
              <p
                onClick={() => setChooseAgeRange(range.range)}
                className={`${
                  chooseAgeRange === range.range
                    ? "  bg-[#2827274a]  sm:text-4xl  w-[200px] p-2 sm:w-[350px] text-xl transition-all duration-300 ease-in-out "
                    : "   mt-3  text-[16px] sm:text-2xl  "
                } cursor-pointer  `}
              >
                {range.range}
              </p>
            </div>
          </>
        ))}
        <button
          onClick={handleSetGoal}
          className=" bg-black sm:text-2xl text-xl w-[100px]  p-2 mt-4 "
        >
          Next
        </button>
        </div>
      </section>
    </>
  );
};
export default AgeRange;
