import React from "react";
import logo from "../assets/zakat-logo.png";

const SignIn = () => {
  return (
    <div className="App bg-green-300/50 h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col gap-7 p-5 w-[27rem] h-[30rem] rounded-2xl">
        {/* Logo + sign holder */}
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          </div>
          <h1 className="text-2xl text-gray-600 font-semibold">Sign In</h1>
          <small className="text-gray-400">Enter your details to sign in</small>
        </div>
        {/* Inputs Holder */}
        <div className="flex flex-col gap-2">
          <div className="border-2 border-gray-200 p-3 flex rounded-xl">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Enter Email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Enter Password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Agree Holder */}
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="focus:outline-none bg-green-500"
            />{" "}
            <small>
              I accept the{" "}
              <span className="text-green-700 underline">
                terms & condition
              </span>{" "}
              of Al-Fattah
            </small>
          </div>
          <div className="">
            <small className="">
              Don't Have An Account?{" "}
              <span className="text-green-700 underline">Sign Up</span>
            </small>
          </div>
        </div>
        {/* SIgn Up Button */}
        <div>
          <button className="w-full bg-gradient-to-r hover:bg-green-700 from-green-400 h-10 rounded-xl text-white font-semibold to-green-700">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
