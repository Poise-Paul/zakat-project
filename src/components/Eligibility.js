import React from "react";
import islamicBg from "../assets/islamic-bg.jpeg";
import logo from "../assets/zakat-logo.png";

const Eligibility = () => {
  return (
    <div className="App flex flex-col h-screen">
      {/* Fix Header Here */}
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
            <div className="border-r-2 border-gray-200 p-2 h-10 text-green-700 cursor-pointer transition duration-500 ease-in-out">
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
      {/* End the Header */}
      <div className="bg-green-300/75 h-full flex justify-center px-10 items-center gap-5 w-full">
        <div className="w-[60%] text-left flex flex-col gap-3">
          <h1 className="uppercase text-green-800 font-black text-6xl">
            Eligibilitty
          </h1>
          <p className="">
            The amount of Zakat to be paid by an individual depends on the
            amount of money and the type of assets the individual possesses.
          </p>
          <p>
            The Quran does not provide specific guidelines on which types of
            wealth are taxable under the zakat, nor does it specify percentages
            to be given.
          </p>
          <p>
            The customary practice is that the amount of zakat paid on capital
            assets (e.g. money) is 2.5% (1/40).
          </p>
          <p>
            Zakat is additionally payable on agricultural goods, precious
            metals, minerals, and livestock at a rate varying between 2.5% and
            20%, depending on the type of goods.
          </p>
          <h1 className="text-black font-bold">Qualification</h1>
          <p> Zakat is usually payable on assets:</p>
          <div>
            <ul className="font-semibold list-disc">
              <li>
                {" "}
                Some scholars consider the wealth of children and insane
                individuals zakatable, others don't.
              </li>
              <li>
                Some scholars consider all agricultural products zakatable,
                others restrict zakat to specific kinds only.{" "}
              </li>
              <li>Some consider debts zakatable, others don't.</li>
              <li>
                Similar differences exists for business assets and women's
                jewelry
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[40%] flex flex-col justify-around gap-7">
          <div className="bg-white/75 p-3 rounded-2xl bg-blend-darken">
            <img
              src={islamicBg}
              alt="islamic-bg"
              className="shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
