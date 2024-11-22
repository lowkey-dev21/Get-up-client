import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { google, loginImg } from "../../assets";
import Cookies from "js-cookie";
import axios from "../../services/api";
import { toasterS, toasterE } from "../../utils/Toaster";
import { FormEvent } from "react";
import LoaderBtn from "../../tools/LoaderBtn";
import { FaEyeSlash } from "react-icons/fa";
import { FaMehRollingEyes } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [msg, setMsg] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    // Enable submit button if all fields are filled and password is valid, otherwise disable it
    if (name && email && password && isValidPassword(password)) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [name, email, password]);

  useEffect(() => {
    // Set a timeout to show the form after the component mounts
    const timer = setTimeout(() => setShowForm(true), 100); // Adjust timing as necessary
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Utility function to validate password
  const isValidPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePassword = () => {
    if (password === "") {
      // If password is empty, don't show the error message
      setMsg(false);
    } else {
      // Show error message only if password is not valid and non-empty
      setMsg(!isValidPassword(password));
    }
  };

  // Sign Up function
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData: FormData = {
        name: name,
        email: email,
        password: password,
      };
      setLoader(true);
      const res = await axios.post("/auth/sign-up", formData);
      const token = res.data.user.token;
      const msg = res.data.msg;
      toasterS(msg);
      Cookies.set("token", token);
      setName("");
      setEmail("");
      setPassword("");
      setLoader(false);
      setSubmit(false);
      navigate("/login");
    } catch (error: any) {
      const errMsg =
        error.response?.data?.msg || "An unexpected error occurred";
      toasterE(errMsg);
      setLoader(false);
      setSubmit(false);
    }
  };

  return (
    <>
      {/* Mobile */}
      <section className={`lg:hidden w-full flex`}>
        {/* Image Background */}

        <img
          src={loginImg}
          alt="cardio workout"
          className="fixed h-screen  w-full object-cover inset-0 mix-blend-darken z-[1]"
        />

        {/* Logo / Text Section */}
        <section className="w-full px-4 md:px-[7rem] z-[10] flex-col flex p-2 relative">
          {/* Logo */}
          <div
            className={`absolute top-10 md:text-5xl md:left-7 left-5 z-10 text-white text-4xl font-semibold transition-opacity duration-500 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <span>Get </span>
            <span className="text-[#25AD35]">Up</span>
          </div>

          <p className="text-2xl md:text-4xl mt-[14rem] mb-5">Sign Up</p>

          {/* Sign Up form */}
          <form
            onSubmit={handleSignUp}
            className={`flex flex-col p-6 backdrop-blur-[5px] border border-[#25AD35] bg-[#0000004c] w-full rounded-lg transition-opacity duration-700 ease-in-out ${
              showForm ? "opacity-100 animate-fadeIn" : "opacity-0"
            }`}
          >
            <input
              className="w-full bg-transparent mt-3 border-[#25AD35] placeholder:text-gray-500 outline-none border-[1px] p-3 rounded-lg"
              type="text"
              placeholder="Full Name"
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

            <div className=" flex items-center  ">
              <input
                className="w-full bg-transparent mt-6 border-[#25AD35] placeholder:text-gray-500 outline-none border p-3 rounded-lg"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => (
                  setPassword(e.target.value), validatePassword()
                )}
                value={password}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className=" ml-[-2.5rem] h-[50px] mt-6 flex items-center text-[#25AD35]  text-2xl "
              >
                {showPassword ? <FaMehRollingEyes /> : <FaEyeSlash />}
              </span>
            </div>

            {msg && (
              <p className=" font-light text-xs mt-3 text-red-500">
                Password must be at least 8 characters long, contain at least
                one uppercase letter, one lowercase letter, and one number.
              </p>
            )}

            <button
              className="bg-[#25AD35] disabled:bg-green-900 p-2 mt-8 h-[50px] rounded-md flex items-center justify-center text-center text-black text-xl"
              type="submit"
              disabled={!submit}
            >
              {!loader && <span>Sign Up</span>}
              {loader && <LoaderBtn size="47" />}
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

      {/* ------------------------------------------------------------------------------------------------- */}
      {/* Desktop */}
      <div className="hidden lg:flex flex-col md:flex-row h-screen w-full">
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
            <form onSubmit={handleSignUp} className="flex flex-col space-y-6">
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
                  onChange={(e) => (
                    setPassword(e.target.value), validatePassword()
                  )}
                  value={password}
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className=" ml-[-2.5rem] h-[50px]  flex items-center text-[#25AD35]  text-2xl "
                >
                  {showPassword ? <FaMehRollingEyes /> : <FaEyeSlash />}
                </span>
              </div>

              {msg && (
                <p className=" font-light text-xs mt-3 text-red-500">
                  Password must be at least 8 characters long, contain at least
                  one uppercase letter, one lowercase letter, and one number.
                </p>
              )}

              <button
                className="bg-[#25AD35] items-center justify-center text-center h-[50px] p-2 mt-8 rounded-md text-black text-xl"
                type="submit"
                disabled={!submit}
              >
                {loader ? <LoaderBtn size="47" /> : <span>Sign Up</span>}
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
