import { GrLinkNext } from "react-icons/gr";

interface Videos {
  title: string;
  count: number;
}

const Footer = () => {
  const videos: Videos[] = [
    {
      title: "Workout at home",
      count: 15,
    },
    {
      title: "Weight trainig",
      count: 48,
    },
    {
      title: "High intensity",
      count: 25,
    },
    {
      title: "Everyday workout",
      count: 35,
    },
    {
      title: "Burn calories",
      count: 35,
    },
  ];
  return (
    <>
      <section className=" justify-center   w-full h-[500px] md:h-[900px] mt-[3.5rem]  gap-[2rem] sm:gap-[3rem] md:gap-[4rem] sm:mt-[10rem] md:mt-[3rem]    flex flex-col ">
        {videos.map((vid, index) => (
          <>
            <div
              className="  flex  justify-between hover:text-gray-300  items-center   "
              key={vid.title}
            >
              <span className=" font-light md:text-2xl">0{index + 1}</span>
              <div className=" flex flex-col">
                {" "}
                <span className=" text-2xl sm:text-4xl  z-[1000] ">
                  {vid.title}
                </span>{" "}
                <span className="font-light text-xs ">{vid.count} vidoes</span>
              </div>
              <span>
                <GrLinkNext className=" md:text-2xl" />
              </span>
            </div>
            <hr className=" border-gray-400 " />
          </>
        ))}
      </section>
    </>
  );
};
export default Footer;
