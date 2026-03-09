import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useNavigate } from "react-router";

const ZakatCalculations = () => {
  const [items, setItems] = useState([]); // Combined list for Assets and Liabilities
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("Asset"); // 'Asset' or 'Liability'

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    currency: "NGN",
    zakatable: "Yes",
    category: "Cash",
  });

  // --- LOGIC: Totals & Conversions ---
  const rates = { NGN: 1, USD: 1550, GBP: 1950 }; // March 2026 Estimated Rates

  const getTotals = (type) => {
    return items
      .filter((item) => item.type === type)
      .reduce(
        (acc, curr) => {
          acc[curr.currency] =
            (acc[curr.currency] || 0) + parseFloat(curr.amount || 0);
          return acc;
        },
        { NGN: 0, USD: 0, GBP: 0 },
      );
  };

  const assetTotals = getTotals("Asset");
  const liabilityTotals = getTotals("Liability");

  // Calculate Net Zakatable in NGN (Base)
  const netZakatableNGN = items.reduce((acc, item) => {
    const valueInNGN = parseFloat(item.amount || 0) * rates[item.currency];
    if (item.type === "Asset" && item.zakatable === "Yes")
      return acc + valueInNGN;
    if (item.type === "Liability") return acc - valueInNGN;
    return acc;
  }, 0);

  const zakatDue = Math.max(0, netZakatableNGN * 0.025);

  // --- ACTIONS ---
  const handleSave = () => {
    if (!formData.description || !formData.amount) return;
    setItems([...items, { ...formData, type: modalType, id: Date.now() }]);
    setIsModalOpen(false);
    setFormData({
      description: "",
      amount: "",
      currency: "NGN",
      zakatable: "Yes",
      category: "Cash",
    });
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Al-Fattah Zakat Statement", 14, 20);

    doc.autoTable({
      startY: 30,
      head: [["Type", "Description", "Currency", "Amount", "Zakatable"]],
      body: items.map((i) => [
        i.type,
        i.description,
        i.currency,
        i.amount,
        i.zakatable,
      ]),
    });

    doc.text(
      `Total Zakat Due (NGN): ${zakatDue.toLocaleString()}`,
      14,
      doc.lastAutoTable.finalY + 20,
    );
    doc.save("Zakat_Report.pdf");
  };

  // 2. Calculate equivalents based on the NGN Total
  // Assuming 'netZakatableNGN' is your 201,234,567.89 value
  const totalInUSD = netZakatableNGN / rates.USD;
  const totalInGBP = netZakatableNGN / rates.GBP;


//   Zakat Print Exports 
const handleExportPDF = () => {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(22);
  doc.setTextColor(255, 140, 0); // Orange color
  doc.text("AL-FATTAH ZAKAT BALANCE SHEET", 14, 20);

  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 30);

  // Table Data
  const tableRows = items.map((item) => [
    item.type,
    item.description,
    item.currency,
    parseFloat(item.amount).toLocaleString(),
    item.zakatable || "N/A", // Guard against undefined
  ]);

  // FIX: Call autoTable directly and pass 'doc' as the first parameter
  autoTable(doc, {
    startY: 40,
    head: [["Type", "Description", "Currency", "Amount", "Zakatable"]],
    body: tableRows,
    theme: "grid",
    headStyles: { fillColor: [22, 163, 74] }, // Green header
  });

  // Final Calculations
  // FIX: Access lastAutoTable from the doc instance
  const finalY = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(
    `Total Zakatable Value: NGN ${netZakatableNGN.toLocaleString()}`,
    14,
    finalY,
  );
  doc.text(
    `Zakat Due (2.5%): NGN ${zakatDue.toLocaleString()}`,
    14,
    finalY + 10,
  );

  doc.save("Zakat_Balance_Sheet.pdf");
};

