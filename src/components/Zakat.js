import React from "react";
import islamicBg from "../assets/islamic-bg.jpeg";
import logo from "../assets/zakat-logo.png";

const Zakat = () => {
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
            <div className="border-r-2 border-gray-200 p-2 h-10 text-green-700 cursor-pointer transition duration-500 ease-in-out">
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
      {/* Header Ends here */}
      <div className="bg-green-300/75 h-full flex justify-center px-10 items-center gap-5 w-full">
        <div className="w-[60%] text-left flex flex-col gap-3">
          <h1 className="capitalize text-green-800 font-black text-6xl">
            What is Zakat?
          </h1>
          <p>
            Zakat (Arabic:); [za'ka:t], "that which purifies", also Zakat al-mal
            [za'ka:t al'ma:l] (Writing) "zakat on wealth ", or Zakah) is a form
            of almsgiving, often collected by the Muslim Ummah treated in Islam
            as religious obligation, which, by Quranic ranking, is next after
            prayer (salat) in importance.
          </p>
          <p>
            As one of the Five Pillars of Islam, zakat is a religious duty for
            all Muslims who meet the necessary criteria of wealth to help the
            needy.
          </p>
          <p>
            - It is a mandatory charitable contribution, often considered to be
            a tax.
          </p>
          <p>
            - Zakat in Wealth is based on the value of all of one's possessions.
          </p>
          <p>
            - It is a customarily 2.5% (or 1/40) of a Muslim's total savings and
            wealth above a minimum amount known as nisab
          </p>
          <h1 className="font-semibold">
            According to Islamic doctrine, the Zakat amount should be paid to:
          </h1>

          <div>
            <ul className="font-semibold list-disc">
              <li>The poor and the needy.</li>
              <li>Zakat Collectors</li>
              <li>Recent Converts to Islam,</li>
              <li>Those to be freed from slavery.</li>
              <li>Those in debt</li>
              <li>In the cause of Allah, and</li>
              <li>Benefit the stranded traveler.</li>
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

export default Zakat;
