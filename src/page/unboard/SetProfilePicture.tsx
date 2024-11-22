import { useNavigate } from "react-router-dom";
import { getConfig, postConfig } from "../../utils/crud.config";
import { GrLinkNext } from "react-icons/gr";
import redirect from "../../utils/redirect.config";
import { useState } from "react";
import { toasterE } from "../../utils/Toaster";
import useSWR from "swr";
import Loading from "../../tools/Loading";

interface FormData {
  profilePicture: string;
}

const SetProfilePicture = () => {
  const navigate = useNavigate();
  redirect("token", "/login");
  const [chooseProfilePicture, setChooseProfilePicture] = useState<
    null | String | any
  >(null);

  const fetcher = async (url: string) => {
    const res = await getConfig(url);
    return res;
  };

  const { data, error, isLoading } = useSWR(
    "/home/starter/profile-avatar",
    fetcher
  );
  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data</div>;

  const { avatars = [] } = data || {};

  const handleUpload = async () => {
    if (!chooseProfilePicture) return toasterE("Please select avatar ");
    const formData: FormData = { profilePicture: chooseProfilePicture };
    try {
      await postConfig("home//stater/set-profile-avatar", formData);
      navigate("/home");
    } catch (error) {
      console.error("Error uploading image:", error);
      toasterE("Failed to upload image. Please try again.");
    }
  };

  return (
    <>
      <nav className=" items-center flex mt-4 ml-4 w-full   ">
        <button
          className="rotate-180  text-xl  z-[1000] text-black "
          onClick={() => navigate("/age-range")}
        >
          <GrLinkNext />
        </button>

        {/* reader */}
        <div className=" flex items-center  mx-auto ">
          <div className=" flex   gap-1 h-1   ">
            <div className="h-1 bg-black w-[50px] "></div>
            <div className="h-1 bg-black w-[50px] "></div>
            <div className="h-1 bg-black w-[50px] "></div>
            <div className="h-1 bg-black w-[50px] "></div>
            <div className="h-1 bg-black w-[50px] transition-opacity duration-500 ease-in-out animate-fadeIn "></div>
          </div>
        </div>
      </nav>

      <section className="h-full  mt-[-1rem] w-full fixed flex flex-col justify-center transition-opacity duration-500 ease-in-out animate-fadeIn sm:px-[6rem] md:px-[15rem] px-[20px]">
        <h1 className=" text-3xl mt-[-16rem] sm:mt-[-21rem] fixed sm:text-5xl font-semibold">
          Choose Avatar:
        </h1>
        <div className=" flex">
          {avatars.map((avatar: any) => (
            <>
              <div className=" flex items-center gap-2" key={avatar.url}>
                <img
                  onClick={() => setChooseProfilePicture(avatar.url)}
                  src={avatar.url}
                  className={` w-[100px] sm:w-[200px] cursor-pointer ${
                    chooseProfilePicture === avatar.url
                      ? " border-white border-[2px] "
                      : " "
                  }  `}
                  alt=""
                />
              </div>
            </>
          ))}
        </div>
        <button
          onClick={handleUpload}
          className=" bg-black sm:text-2xl text-xl w-[100px]  p-2 mt-7 "
        >
          Next
        </button>
      </section>
    </>
  );
};
export default SetProfilePicture;
