import { useState } from "react";
import { banks, transactions } from "../data/mockData";

function Dashboard() {
  // State to filter transactions by bank
  const [filterBank, setFilterBank] = useState("All");

  // Total balance across all banks
  const totalBalance = banks.reduce((sum, bank) => sum + bank.balance, 0);

  // Filter transactions based on selected bank
  const filteredTransactions = transactions.filter(
    tx => filterBank === "All" || tx.bank === filterBank
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Dashboard</h2>

      {/* Total Balance */}
      <h3>Total Balance: ₹{totalBalance}</h3>

      {/* Bank Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {banks.map(bank => (
          <div key={bank.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "6px", width: "150px" }}>
            <h4>{bank.name}</h4>
            <p>Balance: ₹{bank.balance}</p>
          </div>
        ))}
      </div>

      {/* Bank Filter */}
      <div style={{ marginTop: "30px" }}>
        <label>Filter by Bank: </label>
        <select onChange={e => setFilterBank(e.target.value)} value={filterBank}>
          <option value="All">All Banks</option>
          {banks.map(bank => (
            <option key={bank.id} value={bank.name}>{bank.name}</option>
          ))}
        </select>
      </div>

      {/* Transactions List */}
      <div style={{ marginTop: "20px" }}>
        <h4>Recent Transactions</h4>
        {filteredTransactions.map(tx => (
          <div key={tx.id} style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}>
            <p>{tx.date} | {tx.category} | {tx.bank} | ₹{tx.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
