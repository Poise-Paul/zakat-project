import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const LiabilityManager = () => {
  const navigate = useNavigate();
  const [liabilities, setLiabilities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    currency: "NGN",
    dateToBePaid: new Date().toISOString().split("T")[0],
    liabilityClass: "Personal",
  });

  // Dynamic Totals Calculation
  const totalLiability = liabilities.reduce(
    (acc, curr) => acc + parseFloat(curr.amount || 0),
    0,
  );

  const getCategoryTotal = (category) =>
    liabilities
      .filter((l) => l.liabilityClass === category)
      .reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);

  // const handleSave = () => {
  //   if (!formData.description || !formData.amount) return;
  //   setLiabilities([...liabilities, { ...formData, id: Date.now() }]);
  //   setFormData({
  //     description: "",
  //     amount: "",
  //     currency: "NGN",
  //     dateToBePaid: "",
  //     liabilityClass: "Personal",
  //   });
  //   setIsModalOpen(false);
  // };

  // --- API CALLS ---

  // 1. Get All Liabilities
  const fetchLiabilities = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        "/liabilities?includeDeleted=false&page=0&limit=20",
      );
      setLiabilities(response.data.data.liabilities || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiabilities();
  }, []);

  // 2. Create or Update (PATCH) Liability
  const handleSave = async () => {
    if (!formData.description || !formData.amount) return;

    const payload = {
      description: formData.description,
      amount: parseFloat(formData.amount),
      currency: formData.currency,
      dateToBePaid: new Date(formData.dateToBePaid).toISOString(),
      // Note: If your backend uses 'liabilityClass', keep it,
      // but ensure it matches the schema in your Swagger docs.
    };

    try {
      setBtnLoader(true);
      if (editingId) {
        // PATCH as per your Screenshot 2026-03-12 at 21.44.48.png
        await api.patch(`/liabilities/${editingId}`, payload);
      } else {
        // POST as per your Screenshot 2026-03-12 at 21.44.23.png
        await api.post("/liabilities", payload);
      }
      fetchLiabilities();
      closeModal();
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed to save liability.");
    } finally {
      setBtnLoader(false);
    }
  };

  // 3. Delete Liability
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this liability?"))
      return;
    try {
      await api.delete(`/liabilities/${id}`);
      setLiabilities(liabilities.filter((l) => l.id !== id));
    } catch (err) {
      alert("Delete failed.");
    }
  };

  // --- UI LOGIC ---

  const openEditModal = (liability) => {
    setEditingId(liability.id);
    setFormData({
      description: liability.description,
      amount: liability.amount,
      currency: liability.currency,
      dateToBePaid: liability.dateToBePaid.split("T")[0],
      liabilityClass: liability.liabilityClass || "Personal",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      description: "",
      amount: "",
      currency: "NGN",
      dateToBePaid: new Date().toISOString().split("T")[0],
      liabilityClass: "Personal",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 h-24 flex justify-center items-center shadow-lg relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-10 flex items-center gap-2 text-white font-semibold group"
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
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          Enter Liabilities
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-8 px-6 py-2 bg-white text-green-700 font-bold rounded-full flex items-center gap-2 hover:bg-green-100 transition-all shadow-md"
        >
          Add Liability
          <span className="bg-green-600 text-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M12 4v16m8-8H4"
              />
            </svg>{" "}
          </span>
        </button>
      </div>

      {/* Table Section */}
      <div className="flex flex-col items-center my-10 px-4">
        <div className="w-full max-w-5xl bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 bg-gray-800 p-5 text-white font-bold uppercase text-xs tracking-widest">
            <span>Description</span>
            <span className="text-center">Currency</span>
            <span className="text-center">Amount</span>
            <span className="text-center">Payment Date</span>
            <span className="text-right">Actions</span>
          </div>

          <div className="min-h-[250px]">
            {loading ? (
              <div className="p-20 text-center">Loading...</div>
            ) : (
              liabilities.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-5 p-5 border-b border-gray-100 hover:bg-red-50 transition-colors items-center text-sm"
                >
                  <span className="font-medium text-gray-700">
                    {item.description}
                  </span>
                  <span className="text-center text-gray-500 font-bold">
                    {item.currency}
                  </span>
                  <span className="text-center font-mono font-bold text-red-600">
                    {parseFloat(item.amount).toLocaleString()}
                  </span>
                  <span className="text-center text-gray-600">
                    {item.dateToBePaid
                      ? new Date(item.dateToBePaid).toLocaleDateString()
                      : "N/A"}
                  </span>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => openEditModal(item)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Totals Summary */}
          <div className="bg-gray-50 p-8 border-t-2 border-gray-100 flex justify-end">
            <div className="text-right">
              <h2 className="text-gray-400 uppercase text-xs font-black tracking-widest">
                Total Liability
              </h2>
              <span className="text-4xl font-black text-gray-800">
                NGN {totalLiability.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="bg-white rounded-3xl p-8 w-full max-w-xl shadow-2xl">
          <h2 className="text-3xl font-black text-orange-400 mb-6 uppercase">
            {editingId ? "Update" : "Add"} Liability
          </h2>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-bold text-gray-600 text-sm">
                Description
              </label>
              <input
                type="text"
                className="bg-gray-100 p-3 rounded-xl outline-none"
                value={formData.description}
                placeholder="Enter Description"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-bold text-gray-600 text-sm">
                  Amount
                </label>
                <input
                  type="number"
                  className="bg-gray-100 p-3 rounded-xl outline-none"
                  value={formData.amount}
                  placeholder="Enter Amount"
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold text-gray-600 text-sm">
                  Currency
                </label>
                <select
                  className="bg-gray-100 p-3 rounded-xl outline-none"
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-bold text-gray-600 text-sm">
                Payment Date
              </label>
              <input
                type="date"
                className="bg-gray-100 p-3 rounded-xl outline-none"
                value={formData.dateToBePaid}
                onChange={(e) =>
                  setFormData({ ...formData, dateToBePaid: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            <button
              className="px-6 py-2 font-bold text-gray-400"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={btnLoader}
              className={`px-10 py-3 bg-cyan-400 ${btnLoader && "opacity-30"} text-white font-black rounded-xl shadow-lg hover:bg-cyan-500 transition-all`}
            >
              {btnLoader ? "Loading..." : `${editingId ? "UPDATE" : "SAVE"}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiabilityManager;

// <div className="flex flex-col min-h-screen bg-gray-50">
//   {/* Header with Back Button */}
//   <div className="bg-gradient-to-r from-green-600 to-green-800 md:h-24 h-40 flex md:flex-row flex-col justify-center items-center shadow-lg relative">
//     <button
//       onClick={() => navigate(-1)}
//       className="md:absolute left-10 md:pb-0 pb-5 flex items-center gap-2 text-white hover:text-green-200 transition-colors font-semibold group"
//     >
//       <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M10 19l-7-7m0 0l7-7m-7 7h18"
//           />
//         </svg>
//       </div>
//       Back
//     </button>

//     <div className="flex gap-8 items-center">
//       <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
//         Enter Liabilities
//       </h1>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="px-6 py-2 bg-white text-green-700 font-bold rounded-full flex items-center gap-2 hover:bg-green-100 transition-all shadow-md"
//       >
//         Add Liability
//         <span className="bg-green-600 text-white rounded-full p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={3}
//               d="M12 4v16m8-8H4"
//             />
//           </svg>
//         </span>
//       </button>
//     </div>
//   </div>

//   {/* Main Table */}
//   <div className="flex flex-col items-center my-10 px-4">
//     <div className="w-full max-w-5xl bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
//       <div className="grid grid-cols-4 bg-gray-800 p-5 text-white font-bold uppercase text-sm tracking-widest">
//         <span>Description</span>
//         <span className="text-center">Currency</span>
//         <span className="text-center">Amount</span>
//         <span className="text-center">Payment Date</span>
//       </div>

//       <div className="min-h-[250px]">
//         {liabilities.length === 0 ? (
//           <div className="flex justify-center items-center h-[250px] text-gray-400 italic">
//             No liabilities recorded. Deducting debts helps lower your Zakat
//             total.
//           </div>
//         ) : (
//           liabilities.map((item) => (
//             <div
//               key={item.id}
//               className="grid grid-cols-4 p-5 border-b border-gray-100 hover:bg-red-50 transition-colors"
//             >
//               <span className="font-medium text-gray-700">
//                 {item.description}
//               </span>
//               <span className="text-center text-gray-500">
//                 {item.currency}
//               </span>
//               <span className="text-center font-mono font-bold text-red-600">
//                 {parseFloat(item.amount).toLocaleString()}
//               </span>
//               <span className="text-center text-gray-600">
//                 {item.dateToBePaid || "N/A"}
//               </span>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Totals Summary Section */}
//       <div className="bg-gray-50 p-8 border-t-2 border-gray-100 grid grid-cols-2 gap-10">
//         <div className="flex flex-col gap-3">
//           <div className="flex justify-between border-b pb-2">
//             <span className="text-gray-500 font-semibold">
//               Business Debts:
//             </span>
//             <span className="font-bold">
//               NGN {getCategoryTotal("Business").toLocaleString()}
//             </span>
//           </div>
//           <div className="flex justify-between border-b pb-2">
//             <span className="text-gray-500 font-semibold">
//               Personal Debts:
//             </span>
//             <span className="font-bold">
//               NGN {getCategoryTotal("Personal").toLocaleString()}
//             </span>
//           </div>
//           <div className="flex justify-between border-b pb-2">
//             <span className="text-gray-500 font-semibold">Others:</span>
//             <span className="font-bold">
//               NGN {getCategoryTotal("Others").toLocaleString()}
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-end">
//           <h2 className="text-gray-400 uppercase text-xs font-black tracking-widest">
//             Total Liability
//           </h2>
//           <span className="text-4xl font-black text-gray-800">
//             NGN {totalLiability.toLocaleString()}
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Manual Modal Overlay */}
//   <div
//     className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//   >
//     <div className="bg-white rounded-3xl p-8 w-full max-w-xl shadow-2xl transform transition-all">
//       <h2 className="text-3xl font-black text-orange-400 mb-6 uppercase">
//         Enter Liabilities
//       </h2>

//       <div className="flex flex-col gap-5">
//         <div className="flex flex-col gap-1">
//           <label className="font-bold text-gray-600">
//             Name / Description
//           </label>
//           <input
//             type="text"
//             className="bg-gray-100 p-3 rounded-xl focus:ring-2 ring-green-500 outline-none"
//             placeholder="e.g. Mortgage or Car Loan"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex flex-col gap-1">
//             <label className="font-bold text-gray-600">Amount</label>
//             <input
//               type="number"
//               className="bg-gray-100 p-3 rounded-xl outline-none"
//               placeholder="0.00"
//               value={formData.amount}
//               onChange={(e) =>
//                 setFormData({ ...formData, amount: e.target.value })
//               }
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label className="font-bold text-gray-600">Payment Date</label>
//             <input
//               type="date"
//               className="bg-gray-100 p-3 rounded-xl outline-none"
//               value={formData.dateToBePaid}
//               onChange={(e) =>
//                 setFormData({ ...formData, dateToBePaid: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         <div className="flex flex-col gap-1">
//           <label className="font-bold text-gray-600">Liability Class</label>
//           <select
//             className="bg-gray-100 p-3 rounded-xl outline-none"
//             value={formData.liabilityClass}
//             onChange={(e) =>
//               setFormData({ ...formData, liabilityClass: e.target.value })
//             }
//           >
//             <option value="Personal">Personal</option>
//             <option value="Business">Business</option>
//             <option value="Others">Others</option>
//           </select>
//         </div>
//       </div>

//       <div className="flex justify-end gap-4 mt-10">
//         <button
//           className="px-6 py-2 font-bold text-gray-400"
//           onClick={() => setIsModalOpen(false)}
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleSave}
//           className="px-10 py-3 bg-cyan-400 text-white font-black rounded-xl shadow-lg hover:bg-cyan-500 transition-all"
//         >
//           SAVE
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
