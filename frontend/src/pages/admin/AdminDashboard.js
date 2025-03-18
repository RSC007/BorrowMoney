import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Transactions from "../Transactions";

const AdminDashboard = () => {
  return (
    <Router>
      <div className="admin-dashboard d-flex">
        {/* <Sidebar /> */}
        <div className="content p-4 w-100">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/transactions" element={<Transactions />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;
