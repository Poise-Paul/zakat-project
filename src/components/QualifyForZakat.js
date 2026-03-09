import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const ZakatQualification = () => {
  const [answers, setAnswers] = useState({
    isMuslim: "",
    isAdult: "",
    isSane: "",
    isOverNisab: "",
  });
  const [isQualified, setIsQualified] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  // Logic: All answers must be "Yes" or "Y" to qualify
  useEffect(() => {
    const checkQualification = Object.values(answers).every(
      (val) => val.toLowerCase() === "yes" || val.toLowerCase() === "y",
    );
    setIsQualified(checkQualification);
  }, [answers]);

  const handleInputChange = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-10 font-sans">
      {/* Back to Calculations */}
      <div className="w-full flex items-center p-10">
        <button
          onClick={() => navigate("/calculation")}
          className="flex items-center gap-2 text-gray-600 hover:text-cyan-500 transition-colors font-bold group"
        >
          <div className="p-2 bg-gray-100 rounded-full group-hover:bg-cyan-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          Back to Calculations
        </button>
      </div>
      {/* End Back to Calculations */}
      <div className="w-full max-w-4xl">
        {/* Title from your screenshot */}

        <h1 className="text-orange-400 font-black text-8xl mb-12 tracking-tighter">
          Qualification
        </h1>

        <div className="flex flex-col gap-8">
          {/* Input Rows */}
          {[
            { label: "I am a Muslim", key: "isMuslim" },
            { label: "I am 18 years or older", key: "isAdult" },
            { label: "I am of sane mind", key: "isSane" },
            { label: "My qualifying assets is over Nisab", key: "isOverNisab" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center group"
            >
              <span className="text-2xl font-bold text-gray-800">
                {item.label}
              </span>
              <input
                type="text"
                maxLength="3"
                placeholder="Y/N"
                className="w-16 h-16 bg-gray-300 border-none rounded-sm text-center text-2xl font-bold uppercase focus:ring-4 ring-cyan-400 outline-none transition-all"
                value={answers[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-12">
          <button
            onClick={() => setShowStatus(true)}
            className="bg-cyan-400 text-white px-10 py-3 rounded-full font-bold text-xl shadow-lg hover:bg-cyan-500 transition-all transform hover:scale-105"
          >
            Confirm
          </button>
        </div>

        {/* Dynamic Status Bar */}
        {showStatus && (
          <div
            className={`mt-16 w-full py-10 text-center transition-all duration-500 animate-bounce-short ${
              isQualified ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <h2 className="text-white text-7xl font-black uppercase italic">
              {isQualified ? "Qualified" : "Not Qualified"}
            </h2>
          </div>
        )}

        {/* Others  */}
      </div>

      <div className="w-full max-w-4xl mt-20 mb-20 border-t-2 border-gray-100 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Explanation */}
          <div className="flex flex-col gap-6 text-gray-700">
            <h2 className="text-3xl font-black italic text-gray-800">
              What is Nisab?
            </h2>

            <p className="leading-relaxed">
              Nisab is the minimum amount that a Muslim must have before being
              obliged to pay <span className="font-bold">zakat</span>.
            </p>

            <p className="leading-relaxed text-sm">
              The Nisab was set by Prophet Muhammad (peace be upon him) at a
              rate equivalent to:
              <span className="font-bold"> 87.48 grams of gold</span> and{" "}
              <span className="font-bold">612.36 grams of silver</span>.
            </p>

            <p className="leading-relaxed text-sm">
              As we no longer use silver or gold as currency, you need to find
              out the equivalent monetary exchange value in your local currency
              by checking the market rate.
            </p>

            <div className="bg-green-50 p-4 border-l-4 border-green-500 rounded-r-xl">
              <p className="text-sm text-green-800 font-medium">
                <span className="font-bold">Al-Fattah Foundation advice:</span>{" "}
                Donors should use the lower value (silver or gold) because this
                allows for a greater amount to be eligible for Zakat, helping
                more recipients.
              </p>
            </div>
          </div>

          {/* Right Column: Values as at March 2026 */}
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col gap-8 shadow-inner">
            <div>
              <h3 className="text-xl font-black text-gray-800 mb-4 border-b pb-2">
                The Nisab values as at 1 March 2026
              </h3>
              <ul className="flex flex-col gap-3 font-bold text-lg">
                <li className="flex justify-between">
                  <span className="text-gray-500">
                    1. Using value of silver:
                  </span>
                  <span className="text-green-700">N2,738,480.00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">2. Using value of gold:</span>
                  <span className="text-green-700">N22,022,000.00</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-black text-gray-800 mb-4 italic">
                Silver / gold values (per gram)
              </h3>
              <ul className="flex flex-col gap-3 font-semibold text-gray-600">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Silver:</span>
                  <span>N4,480.00</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Gold:</span>
                  <span>N251,740.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZakatQualification;
