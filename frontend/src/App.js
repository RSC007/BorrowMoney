import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./AppRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";


function App() {
  return (
    <AuthProvider>
      
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
