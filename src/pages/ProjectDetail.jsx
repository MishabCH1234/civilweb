// File: src/pages/ProjectDetail.jsx
import React from 'react';
import jsPDF from 'jspdf';
import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text(`Project ${id} Report`, 10, 10);
    doc.text('Expenses: ₹75,000', 10, 20);
    doc.text('Profit: ₹1,00,000', 10, 30);
    doc.save(`project_${id}_report.pdf`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Project {id} Detail</h1>
      <p>Expenses: ₹75,000</p>
      <p>Profit: ₹1,00,000</p>
      <button onClick={downloadPdf} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Download Report</button>
    </div>
  );
}