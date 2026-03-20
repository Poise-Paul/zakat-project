// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import api from "../api";

// const AssetManager = () => {
//   const navigate = useNavigate();

//   const [assets, setAssets] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [purposes, setPurposes] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [btnLoader, setBtnLoader] = useState()

//   const [formData, setFormData] = useState({
//     description: "",
//     amount: 0,
//     currency: "NGN",
//     dateAcquired: new Date().toISOString().split("T")[0],
//     purpose: "Personal",
//     category: "Cash at Home/Bank",
//     zakatable: true,
//   });

//   // Calculate Totals
//   const totalValue = assets.reduce(
//     (acc, curr) => acc + parseFloat(curr.amount || 0),
//     0,
//   );
//   const totalZakatable = assets.reduce(
//     (acc, curr) => (curr.zakatable ? acc + parseFloat(curr.amount || 0) : acc),
//     0,
//   );

//   // Api Calls

//   // Fetch initial data (Assets, Categories, Purposes)
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       setLoading(true);
//       try {
//         const [assetsRes, catRes, purpRes] = await Promise.all([
//           api.get("/assets"),
//           api.get("/assets/enums/categories"),
//           api.get("/assets/enums/purposes"),
//         ]);

//         setAssets(assetsRes.data.data.assets || []);
//         setCategories(catRes.data.data.categories || []);
//         setPurposes(purpRes.data.data.purposes || []);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         alert("Failed to load data from server.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchInitialData();
//   }, []);

//   // Create or Update Asset
//   const handleSave = async () => {
//     if (!formData.description || !formData.amount) return;

//     const payload = {
//       ...formData,
//       amount: parseFloat(formData.amount),
//       zakatable: formData.zakatable === "Yes" || formData.zakatable === true,
//       // Ensure date is in ISO format as per your screenshot
//       dateAcquired: new Date(formData.dateAcquired).toISOString(),
//     };

//     try {
//       setBtnLoader(true)
//       if (editingId) {
//         // UPDATE Logic (Assuming endpoint exists based on your GET/DELETE pattern)
//         await api.patch(`/assets/${editingId}`, payload);
//       } else {
//         // CREATE Logic
//         await api.post(`/assets`, payload);
//       }

//       // Refresh list
//       const res = await api.get(`/assets`);
//       setAssets(res.data.data.assets);
//       closeModal();
//     } catch (err) {
//       console.error("Save error:", err);
//       alert("Error saving asset.");
//     }finally{
//        setBtnLoader(false);
//     }
//   };

//   // Delete Asset
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this asset?")) return;
//     try {
//       await api.delete(`/assets/${id}`);
//       setAssets(assets.filter((a) => a.id !== id));
//     } catch (err) {
//       alert("Error deleting asset.");
//     }
//   };

//   // --- UI LOGIC ---

//   const openEditModal = (asset) => {
//     setEditingId(asset.id);
//     setFormData({
//       description: asset.description,
//       amount: asset.amount,
//       currency: asset.currency,
//       dateAcquired: asset.dateAcquired.split("T")[0],
//       purpose: asset.purpose,
//       category: asset.category,
//       zakatable: asset.zakatable ? "Yes" : "No",
//     });
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingId(null);
//     setFormData({
//       description: "",
//       amount: 0,
//       currency: "NGN",
//       dateAcquired: new Date().toISOString().split("T")[0],
//       purpose: "Personal",
//       category: "Cash at Home/Bank",
//       zakatable: "Yes",
//     });
//   };

//   // End API Calls

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-600 to-green-800 h-24 flex justify-center items-center shadow-lg relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute left-10 flex items-center gap-2 text-white font-semibold group"
//         >
//           <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//           </div>
//           Back
//         </button>

//         <div className="flex gap-8 items-center">
//           <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
//             Enter Assets
//           </h1>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-6 py-2 bg-white text-green-700 font-bold rounded-full flex items-center gap-2 hover:bg-green-100 transition-all shadow-md"
//           >
//             Add Asset
//             <span className="bg-green-600 text-white rounded-full p-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={3}
//                   d="M12 4v16m8-8H4"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Main Table Container */}
//       <div className="flex flex-col items-center my-10 px-4">
//         {loading ? (
//           <p className="text-green-700 font-bold animate-pulse">
//             Loading Assets...
//           </p>
//         ) : (
//           <div className="w-full max-w-5xl bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
//             <div className="grid grid-cols-6 bg-gray-800 p-5 text-white font-bold uppercase text-xs tracking-widest">
//               <span>Description</span>
//               <span className="text-center">Currency</span>
//               <span className="text-center">Amount</span>
//               <span className="text-center">Category</span>
//               <span className="text-center">Zakatable</span>
//               <span className="text-right">Actions</span>
//             </div>

