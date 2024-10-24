import { loginImg } from "../../assets";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  useEffect(() => {
    // Set a timeout to show the form after the component mounts
    const timer = setTimeout(() => setShowForm(true), 100); // Adjust timing as necessary
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      {/* Mobile View */}
      <section className={`md:hidden flex flex-col w-full h-screen`}>
        {/* Image Background */}
        <img
          src={loginImg}
          alt="cardio workout"
          className="fixed h-full w-full object-cover inset-0 mix-blend-darken z-0"
        />

        {/* Logo / Text Section */}
        <section className="relative flex flex-col justify-center items-cente w-full px-4  z-10">
          <div
            className={`absolute top-10 left-5 text-white text-4xl font-semibold transition-opacity duration-500 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <span>Get </span>
            <span className="text-[#25AD35]">Up</span>
          </div>

          <p className="text-2xl mt-[16rem]  mb-5">Login</p>

          {/* Login Form */}
          <form
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

            <input
              className="w-full bg-transparent mt-6 border-[#25AD35] placeholder:text-gray-500 outline-none border p-3 rounded-lg"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="flex justify-end w-full mt-2">
              <p className="text-xs">Forgot Password?</p>
            </div>

            <button
              className="bg-[#25AD35] p-2 mt-8 rounded-md text-black text-xl"
              type="submit"
            >
              Login
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
      <div className="hidden md:flex flex-col md:flex-row h-screen w-full">
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

            <form className="flex flex-col space-y-6">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-[#25AD35] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password Input */}
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-[#25AD35] outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex justify-between text-sm text-gray-400">
                <p>Forgot Password?</p>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-[#25AD35] text-black rounded-lg font-semibold"
              >
                Login
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
