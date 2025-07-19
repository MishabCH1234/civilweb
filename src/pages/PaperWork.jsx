import React from "react";
import { useNavigate } from 'react-router-dom';


export default function PaperWork() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-10 py-8">
      <header className="flex justify-between items-center mb-10">
        <div className="text-3xl font-bold text-gray-800">
          <span className="text-blue-500">d</span>tech
        </div>
        <nav className="space-x-8 text-gray-700">
          <button className="hover:underline">Projects</button>
          <button className="hover:underline">Workers</button>
          <button onClick={() => navigate("/dashboard")} className="hover:underline">Home</button>
        </nav>
      </header>

      <h1 className="text-4xl font-bold mb-6">Paper work</h1>

      <div className="flex justify-end mb-4">
        <button className="bg-black text-white px-4 py-2 rounded">Add new bill</button>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-12">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Data</th>            
            <th className="border border-gray-300 px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Bills list will be dynamically inserted here */}
        </tbody>
      </table>

      <div className="flex justify-between items-center">
        <table className="w-1/2 border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Total</th>
              <td className="border border-gray-300 px-4 py-2">{/* total amount */}</td>
            </tr>
          </thead>
        </table>

        <button className="bg-black text-white px-6 py-2 rounded">Print</button>
      </div>
    </div>
  );
}