//             <div className="min-h-[300px]">
//               {assets.length === 0 ? (
//                 <div className="flex justify-center items-center h-[300px] text-gray-400 italic">
//                   No assets added yet.
//                 </div>
//               ) : (
//                 assets.map((asset) => (
//                   <div
//                     key={asset.id}
//                     className="grid grid-cols-6 p-5 border-b border-gray-100 hover:bg-green-50 transition-colors items-center text-sm"
//                   >
//                     <span className="font-medium text-gray-700">
//                       {asset.description}
//                     </span>
//                     <span className="text-center text-gray-500">
//                       {asset.currency}
//                     </span>
//                     <span className="text-center font-mono font-bold text-green-700">
//                       {asset.amount.toLocaleString()}
//                     </span>
//                     <span className="text-center text-gray-600 text-xs">
//                       {asset.category}
//                     </span>
//                     <span
//                       className={`text-center font-bold ${asset.zakatable ? "text-green-600" : "text-red-400"}`}
//                     >
//                       {asset.zakatable ? "Yes" : "No"}
//                     </span>
//                     <div className="flex justify-end gap-2">
//                       <button
//                         onClick={() => openEditModal(asset)}
//                         className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(asset.id)}
//                         className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Footer Totals */}
//             <div className="bg-gray-50 p-8 border-t-2 border-gray-100">
//               <div className="flex flex-col gap-4 max-w-md ml-auto">
//                 <div className="flex justify-between items-center text-gray-800">
//                   <span className="font-bold">Total Asset Value:</span>
//                   <span className="text-2xl font-black">
//                     NGN {totalValue.toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center border-t border-gray-200 pt-4 text-green-700">
//                   <span className="font-bold">Total Zakatable Value:</span>
//                   <span className="text-2xl font-black">
//                     NGN {totalZakatable.toLocaleString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       <div
//         className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//       >
//         <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl">
//           <h2 className="text-3xl font-black text-orange-400 mb-6">
//             {editingId ? "Update Asset" : "Add Asset"}
//           </h2>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700">Description:</label>
//               <input
//                 type="text"
//                 className="border-2 p-3 rounded-xl outline-none focus:border-green-500"
//                 placeholder="Enter Description"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700">Amount:</label>
//               <input
//                 type="number"
//                 className="border-2 p-3 rounded-xl outline-none focus:border-green-500"
//                 value={formData.amount}
//                 onChange={(e) =>
//                   setFormData({ ...formData, amount: e.target.value })
//                 }
//               />
//             </div>
//             {/* Currency - Selection field */}
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700">Currency:</label>
//               <select
//                 className="border-2 border-gray-200 p-3 rounded-xl focus:border-green-500 outline-none bg-white cursor-pointer font-bold"
//                 value={formData.currency} // Binds the UI to the current state
//                 onChange={
//                   (e) => setFormData({ ...formData, currency: e.target.value }) // Updates state on change
//                 }
//               >
//                 <option value="NGN">NGN - Nigerian Naira</option>
//                 <option value="USD">USD - US Dollar</option>
//                 <option value="GBP">GBP - British Pound</option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700">Category:</label>
//               <select
//                 className="border-2 p-3 rounded-xl outline-none bg-white"
//                 value={formData.category}
//                 onChange={(e) =>
//                   setFormData({ ...formData, category: e.target.value })
//                 }
//               >
//                 {categories.map((c) => (
//                   <option key={c} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700">Purpose:</label>
//               <select
//                 className="border-2 p-3 rounded-xl outline-none bg-white"
//                 value={formData.purpose}
//                 onChange={(e) =>
//                   setFormData({ ...formData, purpose: e.target.value })
//                 }
//               >
//                 {purposes.map((p) => (
//                   <option key={p} value={p}>
//                     {p}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700">Date Acquired:</label>
//               <input
//                 type="date"
//                 className="border-2 p-3 rounded-xl outline-none"
//                 value={formData.dateAcquired}
//                 onChange={(e) =>
//                   setFormData({ ...formData, dateAcquired: e.target.value })
//                 }
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700">Zakatable:</label>
//               <select
//                 className="border-2 p-3 rounded-xl outline-none bg-white"
//                 value={formData.zakatable}
//                 onChange={(e) =>
//                   setFormData({ ...formData, zakatable: e.target.value })
//                 }
//               >
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex justify-end gap-4 mt-10">
//             <button
//               className="px-8 py-3 bg-gray-200 rounded-xl font-bold"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSave}
//               disabled={btnLoader}
//               className={`px-8 py-3 bg-cyan-400 text-white ${btnLoader && "opacity-30 cursor-not-allowed"} rounded-xl font-bold shadow-lg hover:bg-cyan-500 transition-all`}
//             >
//               {btnLoader
//                 ? "Loading..."
//                 : `${editingId ? "Update" : "Save"} Asset`}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssetManager;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../api";

