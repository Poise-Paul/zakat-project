import React, { useState } from "react";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import { useNavigate } from "react-router";

const ZakatDistribution = ({ zakatDue = 345201234567.89 }) => {
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
  
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white p-12 font-sans">
      <div className="flex justify-between items-start mb-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-all font-bold group"
        >
          <div className="p-3 bg-gray-100 rounded-full group-hover:bg-orange-50 transition-colors">
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
          <span className="hidden md:inline">Back to Distributions</span>
        </button>
        <h1 className="text-orange-400 font-black text-8xl tracking-tighter italic">
          Distributing my Zakat
        </h1>
        <button
          onClick={exportPDF}
          className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-400"
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

      <div className="grid grid-cols-3 gap-10">
        {/* Table Section */}
        <div className="col-span-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-black text-2xl font-black">
                <th className="pb-4">Recipient</th>
                <th className="pb-4 text-center">Percentage</th>
                <th className="pb-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-xl font-bold text-gray-800">
              {distributions.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-6">{item.recipient}</td>
                  <td className="py-6 text-center">{item.percentage}%</td>
                  <td className="py-6 text-right">
                    {(zakatDue * (item.percentage / 100)).toLocaleString(
                      undefined,
                      { minimumFractionDigits: 2 },
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 px-8 py-3 bg-cyan-500 text-white font-black rounded-full shadow-lg hover:bg-cyan-600 transition-all"
          >
            + ADD RECIPIENT
          </button>
        </div>

        {/* Totals Sidebar */}
        <div className="bg-green-400 p-8 rounded-sm h-fit">
          <div className="flex flex-col gap-8">
            <section>
              <h3 className="text-2xl font-black mb-2">Zakat Due</h3>
              <p className="flex justify-between text-xl font-bold">
                <span>NGN</span> <span>{zakatDue.toLocaleString()}</span>
              </p>
            </section>
            <section>
              <h3 className="text-2xl font-black mb-2">Distributed</h3>
              <p className="flex justify-between text-xl font-bold">
                <span>NGN</span>{" "}
                <span>{totalDistributed.toLocaleString()}</span>
              </p>
            </section>
            <section className="pt-6 border-t border-green-500">
              <h3 className="text-2xl font-black mb-2">
                Remaining to be Distributed
              </h3>
              <p className="flex justify-between text-xl font-bold">
                <span>NGN</span>{" "}
                <span>
                  {Math.max(0, remainingToDistribute).toLocaleString()}
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
    </div>
  );
};

export default ZakatDistribution;
