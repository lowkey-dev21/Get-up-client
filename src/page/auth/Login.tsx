import { loginImg } from "../../assets";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../../services/api";
import { toasterE } from "../../utils/Toaster";
import { FormEvent } from "react";
import LoaderBtn from "../../tools/LoaderBtn";
import { FaEyeSlash } from "react-icons/fa";
import { FaMehRollingEyes } from "react-icons/fa";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false); // State to control form visibility
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    // Set a timeout to show the form after the component mounts
    const timer = setTimeout(() => setShowForm(true), 100); // Adjust timing as necessary
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (email && password) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [email, password]);

  // login
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData: FormData = { email, password };
      setLoader(true);
      const res = await axios.post("/auth/login", formData);
      const token = res.data.token;
      Cookies.set("token", token);
      setEmail("");
      setPassword("");
      navigate("/home/classic");
      setLoader(false);
    } catch (error: any) {
      // Log the full error for debugging
      // console.error("Login Error: ", error); // Log the error to the console
      const errMsg =
        error.response?.data?.msg || error.message || "An unexpected error occurred";
      toasterE(errMsg); // Show error message
      setLoader(false);
    }
  };
  

  return (
    <>
      {/* Mobile View */}
      <section className={`lg:hidden flex  w-full h-screen`}>
        {/* Image Background */}
        <img
          src={loginImg}
          alt="cardio workout"
          className="fixed h-full w-full object-cover inset-0 mix-blend-darken z-0"
        />

        {/* Logo / Text Section */}
        <section className="relative md:px-[7rem] flex flex-col justify-center items-cente w-full px-4  z-10">
          {/* Logo */}
          <div
            className={`absolute top-10 md:text-5xl md:left-7 left-5 z-10 text-white text-4xl font-semibold transition-opacity duration-500 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <span>Get </span>
            <span className="text-[#25AD35]">Up</span>
          </div>

          <p className="text-2xl md:text-4xl  mb-5">Login</p>

          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className={`flex flex-col p-6 border border-[#25AD35] backdrop-blur-md bg-[#0000004c] w-full rounded-lg transition-opacity duration-700 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <label className="text-white text-lg font-semibold">
              Welcome Back
            </label>

            <input
              className="w-full bg-transparent mt-3 border-[#25AD35] placeholder:text-gray-500 outline-none border p-3 rounded-lg"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <div className=" flex items-center  ">
              <input
                className="w-full bg-transparent mt-6 border-[#25AD35] placeholder:text-gray-500 outline-none border p-3 rounded-lg"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className=" ml-[-2.5rem] h-[50px] mt-6 flex items-center text-[#25AD35]  text-2xl "
              >
                {showPassword ? <FaMehRollingEyes /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="flex justify-end w-full mt-2">
              <p className="text-xs">Forgot Password?</p>
            </div>

            <button
              className="bg-[#25AD35] disabled:bg-green-900 items-center justify-center text-center h-[50px] p-2 mt-8 rounded-md text-black text-xl"
              type="submit"
              disabled={!submit}
            >
              {loader ? <LoaderBtn size="47" /> : <span>Login</span>}
            </button>

            <p className="text-sm text-center mt-6">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/sign-up")}
                className="font-semibold text-[#25AD35]"
              >
                Sign Up!
              </span>
            </p>
          </form>
        </section>
      </section>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col md:flex-row h-screen w-full">
        {/* Left Side - Image and Branding */}
        <div className="flex md:w-1/2 relative">
          <img
            src={loginImg}
            alt="Workout"
            className="object-cover w-full h-full mix-blend-darken"
          />
          <div
            className={`absolute top-10 left-10 text-white text-4xl font-semibold transition-opacity duration-500 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <span>Get </span>
            <span className="text-[#25AD35]">Up</span>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center items-center md:w-1/2 bg-black p-8">
          <h2 className="text-white text-3xl mb-6">Login</h2>
          <div
            className={`w-full max-w-md p-8 bg-gray-900 rounded-xl transition-opacity duration-700 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <h2 className="text-white text-3xl font-semibold mb-6">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin} className="flex flex-col space-y-6">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-transparent border rounded-lg text-white placeholder-gray-500 border-[#25AD35] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password Input */}
              <div className=" flex items-center  ">
                <input
                  className="w-full bg-transparent  border-[#25AD35] placeholder:text-gray-500 outline-none border p-3 rounded-lg"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className=" ml-[-2.5rem] h-[50px]  flex items-center text-[#25AD35]  text-2xl "
                >
                  {showPassword ? <FaMehRollingEyes /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <p>Forgot Password?</p>
              </div>

              <button
                className="bg-[#25AD35] disabled:bg-green-900 items-center justify-center text-center h-[50px] p-2 mt-8 rounded-md text-black text-xl"
                type="submit"
                disabled={!submit}
              >
                {loader ? <LoaderBtn size="47" /> : <span>Login</span>}
              </button>

              <p className="text-gray-400 text-center">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/sign-up")}
                  className="font-semibold text-[#25AD35] cursor-pointer"
                >
                  Sign up!
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
