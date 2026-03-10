import React, { useEffect, useState } from "react";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import { useNavigate, useParams } from "react-router";

const ZakatDistribution = ({}) => {
  const [zakatDue, setZakatDue] = useState(0);
  const { amount } = useParams();

  const [distributions, setDistributions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ recipient: "", percentage: "" });

  // --- Calculations ---
  const totalDistributed = distributions.reduce(
    (acc, curr) => acc + zakatDue * (curr.percentage / 100),
    0,
  );
  const remainingToDistribute = zakatDue - totalDistributed;

  const handleSave = () => {
    if (!formData.recipient || !formData.percentage) return;
    setDistributions([...distributions, { ...formData, id: Date.now() }]);
    setFormData({ recipient: "", percentage: "" });
    setIsModalOpen(false);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("ZAKAT DISTRIBUTION REPORT", 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [["Recipient", "Percentage", "Amount (NGN)"]],
      body: distributions.map((d) => [
        d.recipient,
        `${d.percentage}%`,
        (zakatDue * (d.percentage / 100)).toLocaleString(),
      ]),
    });
    doc.save("Distribution_Plan.pdf");
  };

  useEffect(() => {
    if (amount) {
      setZakatDue(amount);
    }
  }, [amount]);

  const navigate = useNavigate();

  //   UYpdating Zakat Due
  const [isEditingZakat, setIsEditingZakat] = useState(false);
  const [manualZakat, setManualZakat] = useState("");

  const handleSetManualZakat = () => {
    setZakatDue(parseFloat(manualZakat) || 0);
    setIsEditingZakat(false);
  };

  return (
    // <div className="min-h-screen bg-white p-12 font-sans">
    //   <div className="flex justify-between items-start mb-12">
    //     <button
    //       onClick={() => navigate(-1)}
    //       className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-all font-bold group"
    //     >
    //       <div className="p-3 bg-gray-100 rounded-full group-hover:bg-orange-50 transition-colors">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={3}
    //             d="M10 19l-7-7m0 0l7-7m-7 7h18"
    //           />
    //         </svg>
    //       </div>
    //       <span className="hidden md:inline">Back to Distributions</span>
    //     </button>
    //     <h1 className="text-orange-400 font-black text-8xl tracking-tighter italic">
    //       Distributing my Zakat
    //     </h1>
    //     <button
    //       onClick={exportPDF}
    //       className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-8 w-8 text-gray-400"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   <div className="grid grid-cols-3 gap-10">
    //     {/* Table Section */}
    //     <div className="col-span-2">
    //       <table className="w-full text-left border-collapse">
    //         <thead>
    //           <tr className="border-b-2 border-black text-2xl font-black">
    //             <th className="pb-4">Recipient</th>
    //             <th className="pb-4 text-center">Percentage</th>
    //             <th className="pb-4 text-right">Amount</th>
    //           </tr>
    //         </thead>
    //         <tbody className="text-xl font-bold text-gray-800">
    //           {distributions.map((item) => (
    //             <tr key={item.id} className="border-b border-gray-100">
    //               <td className="py-6">{item.recipient}</td>
    //               <td className="py-6 text-center">{item.percentage}%</td>
    //               <td className="py-6 text-right">
    //                 {(zakatDue * (item.percentage / 100)).toLocaleString(
    //                   undefined,
    //                   { minimumFractionDigits: 2 },
    //                 )}
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //       <button
    //         onClick={() => setIsModalOpen(true)}
    //         className="mt-8 px-8 py-3 bg-cyan-500 text-white font-black rounded-full shadow-lg hover:bg-cyan-600 transition-all"
    //       >
    //         + ADD RECIPIENT
    //       </button>
    //     </div>

    //     {/* Totals Sidebar */}
    //     <div className="bg-green-400 p-8 rounded-sm h-fit">
    //       <div className="flex flex-col gap-8">
    //         {/* Edit Button */}
    //         <div className="flex justify-between items-center mb-2">
    //           <h3 className="text-2xl font-black text-[#0c3d2e]">Zakat Due</h3>
    //           <button
    //             onClick={() => setIsEditingZakat(true)}
    //             className="text-[#0c3d2e] hover:text-white transition-colors"
    //             title="Manual Entry"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    //             </svg>
    //           </button>
    //         </div>

    //         {/* End Edit Button */}

    //         <section>
    //           <h3 className="text-2xl font-black mb-2">Zakat Due</h3>
    //           <p className="flex justify-between text-xl font-bold">
    //             <span>NGN</span> <span>{zakatDue.toLocaleString()}</span>
    //           </p>
    //         </section>
    //         <section>
    //           <h3 className="text-2xl font-black mb-2">Distributed</h3>
    //           <p className="flex justify-between text-xl font-bold">
    //             <span>NGN</span>{" "}
    //             <span>{totalDistributed.toLocaleString()}</span>
    //           </p>
    //         </section>
    //         <section className="pt-6 border-t border-green-500">
    //           <h3 className="text-2xl font-black mb-2">
    //             Remaining to be Distributed
    //           </h3>
    //           <p className="flex justify-between text-xl font-bold">
    //             <span>NGN</span>{" "}
    //             <span>
    //               {Math.max(0, remainingToDistribute).toLocaleString()}
    //             </span>
    //           </p>
    //         </section>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Modal */}
    //   {isModalOpen && (
    //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
    //       <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
    //         <h2 className="text-2xl font-black mb-6 text-orange-400 uppercase">
    //           Allocate Zakat
    //         </h2>
    //         <div className="space-y-4">
    //           <div className="flex flex-col gap-2">
    //             <label className="font-bold">Recipient Name</label>
    //             <input
    //               type="text"
    //               className="bg-gray-100 p-3 rounded-xl outline-none"
    //               value={formData.recipient}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, recipient: e.target.value })
    //               }
    //             />
    //           </div>
    //           <div className="flex flex-col gap-2">
    //             <label className="font-bold">Percentage (%)</label>
    //             <input
    //               type="number"
    //               max="100"
    //               className="bg-gray-100 p-3 rounded-xl outline-none"
    //               value={formData.percentage}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, percentage: e.target.value })
    //               }
    //             />
    //           </div>
    //         </div>
    //         <div className="flex justify-end gap-4 mt-8">
    //           <button
    //             onClick={() => setIsModalOpen(false)}
    //             className="font-bold text-gray-400"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             onClick={handleSave}
    //             className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-black shadow-lg"
    //           >
    //             CONFIRM
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   {/* Manual Zakat Update */}

    //   {isEditingZakat && (
    //     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
    //       <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
    //         <h2 className="text-2xl font-black mb-4 text-gray-800">
    //           Enter Zakat Due
    //         </h2>
    //         <p className="text-gray-500 mb-6 text-sm">
    //           If you already have your calculated total, enter it here to begin
    //           distribution.
    //         </p>

    //         <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-3 mb-8">
    //           <span className="font-black text-gray-400">NGN</span>
    //           <input
    //             type="number"
    //             autoFocus
    //             className="bg-transparent w-full outline-none text-xl font-bold"
    //             placeholder="0.00"
    //             value={manualZakat}
    //             onChange={(e) => setManualZakat(e.target.value)}
    //           />
    //         </div>

    //         <div className="flex gap-4">
    //           <button
    //             onClick={() => setIsEditingZakat(false)}
    //             className="flex-1 py-3 font-bold text-gray-400"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             onClick={handleSetManualZakat}
    //             className="flex-1 py-3 bg-[#0c3d2e] text-white rounded-xl font-bold shadow-lg"
    //           >
    //             Set Amount
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>

    <div className="min-h-screen bg-white p-4 md:p-12 font-sans">
      {/* Header Section - Stacked on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 md:mb-12">
        <button
          onClick={() => navigate(-1)}
          className="self-start flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-all font-bold group"
        >
          <div className="p-2 md:p-3 bg-gray-100 rounded-full group-hover:bg-orange-50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
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
          <span className="text-sm md:text-base">Back</span>
        </button>

        {/* Responsive Title: 4xl on mobile, 8xl on desktop */}
        <h1 className="text-4xl md:text-8xl text-orange-400 font-black tracking-tighter italic text-center leading-tight">
          Distributing my Zakat
        </h1>

        <button
          onClick={exportPDF}
          className="absolute top-4 right-4 md:relative md:top-0 md:right-0 p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
        </button>
      </div>
      {/* Main Layout: Grid on desktop, Flex-col on mobile */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 md:gap-10">
        {/* Table Section - occupy 2 columns on desktop */}
        <div className="lg:col-span-2 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-black text-lg md:text-2xl font-black">
                <th className="pb-4">Recipient</th>
                <th className="pb-4 text-center">Percentage</th>
                <th className="pb-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-base md:text-xl font-bold text-gray-800">
              {distributions.length > 0 ? (
                distributions.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-4 md:py-6">{item.recipient}</td>
                    <td className="py-4 md:py-6 text-center">
                      {item.percentage}%
                    </td>
                    <td className="py-4 md:py-6 text-right">
                      {(zakatDue * (item.percentage / 100)).toLocaleString(
                        undefined,
                        { minimumFractionDigits: 2 },
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-10 text-center text-gray-400 italic"
                  >
                    No recipients added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 w-full md:w-auto px-8 py-4 bg-cyan-500 text-white font-black rounded-full shadow-lg hover:bg-cyan-600 transition-all active:scale-95"
          >
            + ADD RECIPIENT
          </button>
        </div>

        {/* Totals Sidebar - sits on top on mobile for quick reference */}
        <div className="bg-green-400 p-6 md:p-8 rounded-2xl lg:rounded-sm h-fit shadow-lg lg:shadow-none">
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Zakat Due Header with Edit */}
            <div className="flex justify-between items-center pb-2 border-b border-green-500">
              <h3 className="text-xl md:text-2xl font-black text-[#0c3d2e]">
                Zakat Due
              </h3>
              <button
                onClick={() => setIsEditingZakat(true)}
                className="p-2 bg-[#0c3d2e] text-white rounded-lg hover:bg-green-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>

            <section>
              <p className="flex justify-between text-lg md:text-xl font-bold text-[#0c3d2e]">
                <span>NGN</span>{" "}
                <span>
                  {zakatDue.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-black text-[#0c3d2e] mb-2">
                Distributed
              </h3>
              <p className="flex justify-between text-lg md:text-xl font-bold text-[#0c3d2e]">
                <span>NGN</span>{" "}
                <span>
                  {totalDistributed.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </p>
            </section>

            <section className="pt-6 border-t border-green-500">
              <h3 className="text-xl md:text-2xl font-black text-[#0c3d2e] mb-2">
                Remaining
              </h3>
              <p className="flex justify-between text-lg md:text-xl font-bold text-[#0c3d2e]">
                <span>NGN</span>{" "}
                <span>
                  {Math.max(0, remainingToDistribute).toLocaleString(
                    undefined,
                    { minimumFractionDigits: 2 },
                  )}
                </span>
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* Modal */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-black mb-6 text-orange-400 uppercase">
              Allocate Zakat
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Recipient Name</label>
                <input
                  type="text"
                  className="bg-gray-100 p-3 rounded-xl outline-none"
                  value={formData.recipient}
                  onChange={(e) =>
                    setFormData({ ...formData, recipient: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Percentage (%)</label>
                <input
                  type="number"
                  max="100"
                  className="bg-gray-100 p-3 rounded-xl outline-none"
                  value={formData.percentage}
                  onChange={(e) =>
                    setFormData({ ...formData, percentage: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="font-bold text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-black shadow-lg"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Manual Zakat Update */}
      {isEditingZakat && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
            <h2 className="text-2xl font-black mb-4 text-gray-800">
              Enter Zakat Due
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              If you already have your calculated total, enter it here to begin
              distribution.
            </p>

            <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-3 mb-8">
              <span className="font-black text-gray-400">NGN</span>
              <input
                type="number"
                autoFocus
                className="bg-transparent w-full outline-none text-xl font-bold"
                placeholder="0.00"
                value={manualZakat}
                onChange={(e) => setManualZakat(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setIsEditingZakat(false)}
                className="flex-1 py-3 font-bold text-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSetManualZakat}
                className="flex-1 py-3 bg-[#0c3d2e] text-white rounded-xl font-bold shadow-lg"
              >
                Set Amount
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZakatDistribution;
