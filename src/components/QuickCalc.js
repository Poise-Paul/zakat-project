import React, { useState } from "react";
import whitelogo from "../assets/White-Al Fattah.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { updateUser } from "../redux/slices/registerSlice";
import LogoutModal from "./LogoutModal";

const QuickCalc = () => {
  const [assets, setAssets] = useState(Array(9).fill(0));
  const [liabilities, setLiabilities] = useState(Array(3).fill(0));

  const [showLogout, setShowLogout] = useState(false);

  const handleAssetChange = (index, value) => {
    const newAssets = [...assets];
    newAssets[index] = parseFloat(value) || 0;
    setAssets(newAssets);
  };

  const handleLiabilityChange = (index, value) => {
    const newLiabilities = [...liabilities];
    newLiabilities[index] = parseFloat(value) || 0;
    setLiabilities(newLiabilities);
  };

  const totalAssets = assets.reduce((a, b) => a + b, 0);
  const totalLiabilities = liabilities.reduce((a, b) => a + b, 0);
  const zakatable = totalAssets - totalLiabilities;

  // Nisab threshold (adjust based on gold/silver value)
  const nisab = 500000;
  const zakat = zakatable >= nisab ? zakatable * 0.025 : 0;

  // Get User Name & Image
  const user = useSelector((state) => state.register.user);

  // Logout User
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth token or user data
    localStorage.removeItem("authToken");
    dispatch(updateUser(null));
    // Redirect to login
    navigate("/");
  };
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-b from-green-400 to-green-700 h-28 grid grid-cols-3">
        <div className="flex px-5 items-center gap-4">
          <img src={whitelogo} alt="Al-Fattah" />
          <div className="text-white">
            <h1 className="uppercase text-2xl font-black">al-fattah</h1>
            <h1 className="uppercase font-semibold">Foundation</h1>
          </div>
        </div>
        <div className="flex gap-3 items-center capitalize">
          <h1 className="text-2xl font-bold text-white">
            Welcome back {user?.user?.firstName}
          </h1>
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Pic-Clip-Art-Background.png"
              alt="islamic-man"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-end p-5">
          {user?.user?.id && (
            <Link to="/profile">
              <div className="flex items-center gap-2">
                <FaUser color="white" />
                <span className="text-white font-semibold">Profile</span>
              </div>
            </Link>
          )}

          <div
            onClick={() => setShowLogout(true)}
            className="flex cursor-pointer items-center gap-2"
          >
            <div className="bg-white h-10 w-10 p-2 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-white font-semibold">Logout</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-20 py-10">
        <div className="border-2 border-green-500 p-5 shadow-md shadow-green-300 rounded-2xl">
          {/* Assets */}
          <div className="text-center text-green-700">
            <h1 className="font-bold text-5xl">Quick Calculation</h1>
            <h1 className="font-semibold text-2xl">(Assets)</h1>
          </div>
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
            <div className="flex justify-center">
              <div className="flex flex-col gap-4">
                {assets.map((val, i) => (
                  <div key={i} className="bg-gray-300 w-60 rounded-lg p-2">
                    <input
                      type="number"
                      placeholder="N0.00"
                      value={val}
                      onChange={(e) => handleAssetChange(i, e.target.value)}
                      className="bg-transparent w-full focus:outline-none text-right"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Liabilities */}
          <div className="text-center text-green-700 mt-7">
            <h1 className="font-bold text-5xl">Quick Calculation</h1>
            <h1 className="font-semibold text-2xl">(Liabilities)</h1>
          </div>
          <div className="grid grid-cols-2 p-5 gap-5">
            <div className="px-5 flex justify-center border-r-2 border-gray-300">
              <ul className="capitalize list-decimal text-xl flex flex-col gap-6">
                <li>Personal Liabilities</li>
                <li>Business Liabilities</li>
                <li>Other Liabilities</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-4">
                {liabilities.map((val, i) => (
                  <div key={i} className="bg-gray-300 w-60 rounded-lg p-2">
                    <input
                      type="number"
                      placeholder="N0.00"
                      value={val}
                      onChange={(e) => handleLiabilityChange(i, e.target.value)}
                      className="bg-transparent w-full focus:outline-none text-right"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Zakat Summary */}
          <div className="text-center text-green-700 mt-7">
            <h1 className="font-bold text-5xl">Zakat Summary</h1>
          </div>
          <div className="grid grid-cols-2 p-5 gap-5">
            <div className="px-5 flex justify-center border-r-2 border-gray-300">
              <ul className="capitalize list-decimal text-2xl font-bold flex flex-col gap-6">
                <li>Total Assets</li>
                <li>Total Liabilities</li>
                <li>Total Zakatable</li>
                <li>Zakat (Amount)</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-4">
                <div className="bg-gray-300 w-60 rounded-lg p-2 text-right font-bold">
                  ₦{totalAssets.toLocaleString()}
                </div>
                <div className="bg-gray-300 w-60 rounded-lg p-2 text-right font-bold">
                  ₦{totalLiabilities.toLocaleString()}
                </div>
                <div className="bg-gray-300 w-60 rounded-lg p-2 text-right font-bold">
                  ₦{zakatable.toLocaleString()}
                </div>
                <div className="bg-gray-300 w-60 rounded-lg p-2 text-right font-bold">
                  ₦{zakat.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout modal */}
      <LogoutModal
        isOpen={showLogout}
        onClose={() => setShowLogout(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default QuickCalc;
