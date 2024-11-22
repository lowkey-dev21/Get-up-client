import ClassicPlanSLider from "./ClassicPlanSLider"
import useSWR from "swr"
import redirect from "../../../utils/redirect.config"
import { getConfig } from "../../../utils/crud.config"
import Loading from "../../../tools/Loading"


const Classic = () => {
  redirect("token", "/login");
  const fetcher = async(url:string)=>{
    const res = await getConfig(url)
    return res
  }

  const {data,error, isLoading} = useSWR("home/profile/profile-picture", fetcher)

  if (isLoading) return <Loading/>;
  if (error) return <div>Error loading data</div>;

  const {profilePicture = ""} = data || {}
  return (
   <>
   <section className=" p-[20px] flex flex-col " >

<nav className=" flex justify-between items-center" >
<h1 className=" text-2xl font-semibold" >Home Workout</h1>
<img src={profilePicture} className=" w-[40px] h-[40px] bg-white rounded-full bg-cover  " alt="" />
</nav>
  

    <div className=" flex items-center mt-5 w-full pl-[15px]  " >
      <i className=" fa-solid fa-search text-xl mr-[-2.3rem]  " ></i>
      <input  type="text" className=" w-full  bg-[#2827274a] placeholder:pl-9 placeholder:text-[17px]  p-3 rounded-full " placeholder="search workouts, plans..." />
    </div>

    <ClassicPlanSLider/>

   </section>
   </>
  )
}
export default Classic