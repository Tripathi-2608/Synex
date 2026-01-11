import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ConnectBanks from "./pages/ConnectBanks";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/connect" element={<ConnectBanks />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

