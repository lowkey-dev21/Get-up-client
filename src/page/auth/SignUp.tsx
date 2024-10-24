import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, google, loginImg } from "../../assets";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  useEffect(() => {
    // Set a timeout to show the form after the component mounts
    const timer = setTimeout(() => setShowForm(true), 100); // Adjust timing as necessary
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      {/* Mobile */}
      <section className={`sm:hidden w-full flex`}>
        {/* Image Background */}
        <img
          src={signUp}
          alt="cardio workout"
          className="fixed h-screen w-full object-cover inset-0 mix-blend-darken z-[1]"
        />

        {/* Logo / Text Section */}
        <section className="w-full px-4 md:px-[5rem] z-[10] flex-col flex p-2 relative">
          {/* Logo */}
          <div
            className={`absolute top-10 left-5 z-10 text-white text-4xl font-semibold transition-opacity duration-500 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <span>Get </span>
            <span className="text-[#25AD35]">Up</span>
          </div>

          <p className="text-2xl mt-[16rem] mb-5">Sign Up</p>

          {/* Sign Up form */}
          <form
            className={`flex flex-col p-6 backdrop-blur-[5px] border border-[#25AD35] bg-[#0000004c] w-full rounded-lg transition-opacity duration-700 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <input
              className="w-full bg-transparent mt-3 border-[#25AD35] placeholder:text-gray-500 outline-none border-[1px] p-3 rounded-lg"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="w-full bg-transparent mt-6 border-[#25AD35] placeholder:text-gray-500 outline-none border-[1px] p-3 rounded-lg"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              className="w-full bg-transparent mt-6 border-[#25AD35] placeholder:text-gray-500 outline-none border-[1px] p-3 rounded-lg"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              className="bg-[#25AD35] p-2 mt-8 rounded-md text-black text-xl"
              type="submit"
            >
              Sign Up
            </button>

            <button
              className="font-normal flex items-center justify-center bg-white p-1 mt-4 rounded-md text-black"
              type="button"
            >
              <img src={google} className="w-[30px]" alt="Google logo" />
              <span className="text-gray-600 font-light">Google</span>
            </button>

            <p className="text-xs text-center mt-[30px]">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#25AD35] font-semibold cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        </section>
      </section>

      {/* Desktop */}
      <div className="hidden sm:flex flex-col md:flex-row h-screen w-full">
        {/* Left side - Image and Branding */}
        <div className="hidden md:flex w-1/2 relative">
          <img
            src={loginImg}
            alt="Workout"
            className="w-full h-full object-cover mix-blend-darken"
          />
          <div
            className={`absolute top-10 left-10 z-10 text-white text-4xl font-semibold transition-opacity duration-500 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <span>Get </span>
            <span className="text-[#25AD35]">Up</span>
          </div>
        </div>

        {/* Right side - Sign Up Form */}
        <div className="w-full md:w-1/2 flex-col  flex justify-center items-center bg-black">
          <h2 className="text-white text-3xl mb-6">Sign Up</h2>

          <div
            className={`w-full max-w-md p-8 bg-gray-900 rounded-xl transition-opacity duration-700 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <form className="flex flex-col space-y-6">
              {/* Name Input */}
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-[#25AD35] outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

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

              <button
                type="submit"
                className="w-full p-3 bg-[#25AD35] text-black rounded-lg font-semibold"
              >
                Sign Up
              </button>

              <button
                className="font-normal flex items-center justify-center bg-white p-1 mt-4 rounded-md text-black"
                type="button"
              >
                <img src={google} className="w-[30px]" alt="Google logo" />
                <span className="text-gray-600 font-light">Google</span>
              </button>

              <p className="text-gray-400 text-center">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="font-semibold text-[#25AD35] cursor-pointer"
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
