import React from "react";
import logo from "../assets/zakat-logo.png";
// import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex items-center justify-center h-[20%] bg-white">
      <div className="grid grid-cols-2">
        <div className="flex gap-4 items-center">
          {" "}
          <img
            src={logo}
            alt="zakat-logo"
            className="h-20 w-20 object-contain"
          />{" "}
          <div className="uppercase text-3xl  ">
            <h1 className="font-black">al-fattah</h1>
            <h1 className="font-semibold">Foundation</h1>
          </div>
        </div>
        <div className="flex text-gray-400 items-center">
          <div className="border-r-2 border-gray-200 p-2 h-10 hover:text-green-700 cursor-pointer transition duration-500 ease-in-out">
            <a href="/zakatMeaning">What is Zakat </a>
          </div>{" "}
          <div className="border-r-2 border-gray-200 p-2 h-10 hover:text-green-700 cursor-pointer transition duration-500 ease-in-out">
            <a href="/eligibility"> Eligibility</a>
          </div>
          <div className="border-r-2 border-gray-200 p-2 h-10 hover:text-green-700 cursor-pointer transition duration-500 ease-in-out">
            <a href="/calculation">Calculation</a>
          </div>
          <div className="border-r-2 border-gray-200 p-2 h-10 hover:text-green-700 cursor-pointer transition duration-500 ease-in-out">
            <a href="/distribution"> Distribution </a>
          </div>
          <div className="border-r-2 border-gray-200 p-2 h-10 hover:text-green-700 cursor-pointer transition duration-500 ease-in-out">
            {" "}
            <a href="/about"> About Us</a>
          </div>
          <div className=" flex text-green-900 p-2">
            {" "}
            My Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
