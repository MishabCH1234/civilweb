import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white px-10 py-8">
      <header className="flex justify-between items-center mb-10">
        <div className="text-3xl font-bold text-gray-800">
          <span className="text-blue-500">d</span>tech
          <div className="text-sm font-light text-gray-500 leading-tight">
            ARCHITECTURE & ENGINEERING
          </div>
        </div>
        <nav className="space-x-8 text-gray-700">
          <button className="hover:underline">Project</button>
          <button onClick={() => navigate("/workers")} className="hover:underline">Workers</button>
          <button className="bg-black text-white px-4 py-1 rounded">Logout</button>
        </nav>
      </header>

      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-gray-200 p-6 rounded text-center font-semibold text-xl">Assets: </div>
        <div className="bg-gray-200 p-6 rounded text-center font-semibold text-xl">Expenses: </div>
        <div className="bg-gray-200 p-6 rounded text-center font-semibold text-xl">Total projects: </div>
        <button onClick={() => navigate("/workers")} className="bg-gray-200 p-6 rounded text-center font-semibold text-xl hover:shadow">Workers</button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="flex justify-end mb-2">
          <button className="bg-black text-white px-4 py-1 rounded">Add</button>
        </div>
        <table className="w-full border-collapse border border-gray-300 mb-12">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Projects</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Place</th>
            <th className="border border-gray-300 px-4 py-2">Contact No.</th>
            <th className="border border-gray-300 px-4 py-2">Paper Work</th>
            <th className="border border-gray-300 px-4 py-2">Site Work</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((i) => (
            <tr key={i}>
              <td className="border border-gray-300 px-4 py-2">Project {i}</td>
              <td className="border border-gray-300 px-4 py-2">John Doe</td>
              <td className="border border-gray-300 px-4 py-2">City {i}</td>
              <td className="border border-gray-300 px-4 py-2">123456789{i}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button onClick={() => navigate("/paperwork")} className="text-black px-3 py-1 rounded">
                  Go
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button onClick={() => navigate("/sitework")} className=" text-black px-3 py-1 rounded">
                  Go
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