const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
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
            <span className="hidden md:inline">Back to Calculations</span>
          </button>
          <h1 className="text-orange-400 font-black text-6xl italic">
            My Balance Sheet
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setModalType("Asset");
                setIsModalOpen(true);
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-green-700"
            >
              + Add Asset
            </button>
            <button
              onClick={() => {
                setModalType("Liability");
                setIsModalOpen(true);
              }}
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-red-700"
            >
              + Add Liability
            </button>
            <button
              onClick={handleExportPDF}
              className="bg-gray-800 text-white p-3 rounded-xl"
            >
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
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Assets Table */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
            <div className="bg-green-600 p-4 text-white font-bold uppercase tracking-widest text-center">
              Assets
            </div>
            <div className="p-4 max-h-80 overflow-y-auto">
              {items
                .filter((i) => i.type === "Asset")
                .map((asset) => (
                  <div
                    key={asset.id}
                    className="flex justify-between p-3 border-b hover:bg-green-50"
                  >
                    <span>{asset.description}</span>
                    <span className="font-bold text-green-700">
                      {asset.currency}{" "}
                      {parseFloat(asset.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Liabilities Table */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-red-100">
            <div className="bg-red-600 p-4 text-white font-bold uppercase tracking-widest text-center">
              Liabilities
            </div>
            <div className="p-4 max-h-80 overflow-y-auto">
              {items
                .filter((i) => i.type === "Liability")
                .map((liability) => (
                  <div
                    key={liability.id}
                    className="flex justify-between p-3 border-b hover:bg-red-50"
                  >
                    <span>{liability.description}</span>
                    <span className="font-bold text-red-700">
                      {liability.currency}{" "}
                      {parseFloat(liability.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BALANCE SHEET SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Currency Breakdowns */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-gray-400 font-black uppercase text-xs mb-4">
              Total Assets
            </h3>
            <p className="flex justify-between font-bold">
              <span>NGN</span>{" "}
              <span>
                ₦
                {netZakatableNGN.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
            <p className="flex justify-between font-bold">
              <span>USD</span>{" "}
              <span>
                $
                {totalInUSD.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
            <p className="flex justify-between font-bold border-b pb-4">
              <span>GBP</span>{" "}
              <span>
                £
                {totalInGBP.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>

            <h3 className="text-gray-400 font-black uppercase text-xs mt-4 mb-4">
              Total Liabilities
            </h3>
            <p className="flex justify-between font-bold text-red-600">
              <span>NGN</span>{" "}
              <span>
                {liabilityTotals.NGN.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
            <p className="flex justify-between font-bold text-red-600">
              <span>USD</span>{" "}
              <span>
                $
                {(liabilityTotals.NGN / rates.USD).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
            <p className="flex justify-between font-bold text-red-600">
              <span>GBP</span>{" "}
              <span>
                £
                {(liabilityTotals.NGN / rates.GBP).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </p>
          </div>

          {/* Zakat Calculations */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-green-400 p-8 rounded-2xl shadow-md">
              <h2 className="text-xl font-black mb-2 uppercase">
                Zakatable Value (Base Currency)
              </h2>
              <p className="text-4xl font-black">
                NGN {netZakatableNGN.toLocaleString()}
              </p>
            </div>
            <div className="bg-green-600 p-8 rounded-2xl shadow-xl text-white transform scale-105 origin-left">
              <h2 className="text-xl font-black mb-2 uppercase">
                Zakat Due (2.5%)
              </h2>
              <p className="text-5xl font-black">
                NGN {zakatDue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- REUSABLE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">
            <h2
              className={`text-2xl font-black mb-6 uppercase ${modalType === "Asset" ? "text-green-600" : "text-red-600"}`}
            >
              Add {modalType}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Description"
                className="w-full p-3 bg-gray-100 rounded-xl"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full p-3 bg-gray-100 rounded-xl"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      amount: Math.abs(e.target.value),
                    })
                  }
                />
                <select
                  className="p-3 bg-gray-100 rounded-xl"
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                >
                  <option>NGN</option>
                  <option>USD</option>
                  <option>GBP</option>
                </select>
              </div>
              {modalType === "Asset" && (
                <select
                  className="w-full p-3 bg-gray-100 rounded-xl"
                  value={formData.zakatable}
                  onChange={(e) =>
                    setFormData({ ...formData, zakatable: e.target.value })
                  }
                >
                  <option value="Yes">Zakatable: Yes</option>
                  <option value="No">Zakatable: No</option>
                </select>
              )}
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
                className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-black"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZakatCalculations;
