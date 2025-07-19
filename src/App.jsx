// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Workers from './pages/Workers';
import ProjectDetail from './pages/ProjectDetail';
import PaperWork from './pages/PaperWork';
import SiteWork from './pages/SiteWork';
import AddNewWorker from './pages/AddNewWorker';


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="paperwork" element={<PaperWork />} />
        <Route path="sitework" element={<SiteWork />} />
        <Route path="addnew_worker" element={<AddNewWorker />} />

      </Routes>
  );
}

