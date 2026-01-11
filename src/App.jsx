// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Landing from "./pages/Landing";
import ConnectBanks from "./pages/ConnectBanks";
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
      <br />
      <Link to="/connect-banks">
        <button style={{ padding: "10px 20px", marginTop: "10px" }}>
          Connect Banks
        </button>
      </Link>
      <br />
      <Link to="/landing">
        <button style={{ padding: "10px 20px", marginTop: "10px" }}>
          Landing Page
        </button>
      </Link>
    </div>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connect-banks" element={<ConnectBanks />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
