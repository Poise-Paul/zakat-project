import React from "react";
import logo from "../assets/zakat-logo.png";

const SignUp = () => {
  return (
    <div className="App bg-green-300/50 h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col gap-7 p-5 w-[50rem] h-[40rem] rounded-2xl">
        {/* Logo + sign holder */}
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          </div>
          <h1 className="text-2xl text-gray-600 font-semibold">Sign In</h1>
          <small className="text-gray-400">Enter your details to sign in</small>
        </div>
        {/* Inputs Holder */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {" "}
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="First Name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Last Name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Email Address"
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
                placeholder="Base Currency"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
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
          <div className="flex flex-col gap-3">
            {" "}
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Address"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Zip Code"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="State"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="City"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div className="border-2 border-gray-200 flex gap-1 p-3 rounded-xl">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Country"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Agree Holder */}
        <div className="flex space-between">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="focus:outline-none bg-green-500"
            />{" "}
            <small className="capitalize">
              i have asset's in different currencies
            </small>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="focus:outline-none bg-green-500"
            />{" "}
            <small className="capitalize">
              i accept the{" "}
              <span className="text-green-700">terms and condition</span> of
              Al-Fattah
            </small>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 items-center border-r-2 border-gray-300">
              <input
                type="checkbox"
                className="focus:outline-none bg-green-500"
              />{" "}
              <small className="capitalize">i am a muslim</small>
            </div>
            <span className="capitalize">
              have an account?{" "}
              <span className="text-green-700 underline">Sign In</span>
            </span>
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

export default SignUp;
