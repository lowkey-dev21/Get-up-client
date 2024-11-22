import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { getConfig } from "../../utils/crud.config";
import { GrLinkNext } from "react-icons/gr";
import Loading from "../../tools/Loading";
import redirect from "../../utils/redirect.config";

const Welcome = () => {
  const fetcher = async (url: string) => {
    const res = await getConfig(url);
    return res;
  };
  const navigate = useNavigate();
  redirect("token", "/login"); // redirect to login ifunthorized

  const { data, error, isLoading } = useSWR("home/starter/welcome", fetcher);

  if (isLoading) return <Loading />;
  if (error) return <div>Error Loading</div>;

  const { coach = " " } = data || {};
  return (
    <>
      <button
        className="rotate-180 mt-4 ml-4 text-xl  text-black "
        onClick={() => navigate("/home")}
      >
        <GrLinkNext />
      </button>

      <section className="h-full  mt-[-1rem] w-full fixed flex flex-col justify-center transition-opacity duration-500 ease-in-out animate-fadeIn sm:px-[6rem] md:px-[15rem] px-[20px]">
        <p>
          <span className="text-4xl">👋</span>
          <h1 className="font-semibold text-4xl sm:text-5xl">Hello!</h1>
          <br />
          <p className="sm:text-3xl">
            I'm <span className=""> {coach}</span>, your personal coach. <br />{" "}
            Let’s go through some questions to create a{" "}
            <span className="text-black">customized plan</span> just for you.
          </p>
        </p>

        <button
          onClick={() => navigate("/gender")}
          className="w-[120px] sm:w-[150px] sm:p-4 sm:text-2xl text-xl bg-black p-3 mt-5 transition-transform duration-300 hover:scale-105"
        >
          I’M READY
        </button>
      </section>
    </>
  );
};

export default Welcome;
