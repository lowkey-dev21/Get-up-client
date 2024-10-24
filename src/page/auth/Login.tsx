import { loginImg } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      {/* mobile */}
      <section className={` md:hidden w-full flex `}>
        {/* Image Background */}
        <img
          src={loginImg}
          alt="cardio workout"
          className="fixed h-screen w-full object-cover inset-0 md:mt-[7rem] md:ml-[-6rem] mix-blend-darken z-[1]"
        />

        {/* logo / Text Section */}
        <section className="w-full md:px-[5rem] px-[20px] z-[10] flex-col flex p-2 relative">
          {/* logo */}
          <p className="text-3xl font-semibold mt-4">
            <span>Get </span>
            <span className=" text-[#25AD35]">Up</span>
          </p>

          <p className="text-2xl mt-[14rem] mb-5 ">Login</p>

          {/* Login form */}
          <form className="flex flex-col p-[30px] backdrop-blur-[5px] border   bg-[#0000004c] w-full rounded-lg">
            <label className="text-white text-[18px]  font-semibold ">
              Welcome Back
            </label>
            {/* Add form elements */}

            <input
              className=" w-full bg-transparent mt-3 focus:border-[#25AD35] placeholder:text-gray-500 outline-none  border-[1px] p-3 rounded-lg "
              type="email"
              placeholder=" Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              className=" w-full bg-transparent mt-6 focus:border-[#25AD35] placeholder:text-gray-500 outline-none  border-[1px] p-3 rounded-lg "
              type="email"
              placeholder=" Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className=" flex justify-end w-full mt-2 ">
              <p className=" text-xs">Forgot Password?</p>
            </div>

            <button
              className=" bg-[#25AD35] p-2 mt-8 rounded-md text-black text-xl "
              type="submit"
            >
              Login
            </button>

            <p className=" text-xs text-center mt-6">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/sign-up")}
                className=" font-semibold"
              >
                Sign Up!
              </span>
            </p>
          </form>
        </section>
      </section>
    </>
  );
};
export default Login;
