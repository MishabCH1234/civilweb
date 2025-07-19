import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function WorkersPage() {
  const navigate = useNavigate();  
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/workers') // API for SQL-connected worker data
      .then(response => setWorkers(response.data))
      .catch(error => console.error('Error fetching worker data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-white px-10 py-8">
      <header className="flex justify-between items-center mb-10">
        <div className="text-3xl font-bold text-gray-800">
          <span className="text-blue-500">d</span>tech
        </div>
        <nav className="space-x-8 text-gray-700">
          <button onClick={() => navigate("/dashboard")} className="hover:underline">Home</button>
        </nav>
      </header>
        <h1 className="text-3xl font-semibold">Workers</h1>

      <div className="flex justify-end mb-4">
        <button onClick={() => navigate("/addnew_worker")} className="bg-black text-white px-4 py-2 rounded">Add new workers</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border border-gray-200 mb-6">
        <table className="min-w-full bg-gray-50 shadow rounded-lg">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Contact No.</th>
              <th className="px-4 py-2">Profile</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker, index) => (
              <tr key={worker.id || index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2">{worker.name}</td>
                <td className="px-4 py-2">{worker.contact}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-600 hover:underline" onClick={() => alert(`View profile of ${worker.name}`)}>
                    View
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
