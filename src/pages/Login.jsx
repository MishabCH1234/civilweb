import React from 'react';
import { useNavigate } from 'react-router-dom';
import buildingImage from '../assets/—Pngtree—simple atmospheric gradient urban construction_1069360.jpg';


export default function Login() {
    const navigate = useNavigate();

    const login = () => {
    navigate('/dashboard');
    };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"    >
      {/* Header */}
      <div className="absolute top-1 left-8 text-lg font-semibold">
        <img src="/logo/ChatGPT Image Jun 27, 2025, 10_57_43 PM.png" alt="Teamwork" className="-mt-8 mb-2 w-full h-48 object-cover rounded" />

      </div>

      {/* Logo */}
      <div>
        <img src="/logo/ChatGPT Image Jun 28, 2025, 01_39_48 PM.png" alt="Teamwork" className="mb-2 w-full h-40 object-cover rounded" /></div> 
      

      {/* Login Card */}
      <div className="bg-white bg-opacity-80 p-8 rounded-xl w-80 shadow-lg space-y-4">
        <div className="flex items-center border rounded-full px-4 py-2 bg-white">
          <span className="mr-2">👤</span>
          <input
            type="text"
            placeholder="Username"
            className="flex-1 outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center border rounded-full px-4 py-2 bg-white">
          <span className="mr-2">🔒</span>
          <input
            type="password"
            placeholder="Password"
            className="flex-1 outline-none bg-transparent"
          />
        </div>
        <button className="w-full bg-black text-white py-2 rounded-full font-semibold" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}
