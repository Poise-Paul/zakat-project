import React from "react";
import whitelogo from "../assets/White-Al Fattah.png";
const QuickCalc = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-green-400 to-green-700 h-28 grid grid-cols-3">
        <div className="flex px-5 items-center gap-4">
          <img src={whitelogo} alt="Al-Fattah" />{" "}
          <div className="text-white">
            <h1 className="uppercase text-2xl font-black">al-fattah</h1>{" "}
            <h1 className="uppercase font-semibold">Foundation</h1>
          </div>
        </div>
        <div className="flex gap-3 items-center capitalize">
          <h1 className="text-2xl font-bold text-white">
            Welcome back mohammed
          </h1>
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.jNkVYi6wo56B6th6dnM_YQHaEg&pid=Api&P=0&w=299&h=182"
              alt="islamic-man"
              className="w-full h-full rounded-full object-cover "
            />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-end p-5">
          <div className="border-r-2 border-white px-3 gap-4 h-10 flex items-center">
            <div className="bg-white rounded-full flex justify-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>{" "}
            <span className="text-white font-semibold">Print</span>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <div className="bg-white h-10 w-10 p-2 rounded-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>{" "}
            <span className="text-white font-semibold">Logout</span>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="px-20 py-10">
        <div className="border-2 border-green-500 p-5 shadow-md shadow-green-300 rounded-2xl">
          <div className="text-center text-green-700">
            <h1 className="font-bold text-5xl">Quick Calculation</h1>
            <h1 className="font-semibold text-2xl">(Assets)</h1>
          </div>
          {/* Main Calculator */}
          <div className="grid grid-cols-2 p-5 gap-5">
            <div className="px-5 flex justify-center border-r-2 border-gray-300">
              <ul className="capitalize list-decimal text-xl flex flex-col gap-6">
                <li>cash at home / bank</li>
                <li>gold and silver</li>
                <li>trading business</li>
                <li>retirement & savings plan</li>
                <li>properties</li>
                <li>shares</li>
                <li>agricultural produce</li>
                <li>debts owed to you</li>
                <li>other assets</li>
              </ul>
            </div>
            {/* Input Box Container Starts Here */}
            <div className="flex justify-center">
            <div className="flex flex-col gap-4">
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
                  <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
                  <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
                  <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
                  <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
            </div>
            </div>
            {/* The Boxes Container Ends Here */}

          </div>
        
        {/* Liabilities */}
  <div className="text-center text-green-700 mt-7">
            <h1 className="font-bold text-5xl">Quick Calculation</h1>
            <h1 className="font-semibold text-2xl">(Liabilities)</h1>
          </div>
          {/* Liability Table */}
            <div className="grid grid-cols-2 p-5 gap-5">
            <div className="px-5 flex justify-center border-r-2 border-gray-300">
              <ul className="capitalize list-decimal text-xl flex flex-col gap-6">
                <li>Personal Liabilities</li>
                <li>business liabilities</li>
                <li>other liabilities</li>
              </ul>
            </div>
            {/* Input Box Container Starts Here */}
            <div className="flex justify-center">
            <div className="flex flex-col gap-4">
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
            </div>
            </div>
            {/* The Boxes Container Ends Here */}
          </div>
        {/* Liabilities Ends here */}

        {/* Zakat Summary */}
          <div className="text-center text-green-700 mt-7">
            <h1 className="font-bold text-5xl">Zakat Summary</h1>
          </div>
          {/* Liability Table */}
            <div className="grid grid-cols-2 p-5 gap-5">
            <div className="px-5 flex justify-center border-r-2 border-gray-300">
              <ul className="capitalize list-decimal text-2xl font-bold flex flex-col gap-6">
                <li>Total Assets</li>
                <li>Total Liabilities</li>
                <li>Total Zakatable</li>
                <li>Zakat (Amount) </li>
              </ul>
            </div>
            {/* Input Box Container Starts Here */}
            <div className="flex justify-center">
            <div className="flex flex-col gap-4">
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
              <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
                   <div className="bg-gray-300 w-60 rounded-lg p-2">
                <input
                  type="number"
                  placeholder="N0.00"
                  className="bg-transparent w-full focus:outline-none text-right"
                />
              </div>
            </div>
            </div>
            {/* The Boxes Container Ends Here */}
          </div>
        </div>
      </div>
    </div>
 
 
  );
};

export default QuickCalc;
