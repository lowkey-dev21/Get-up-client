import { trainer1, trainer2, trainer3 } from "../assets";
import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";

interface Trainer {
  name: string;
  img: string;
}

const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState<Boolean>(true); // State for fade animation

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

  const handleNext = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
      setFade(true); // Fade-in after index change
    }, 300); // Delay to sync with the transition duration
  };

  // Handle "Back" button click
  const handleBack = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? trainers.length - 1 : prevIndex - 1
      );
      setFade(true); // Fade-in after index change
    }, 300); // Delay to sync with the transition duration
  };

  return (
    <>
      <section className=" h-[400px] sm:h-[600px] flex justify-center ">
        {/* desktop */}
        <div className=" grid-cols-3 gap-[2rem] justify-center items-center  lg:grid hidden  ">
          {trainers.map((trainer) => (
            <>
              <div
                key={trainer.name}
                className=" flex gap-2 flex-col items-center"
              >
                <img
                  src={trainer.img}
                  className=" object-cover  h-[300px] "
                  alt=""
                />
                <p className=" ">{trainer.name}</p>
              </div>
            </>
          ))}
        </div>

        {/* Mobile version with back/next functionality */}
        <div className="flex flex-col w-full gap-3  justify-center items-center lg:hidden">
          <div className="flex items-center  justify-between w-full">
            <button className="rotate-180" onClick={handleBack}>
              <GrLinkNext />
            </button>

            {/* Image with smooth transition */}
            <img
              src={trainers[currentIndex].img}
              className={`object-cover h-[250px] w-[260px] sm:w-[460px] sm:h-[450px] transition-all duration-300 ease-in-out ${
                fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              alt={trainers[currentIndex].name}
            />

            <button onClick={handleNext}>
              <GrLinkNext />
            </button>
          </div>
          <p
            className={`transition-all duration-300 ease-in-out text-[17px] ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {trainers[currentIndex].name}
          </p>
        </div>
      </section>
    </>
  );
};
export default Trainers;
