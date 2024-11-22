import { useNavigate } from "react-router-dom";
import { postConfig } from "../../utils/crud.config";
import { GrLinkNext } from "react-icons/gr";
import redirect from "../../utils/redirect.config";
import { useState } from "react";
import { toasterE } from "../../utils/Toaster";

interface Areas {
  area: string;
}

interface FormData {
  area: string;
}
const FocusArea = () => {
  const navigate = useNavigate();
  redirect("token", "/login");

  const [chooseArea, setChooseArea] = useState("");

  const areas: Areas[] = [
    {
      area: "Arm",
    },
    {
      area: "Shoulder",
    },
    {
      area: "Cheast",
    },
    {
      area: "Abs",
    },
    {
      area: "Leg",
    },
    {
      area: "Full Body",
    },
  ];

  const handleSetArea = async () => {
    try {
      if (!chooseArea) return toasterE("choose area");
      navigate("/goal");
      const formData: FormData = { area: chooseArea };
      await postConfig("/home/starter/area", formData);
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
          onClick={() => navigate("/gender")}
        >
          <GrLinkNext />
        </button>

        {/* reader */}
        <div className=" flex items-center  mx-auto ">
          <div className=" flex   gap-1 h-1   ">
            <div className="h-1 bg-black w-[50px]  "></div>
            <div className="h-1 bg-black w-[50px] transition-opacity duration-500 ease-in-out animate-fadeIn  "></div>
            <div className="h-1 bg-[#2827274a] w-[50px] "></div>
            <div className="h-1 bg-[#2827274a] w-[50px] "></div>
            <div className="h-1 bg-[#2827274a] w-[50px] "></div>
          </div>
        </div>

        <div></div>
        <div></div>
      </nav>
      <section className="h-full  mt-[-1rem] w-full fixed flex flex-col justify-center transition-opacity duration-500 ease-in-out animate-fadeIn sm:px-[6rem] md:px-[15rem] px-[20px]">
        <h1 className=" text-3xl mt-[-24rem] sm:mt-[-29rem] fixed sm:text-5xl font-semibold">
          What's your focus area ?
        </h1>
        {areas.map((area) => (
          <>
            <div className="  mt-1  " key={area.area}>
              <p
                onClick={() => setChooseArea(area.area)}
                className={`${
                  chooseArea === area.area
                    ? "  bg-[#2827274a]  sm:text-4xl  w-[200px] p-2 sm:w-[350px] text-xl transition-all duration-300 ease-in-out "
                    : "   mt-3  text-[16px] sm:text-2xl  "
                } cursor-pointer  `}
              >
                {area.area}
              </p>
            </div>
          </>
        ))}
        <button
          onClick={handleSetArea}
          className=" bg-black sm:text-2xl text-xl w-[100px]  p-2 mt-4 "
        >
          Next
        </button>
      </section>
    </>
  );
};
export default FocusArea;
