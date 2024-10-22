import body from "../assets/body.png";

const Hero = () => {
  return (
    <>
      <section
        className={`h-64 w-full bg-gradient-to-r from-[#25AD35] to-[#25AD35]`}
      >
        <div className="inset-0 md:px-[5rem] px-[20px] mt-[-1rem] flex p-2">
          {/* Update badge */}
          <div className="flex h-[40px] p-1 pl-1.5 pr-5 bg-[#2827274a] backdrop-opacity-30 items-center justify-center gap-2 rounded-full">
            <span className="bg-white text-black p-1 text-[12px] rounded-full px-3">
              NEW
            </span>
            <span className="font-light text-[13px]">
              High Intensity workout to burn calories
            </span>
          </div>
        </div>

        <div className="md:px-[5rem] px-[20px] absolute md:mt-[15rem] mt-[9rem] inset-0 flex flex-col">
          <div className="w-full md:flex">
            <div className="md:w-[80%]">
              <p className="text-[400%] md:text-[900%] md:leading-[90%] font-semibold leading-[90%] flex flex-col">
                <span>Cardio</span>
                <span className="text-black"> Workout</span>
              </p>
              <p className="font-light md:text-xl text-xs mt-2">
                Sweat it out, turn your sweat into strength!
              </p>
            </div>

            <div className="flex md:flex-col md:justify-normal md:gap-5 gap-[3rem] justify-between md:w-[20%] w-full mt-10">
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

          <div className="mt-4 md:mt-[4rem] z-[500] text-[13px] flex md:w-[30%] w-full gap-[3rem]">
            <button className="bg-white rounded-lg text-black p-2 md:p-5 w-full">
              Get Started
            </button>
            <button className="z-[9000] bg-black rounded-lg text-white md:p-5  p-2 w-full">
              Preview
            </button>
          </div>
        </div>

        {/* Image Background */}
        <img
          src={body}
          alt="cardio workout"
          className="absolute inset-0 md:mt-[7rem] md:ml-[-6rem] mt-[15.6rem] mix-blend-overlay"
        />

        {/* Popular exercise */}
        <div className="relative md:mt-[43rem] mt-[23rem] flex bg-[#2827274a] backdrop-opacity-30 w-full h-[1000px]"></div>
      </section>
    </>
  );
};

export default Hero;
