import { Navigate, Route, Routes } from "react-router-dom";
import Transactions from "../Transactions";
import Dashboard from "./Dashboard";

const CustomerDashboard = () => (
  <div className="customer-dashboard d-flex">
    {/* <Sidebar /> */}
    <div className="content p-4 w-100">
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Routes>
    </div>
  </div>
);

export default CustomerDashboard;
