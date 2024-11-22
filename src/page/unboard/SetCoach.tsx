import { useState, useEffect } from "react";
import { trainer1, trainer2, trainer3 } from "../../assets";
import { GrLinkNext } from "react-icons/gr";
import { postConfig } from "../../utils/crud.config";
import { toasterE } from "../../utils/Toaster";
import { useNavigate } from "react-router-dom";
interface Trainer {
  name: string;
  img: string;
}
interface FormData {
  newCoach: string;
}

const SetCoach = () => {
  const navigate = useNavigate();
  // trainer
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade animation
  const [coach, setCoach] = useState("");

  const trainers: Trainer[] = [
    {
      name: "Alex",
      img: trainer1,
    },
    {
      name: "Georgia",
      img: trainer2,
    },
    {
      name: "Karen",
      img: trainer3,
    },
  ];

  // Set initial coach to the first trainer on mount
  useEffect(() => {
    setCoach(trainers[0].name);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % trainers.length;
      setCurrentIndex(nextIndex);
      setCoach(trainers[nextIndex].name); // Auto-select next coach
      setFade(true);
    }, 300);
  };

  const handleBack = () => {
    setFade(false);
    setTimeout(() => {
      const prevIndex =
        currentIndex === 0 ? trainers.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCoach(trainers[prevIndex].name); // Auto-select previous coach
      setFade(true);
    }, 300);
  };

  const handleCoachSelect = async () => {
    try {
      const formData: FormData = { newCoach: coach };
      await postConfig("home/starter/coach", formData);
      navigate("/welcome");
    } catch (error: any) {
      const errMsg =
        error.response?.data?.msg || "An unexpected error occurred";
      toasterE(errMsg);
    }
  };

  return (
    <>
      <section className="w-full h-screen fixed  flex items-center justify-center">
        {/* phase one */}
        <section className="sm:px-[3rem] px-[20px] flex flex-col justify-center items-cente w-full">
          <h1 className=" text-center text-2xl font-semibold sm:text-3xl">
            Choose a personal coach
          </h1>
          <section className="h-[400px] sm:h-[600px] flex justify-center items-center">
            {/* desktop */}
            <div className=" sm:flex flex-col hidden items-center gap-5  ">
              <div className=" grid-cols-3 gap-[2rem] justify-center items-center lg:grid hidden">
                {trainers.map((trainer) => (
                  <div
                    key={trainer.name}
                    className="flex gap-2 flex-col items-center"
                    onClick={() => {
                      setCoach(trainer.name);
                    }}
                  >
                    <img
                      src={trainer.img}
                      className={`object-cover transition-all duration-300 ease-in-out  rounded-lg  h-[300px] ${
                        coach === trainer.name ? "border-4 border-white" : ""
                      }`}
                      alt={trainer.name}
                    />
                    <p className=" text-2xl">{trainer.name}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleCoachSelect}
                className=" w-[80px] bg-black p-2 px-5 text-2xl  flex items-center justify-center "
              >
                Next
              </button>
            </div>

            {/* Mobile version with back/next functionality */}
            <div className="flex flex-col w-full gap-3 justify-center  lg:hidden">
              <div className=" flex flex-col items-center gap-3 ">
                {" "}
                <div className="flex items-center  justify-between w-full">
                  <button className="rotate-180" onClick={handleBack}>
                    <GrLinkNext />
                  </button>

                  <div className="flex flex-col gap-3 items-center cursor-pointer">
                    <img
                      src={trainers[currentIndex].img}
                      className={`object-cover h-[250px] rounded-lg w-[260px] sm:w-[460px] sm:h-[450px] transition-all duration-300 ease-in-out ${
                        fade
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-10"
                      } ${
                        coach === trainers[currentIndex].name
                          ? "border-4 border-white"
                          : ""
                      }`}
                      alt={trainers[currentIndex].name}
                    />
                    <p
                      className={`transition-all duration-300 ease-in-out text-[17px] ${
                        fade
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      {trainers[currentIndex].name}
                    </p>
                  </div>

                  <button onClick={handleNext}>
                    <GrLinkNext />
                  </button>
                </div>
                <button
                  onClick={handleCoachSelect}
                  className=" bg-black text-xl w-[100px] p-2 mt-4 "
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
export default SetCoach;
