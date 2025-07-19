import React, { useState } from 'react';
import axios from 'axios';

export default function AddWorkerPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    address: '',
    position: '',
    profilePhoto: null,
    idCard: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/workers', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Worker added successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to add worker');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] px-10 py-10">
      <h1 className="text-3xl font-bold text-black mb-8">Add New Worker</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input type="text" name="name" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Contact Number</label>
            <input type="text" name="contact" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" name="email" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Address</label>
            <input type="text" name="address" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Position</label>
            <input type="text" name="position" onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Profile Photo</label>
            <input type="file" name="profilePhoto" accept="image/*" onChange={handleChange} className="w-full" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">ID Card Image</label>
            <input type="file" name="idCard" accept="image/*" onChange={handleChange} className="w-full" />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
