// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

// Simple Home Page Component
function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to Synex</h1>
      <p>This is your unified banking platform demo.</p>
      <Link to="/dashboard">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

// Main App Component with Routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
