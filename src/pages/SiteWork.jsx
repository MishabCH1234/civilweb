import React, { useState, useEffect } from "react";

// Dummy SQL-like data (replace with real API call later)
const mockData = [
  { id: 1, name: "John", date: "19.08.2025", credit: 1000, debit: 200 },
  { id: 2, name: "Alice", date: "19.08.2025", credit: 500, debit: 300 },
  { id: 3, name: "Bob", date: "19.08.2025", credit: 700, debit: 100 },
];

const SiteWork = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate SQL fetch
    setData(mockData);
  }, []);

  const totalCredit = data.reduce((sum, row) => sum + row.credit, 0);
  const totalDebit = data.reduce((sum, row) => sum + row.debit, 0);

  return (
    <div className="min-h-screen bg-white px-10 py-8">
      <header className="flex justify-between items-center mb-10">
        <div className="text-3xl font-bold text-gray-800">
          <span className="text-blue-500">d</span>tech
        </div>
        <nav className="space-x-8 text-gray-700">
          <button className="hover:underline">Workers</button>
          <button onClick={() => navigate("/dashboard")} className="hover:underline">Home</button>
        </nav>
      </header>
      <h2 className="text-3xl font-semibold">Site work</h2>
      {/* Title and Button */}
      <div className="flex justify-end mb-4">
        <button className="bg-black text-white px-4 py-2 rounded">Add new bill</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border border-gray-200 mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left text-sm">
              <th className="px-4 py-2 border">No.</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Credit</th>
              <th className="px-4 py-2 border">Debit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className="text-sm text-gray-800">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{row.name}</td>
                <td className="px-4 py-2 border">{row.date}</td>
                <td className="px-4 py-2 border">₹{row.credit}</td>
                <td className="px-4 py-2 border">₹{row.debit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Table */}
      <div className="flex items-center justify-between">
        <table className="table-auto border-collapse">
          <tbody>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <td className="px-4 py-2 border font-semibold">Total:</td>
              <td className="px-4 py-2 border font-semibold">₹{totalCredit}</td>
              <td className="px-4 py-2 border font-semibold">₹{totalDebit}</td>
            </tr>
          </tbody>
        </table>
        <button className="bg-black text-white px-4 py-2 rounded-md">Print</button>
      </div>
    </div>
  );
};

export default SiteWork;
