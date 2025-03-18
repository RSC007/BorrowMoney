import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Transactions from "../Transactions";

function MerchantDashboard() {
  return (
    <div className="merchant-dashboard d-flex">
      {/* <Sidebar /> */}
      <div className="content p-4 w-100">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </div>
    </div>
  );
}

export default MerchantDashboard;
