import React from "react";
import logo from "../assets/zakat-logo.png";

const Distribution = () => {
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
            <div className="border-r-2 border-gray-200 p-2 h-10 hover:text-green-700 cursor-pointer transition duration-500 ease-in-out">
              <a href="/eligibility"> Eligibility</a>
            </div>
            <div className="border-r-2 border-gray-200 p-2 h-10 hover:text-green-700 cursor-pointer transition duration-500 ease-in-out">
              <a href="/calculation">Calculation</a>
            </div>
            <div className="border-r-2 border-gray-200 p-2 h-10 text-green-700 cursor-pointer transition duration-500 ease-in-out">
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
      {/* End Header */}
      <div className="bg-green-300/75 h-full flex justify-center px-10 items-center gap-5 w-full">
        <div className="flex flex-col gap-4">
          <h1 className="capitalize text-6xl text-green-700 font-black">
            Zakat Assets
          </h1>
          <div className="grid grid-cols-3">
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">1</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Cash at Home/Bank</h1>
                <p>
                  If interest has been earned on your liquid investments, then
                  record only the principal investment amount.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">2</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Gold and Silver</h1>
                <p>
                  Gold and silver, in whichever form (jewellery, coin, ingots
                  etc.) are zakat.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">3</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Trading Business</h1>
                <p>
                  Cash Goods for sale* (Wholesale Price) Inventory * (Wholesale
                  Price) Work in Progress (at cost) Row Materials (at cost)
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">4</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">
                  {" "}
                  Retirement & Savings Plan
                </h1>
                <p>
                  For RRSP you can deduct withdrawal tax. For RESP, you should
                  minus early withdrawal deductions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">5</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Properties</h1>
                <p>
                  The house in which you live is not subject to Zakat. For a
                  rental property then you only have to pay Zakat on the rental
                  income minus the expenses related to the rental income.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">6</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Shares</h1>
                <p>
                  Calculate value based on the trading value at the date of
                  Zakat calculation. In the case of none listed shares calculate
                  on the basis of the company's balance sheet.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">7</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Agricultural Produce</h1>
                <p>
                  Zakat is payable on agricultural goods, and livestock at a
                  rate varying between 2.5% and 20%, depending on the type of
                  goods.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">8</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Debts Owed To You</h1>
                <p>
                  Zakat is payable on the strong debts, i.e. money owed to you
                  that you are confident will be returned back to you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <h1 className="text-5xl font-black">9</h1>
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl"> Other Assets</h1>
                <p>
                  Any Other cash equivalent or liquid assets that are not
                  mentioned above, This could include (but not limited to) the
                  face value of your cryptocurrency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
