import redirect from "../../utils/redirect.config";
import { getConfig } from "../../utils/crud.config";
import useSWR from "swr";
import SetCoach from "../unboard/SetCoach";
import Loading from "../../tools/Loading";
import { Outlet } from "react-router-dom";
import HomeNavBar from "./HomeNavBar";

const HomeLayout = () => {
  redirect("token", "/login"); //redirect the page to login if not authorized

  const fetcher = async (url: string) => {
    const res = await getConfig(url);
    return res;
  };

  const { data, error, isLoading } = useSWR("/home/starter", fetcher);
  if (isLoading) return <Loading />;
  if (error) return <div>Error loading data</div>;

  const { starter = "" } = data || {};

  return (
    <>
      <section className=" w-full h-screen fixed flex justify-center items-center  ">
        {starter && <SetCoach />}
      </section>
      {!starter && <HomeNavBar />}
      <Outlet />
    </>
  );
};
export default HomeLayout;