const AssetManager = () => {
  const navigate = useNavigate();

  const [assets, setAssets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [purposes, setPurposes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);

  // 🔑 Added state to hold live exchange rates
  const [exchangeRates, setExchangeRates] = useState(null);

  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    currency: "NGN",
    dateAcquired: new Date().toISOString().split("T")[0],
    purpose: "Personal",
    category: "Cash at Home/Bank",
    zakatable: true,
  });

  // 🔑 Helper to convert any currency to NGN dynamically
  const convertToNGN = (amount, currency) => {
    const numAmount = parseFloat(amount || 0);

    // If it's already NGN or we don't have rates yet, return raw amount
    if (currency === "NGN" || !exchangeRates || !exchangeRates[currency]) {
      return numAmount;
    }

    // Because NGN is the base, we DIVIDE the amount by the foreign rate
    return numAmount / exchangeRates[currency];
  };

  // 🔑 Calculate Totals using the converter
  const totalValue = assets.reduce(
    (acc, curr) => acc + convertToNGN(curr.amount, curr.currency),
    0,
  );

  const totalZakatable = assets.reduce(
    (acc, curr) =>
      curr.zakatable ? acc + convertToNGN(curr.amount, curr.currency) : acc,
    0,
  );

  // Api Calls

  // Fetch initial data (Assets, Categories, Purposes, Rates)
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [assetsRes, catRes, purpRes, ratesRes] = await Promise.all([
          api.get("/assets"),
          api.get("/assets/enums/categories"),
          api.get("/assets/enums/purposes"),
          // 🔑 Fetch the exchange rates in parallel
          fetch(
            "https://v6.exchangerate-api.com/v6/fbc148c054dd56824e3d1c14/latest/NGN",
          ).then((res) => res.json()),
        ]);

        setAssets(assetsRes.data.data.assets || []);
        setCategories(catRes.data.data.categories || []);
        setPurposes(purpRes.data.data.purposes || []);

        // 🔑 Save the conversion rates object to state
        if (ratesRes && ratesRes.result === "success") {
          setExchangeRates(ratesRes.conversion_rates);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        alert("Failed to load data from server.");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  // Create or Update Asset
  const handleSave = async () => {
    if (!formData.description || !formData.amount) return;

    const payload = {
      ...formData,
      amount: parseFloat(formData.amount),
      zakatable: formData.zakatable === "Yes" || formData.zakatable === true,
      // Ensure date is in ISO format as per your screenshot
      dateAcquired: new Date(formData.dateAcquired).toISOString(),
    };

    try {
      setBtnLoader(true);
      if (editingId) {
        // UPDATE Logic (Assuming endpoint exists based on your GET/DELETE pattern)
        await api.patch(`/assets/${editingId}`, payload);
      } else {
        // CREATE Logic
        await api.post(`/assets`, payload);
      }

      // Refresh list
      const res = await api.get(`/assets`);
      setAssets(res.data.data.assets);
      closeModal();
    } catch (err) {
      console.error("Save error:", err);
      alert("Error saving asset.");
    } finally {
      setBtnLoader(false);
    }
  };

  // Delete Asset
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this asset?")) return;
    try {
      await api.delete(`/assets/${id}`);
      setAssets(assets.filter((a) => a.id !== id));
    } catch (err) {
      alert("Error deleting asset.");
    }
  };

  // --- UI LOGIC ---

  const openEditModal = (asset) => {
    setEditingId(asset.id);
    setFormData({
      description: asset.description,
      amount: asset.amount,
      currency: asset.currency,
      dateAcquired: asset.dateAcquired.split("T")[0],
      purpose: asset.purpose,
      category: asset.category,
      zakatable: asset.zakatable ? "Yes" : "No",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      description: "",
      amount: 0,
      currency: "NGN",
      dateAcquired: new Date().toISOString().split("T")[0],
      purpose: "Personal",
      category: "Cash at Home/Bank",
      zakatable: "Yes",
    });
  };

  // End API Calls

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 h-24 flex justify-center items-center shadow-lg relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-10 flex items-center gap-2 text-white font-semibold group"
        >
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
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
        {loading ? (
          <p className="text-green-700 font-bold animate-pulse">
            Loading Assets...
          </p>
        ) : (
          <div className="w-full max-w-5xl bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
            <div className="grid grid-cols-6 bg-gray-800 p-5 text-white font-bold uppercase text-xs tracking-widest">
              <span>Description</span>
              <span className="text-center">Currency</span>
              <span className="text-center">Amount</span>
              <span className="text-center">Category</span>
              <span className="text-center">Zakatable</span>
              <span className="text-right">Actions</span>
            </div>

            <div className="min-h-[300px]">
              {assets.length === 0 ? (
                <div className="flex justify-center items-center h-[300px] text-gray-400 italic">
                  No assets added yet.
                </div>
              ) : (
                assets.map((asset) => (
                  <div
                    key={asset.id}
                    className="grid grid-cols-6 p-5 border-b border-gray-100 hover:bg-green-50 transition-colors items-center text-sm"
                  >
                    <span className="font-medium text-gray-700">
                      {asset.description}
                    </span>
                    <span className="text-center text-gray-500">
                      {asset.currency}
                    </span>

                    {/* 🔑 Updated Amount Column to show NGN equivalent underneath */}
                    <div className="flex flex-col items-center justify-center">
                      <span className="font-mono font-bold text-green-700">
                        {asset.amount.toLocaleString()}
                      </span>
                      {asset.currency !== "NGN" && exchangeRates && (
                        <span className="text-[10px] text-gray-400 mt-0.5">
                          (~NGN{" "}
                          {Math.round(
                            convertToNGN(asset.amount, asset.currency),
                          ).toLocaleString()}
                          )
                        </span>
                      )}
                    </div>

                    <span className="text-center text-gray-600 text-xs">
                      {asset.category}
                    </span>
                    <span
                      className={`text-center font-bold ${asset.zakatable ? "text-green-600" : "text-red-400"}`}
                    >
                      {asset.zakatable ? "Yes" : "No"}
                    </span>
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => openEditModal(asset)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(asset.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Totals */}
            <div className="bg-gray-50 p-8 border-t-2 border-gray-100">
              <div className="flex flex-col gap-4 max-w-md ml-auto">
                <div className="flex justify-between items-center text-gray-800">
                  <span className="font-bold">Total Asset Value:</span>
                  <span className="text-2xl font-black">
                    NGN {Math.round(totalValue).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-200 pt-4 text-green-700">
                  <span className="font-bold">Total Zakatable Value:</span>
                  <span className="text-2xl font-black">
                    NGN {Math.round(totalZakatable).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl">
          <h2 className="text-3xl font-black text-orange-400 mb-6">
            {editingId ? "Update Asset" : "Add Asset"}
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Description:</label>
              <input
                type="text"
                className="border-2 p-3 rounded-xl outline-none focus:border-green-500"
                placeholder="Enter Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Amount:</label>
              <input
                type="number"
                className="border-2 p-3 rounded-xl outline-none focus:border-green-500"
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
                className="border-2 border-gray-200 p-3 rounded-xl focus:border-green-500 outline-none bg-white cursor-pointer font-bold"
                value={formData.currency} // Binds the UI to the current state
                onChange={
                  (e) => setFormData({ ...formData, currency: e.target.value }) // Updates state on change
                }
              >
                <option value="NGN">NGN - Nigerian Naira</option>
                <option value="USD">USD - US Dollar</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Category:</label>
              <select
                className="border-2 p-3 rounded-xl outline-none bg-white"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Purpose:</label>
              <select
                className="border-2 p-3 rounded-xl outline-none bg-white"
                value={formData.purpose}
                onChange={(e) =>
                  setFormData({ ...formData, purpose: e.target.value })
                }
              >
                {purposes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Date Acquired:</label>
              <input
                type="date"
                className="border-2 p-3 rounded-xl outline-none"
                value={formData.dateAcquired}
                onChange={(e) =>
                  setFormData({ ...formData, dateAcquired: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700">Zakatable:</label>
              <select
                className="border-2 p-3 rounded-xl outline-none bg-white"
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
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={btnLoader}
              className={`px-8 py-3 bg-cyan-400 text-white ${btnLoader && "opacity-30 cursor-not-allowed"} rounded-xl font-bold shadow-lg hover:bg-cyan-500 transition-all`}
            >
              {btnLoader
                ? "Loading..."
                : `${editingId ? "Update" : "Save"} Asset`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManager;
