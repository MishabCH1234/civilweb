import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import buildingImage from '/logo/blue-cityscape-with-bridge-construction-6119527.jpg';

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* ✅ Logo Image */}
      <img
        src="/logo/ChatGPT Image Jun 27, 2025, 10_57_43 PM.png"
        alt="Logo"
        className="absolute top-4 left-4 -mt-9 w-32 h-32 object-contain z-10"
      />

      {/* ✅ Top Navigation Bar */}
      <div className="flex justify-end items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-4 text-gray-600 text-lg">
          <a href="#" title="Instagram"><FaInstagram /></a>
          <a href="#" title="Facebook"><FaFacebookF /></a>
          <a href="#" title="WhatsApp"><FaWhatsapp /></a>
          <button
            onClick={() => navigate('/login')}
            className="ml-4 bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>
      </div>

      {/* ✅ Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-start text-white relative"
        style={{
          backgroundImage: "url('/logo/blue-cityscape-with-bridge-construction-6119527.jpg')",
          backgroundColor: 'black',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>  
        <div className="relative z-10 pl-10cm">
        <h1 className="text-4xl mt-10 drop-shadow-md">Welcome</h1>
        <h1 className="text-3xl text-blue-400 mt-2"> Work better, safer, together.</h1>
        <p className="text-1xl italic text-gray-00 mt-2 mb-10">We specialize in planning, designing, and managing construction projects with a focus on <br/>
           structural integrity, sustainability, and aesthetic excellence.<br/>
            From concept to completion, our team ensures every project is built on a foundation of precision and creativity. <br/>
           Explore our services, view our projects, and discover how we shape the future.</p>
      </div>
      </div>

      {/* ✅ Our Works Section */}
      <div className="px-10 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-500 mb-10">Our Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="/images11.jpeg" alt="Renovation" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Best House Renovation</h3>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="/images12.jpeg" alt="Teamwork" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">The Effective Teamwork</h3>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="/images13.jpeg" alt="Green Building" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">The Green Building</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
