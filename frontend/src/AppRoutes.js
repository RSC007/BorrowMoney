import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MerchantDashboard from "./pages/merchant/MerchantDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/auth/signin" />;
  }

  return element;
};

const AppRoutes = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />

          {/* Role-Based Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                element={<AdminDashboard />}
                allowedRoles={["admin"]}
              />
            }
          />
          <Route
            path="/merchant/dashboard"
            element={
              <ProtectedRoute
                element={<MerchantDashboard />}
                allowedRoles={["merchant"]}
              />
            }
          />
          <Route
            path="/customer/dashboard"
            element={
              <ProtectedRoute
                element={<CustomerDashboard />}
                allowedRoles={["customer"]}
              />
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
