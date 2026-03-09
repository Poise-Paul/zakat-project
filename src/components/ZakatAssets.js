import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router";

const AssetManager = () => {
  const [assets, setAssets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    currency: "NGN",
    dateAcquired: "",
    purpose: "Personal",
    category: "Cash",
    zakatable: "Yes",
  });

  // Calculate Totals
  const totalValue = assets.reduce(
    (acc, curr) => acc + parseFloat(curr.amount || 0),
    0,
  );
  const totalZakatable = assets.reduce(
    (acc, curr) =>
      curr.zakatable === "Yes" ? acc + parseFloat(curr.amount || 0) : acc,
    0,
  );

  const handleSave = () => {
    if (!formData.description || !formData.amount) return;
    setAssets([...assets, { ...formData, id: Date.now() }]);
    // Reset form
    setFormData({
      description: "",
      amount: "",
      currency: "NGN",
      dateAcquired: "",
      purpose: "Personal",
      category: "Cash",
      zakatable: "Yes",
    });
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-800 h-24 flex justify-center items-center shadow-lg relative">
        {/* The Back Button - Positioned Absolute to stay on the left */}
        <button
          onClick={() => navigate(-1)} // Goes back to the previous page in history
          className="absolute left-10 flex items-center gap-2 text-white hover:text-green-200 transition-colors font-semibold group"
        >
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          Back
        </button>

        {/* Existing Header Content */}
        <div className="flex gap-8 items-center">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
            Enter Assets
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-white text-green-700 font-bold rounded-full flex items-center gap-2 hover:bg-green-100 transition-all shadow-md"
          >
            Add Asset
            <span className="bg-green-600 text-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="flex flex-col items-center my-10 px-4">
        <div className="w-full max-w-5xl bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 bg-gray-800 p-5 text-white font-bold uppercase text-sm tracking-widest">
            <span>Description</span>
            <span className="text-center">Currency</span>
            <span className="text-center">Amount</span>
            <span className="text-center">Category</span>
            <span className="text-center">Zakatable</span>
          </div>

          {/* Table Body */}
          <div className="min-h-[300px]">
            {assets.length === 0 ? (
              <div className="flex justify-center items-center h-[300px] text-gray-400 italic">
                No assets added yet. Click "Add Asset" to begin.
              </div>
            ) : (
              assets.map((asset) => (
                <div
                  key={asset.id}
                  className="grid grid-cols-5 p-5 border-b border-gray-100 hover:bg-green-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">
                    {asset.description}
                  </span>
                  <span className="text-center text-gray-500">
                    {asset.currency}
                  </span>
                  <span className="text-center font-mono font-bold text-green-700">
                    {parseFloat(asset.amount).toLocaleString()}
                  </span>
                  <span className="text-center text-gray-600">
                    {asset.category}
                  </span>
                  <span
                    className={`text-center font-bold ${asset.zakatable === "Yes" ? "text-green-600" : "text-red-400"}`}
                  >
                    {asset.zakatable}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Footer Totals */}
          <div className="bg-gray-50 p-8 border-t-2 border-gray-100">
            <div className="flex flex-col gap-4 max-w-md ml-auto">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-bold">
                  Total Asset Value:
                </span>
                <span className="text-2xl font-black text-gray-800">
                  NGN {totalValue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="text-green-700 font-bold">
                  Total Zakatable Value:
                </span>
                <span className="text-2xl font-black text-green-700">
                  NGN {totalZakatable.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zakatable Items */}
      <div className="w-full mx-auto max-w-5xl mt-10 mb-20 bg-white border border-gray-200 shadow-lg rounded-3xl overflow-hidden p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-100 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-800">
            How to determine if an asset is Zakatable or Not.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Point 1 & 2 */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 font-bold rounded-full">
                1
              </span>
              <p className="text-gray-600 leading-relaxed">
                The wealth must be held for a full{" "}
                <span className="font-bold text-gray-800">
                  lunar year (354 days)
                </span>
                , thus you need to calculate if the acquisition date is more
                than 1 full lunar year at the date of calculation.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 font-bold rounded-full">
                2
              </span>
              <p className="text-gray-600 leading-relaxed">
                For{" "}
                <span className="font-bold text-gray-800">
                  agricultural produce
                </span>
                , are due upon harvest, we assume that acquisition date is the
                harvest date.
              </p>
            </div>
          </div>

          {/* Point 3 & 4 */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 font-bold rounded-full">
                3
              </span>
              <p className="text-gray-600 leading-relaxed">
                Most items owned for your{" "}
                <span className="font-bold text-gray-800">personal use</span>{" "}
                are exempt from Zakat. This includes your home, furniture and
                clothing.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 font-bold rounded-full">
                4
              </span>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold text-gray-800">
                  Cars and vehicles
                </span>{" "}
                owned for personal use are generally exempt from Zakat, unless
                they were purchased with the intention to sell for profit or
                rental income.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End Zakatable Items */}

      {/* Modal - Aligned with your provided Screenshot layout */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black/50"
        id="exampleModal"
        tabIndex={-1}
      >
        <div className="modal-dialog relative w-auto max-w-2xl pointer-events-none mx-auto mt-20">
          <div className="modal-content border-none shadow-2xl relative flex flex-col w-full pointer-events-auto bg-white rounded-3xl outline-none p-8">
            <h2 className="text-3xl font-black text-orange-400 mb-6">
              Enter Assets
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Description:</label>
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 rounded-lg focus:border-green-500 outline-none"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Amount:</label>
                <input
                  type="number"
                  className="border-2 border-gray-300 p-2 rounded-lg focus:border-green-500 outline-none"
                  value={formData.amount}
                  placeholder="0.00"
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Currency:</label>
                <select
                  className="border-2 border-gray-300 p-2 rounded-lg outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Date Acquired:</label>
                <input
                  type="date"
                  className="border-2 border-gray-300 p-2 rounded-lg outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, dateAcquired: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Category:</label>
                <select
                  className="border-2 border-gray-300 p-2 rounded-lg outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="Building">Building</option>
                  <option value="Cash">Cash</option>
                  <option value="Agric. Produce">Agric. Produce</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Zakatable:</label>
                <select
                  className="border-2 border-gray-300 p-2 rounded-lg outline-none"
                  value={formData.zakatable}
                  onChange={(e) =>
                    setFormData({ ...formData, zakatable: e.target.value })
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-10">
              <button
                className="px-8 py-3 bg-gray-200 rounded-xl font-bold"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-8 py-3 bg-cyan-400 text-white rounded-xl font-bold shadow-lg hover:bg-cyan-500"
                data-bs-dismiss="modal"
              >
                Save Asset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Asset Modal */}
      {/* Modal Wrapper */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* The Modal Content */}
        <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl transform transition-transform scale-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-black text-orange-400">
              Enter Assets
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-black text-2xl"
            >
              ×
            </button>
          </div>

          {/* Form Inputs (Same as before) */}
          <div className="grid grid-cols-2 gap-6">
            {/* Description - Enterable field */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Description:</label>
              <input
                type="text"
                className="border-2 border-gray-300 p-3 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="e.g. Cash at Hand (Access Bank)"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Amount - Entrable field */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Amount:</label>
              <input
                type="number"
                className="border-2 border-gray-300 p-3 rounded-xl focus:border-green-500 outline-none transition-all"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </div>

            {/* Currency - Selection field */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Currency:</label>
              <select
                className="border-2 border-gray-200 p-3 rounded-xl focus:border-green-500 outline-none bg-white cursor-pointer"
                value={formData.currency}
                onChange={(e) =>
                  setFormData({ ...formData, currency: e.target.value })
                }
              >
                <option value="NGN">NGN - Nigerian Naira</option>
                <option value="USD">USD - US Dollar</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>

            {/* Date Acquired - Entrable field */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Date Acquired:</label>
              <input
                type="date"
                className="border-2 border-gray-300 p-3 rounded-xl focus:border-green-500 outline-none transition-all"
                value={formData.dateAcquired}
                onChange={(e) =>
                  setFormData({ ...formData, dateAcquired: e.target.value })
                }
              />
            </div>

            {/* Purpose - Selection field (Business or Personal) */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Purpose:</label>
              <select
                className="border-2 border-gray-200 p-3 rounded-xl focus:border-green-500 outline-none bg-white cursor-pointer"
                value={formData.purpose}
                onChange={(e) =>
                  setFormData({ ...formData, purpose: e.target.value })
                }
              >
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Category - Selection field */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Category:</label>
              <select
                className="border-2 border-gray-200 p-3 rounded-xl focus:border-green-500 outline-none bg-white cursor-pointer"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="Cash">Cash</option>
                <option value="Building">Building / Real Estate</option>
                <option value="Agric. Produce">Agric. Produce</option>
                <option value="Other Assets">Other Assets</option>
                <option value="Retirement">Retirement Plan</option>
                <option value="Debts Owed Me">Debts Owed Me</option>
              </select>
            </div>

            {/* Zakatable - Derived field (Manual toggle for now) */}
            <div className="flex flex-col gap-2 col-span-2">
              <label className="font-bold text-gray-700">Zakatable:</label>
              <select
                className="border-2 border-gray-200 p-3 rounded-xl focus:border-green-500 outline-none bg-white cursor-pointer"
                value={formData.zakatable}
                onChange={(e) =>
                  setFormData({ ...formData, zakatable: e.target.value })
                }
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <small className="text-gray-400 italic">
                *Typically assets held for a full lunar year (354 days) are
                zakatable.
              </small>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            <button
              className="px-8 py-3 bg-gray-200 rounded-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleSave(); // Saves the data
                setIsModalOpen(false); // Closes the modal
              }}
              className="px-8 py-3 bg-cyan-400 text-white rounded-xl font-bold shadow-lg hover:bg-cyan-500"
            >
              Save Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManager;
