import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axiosInstance";
import { useAuth } from "../../context/AuthContext";
import AuthCard from "./AuthCard";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signin", { email, password });
      login(res.data.user, res.data.token);

      // Redirect based on role
      if (res.data.user.role === "admin") navigate("/admin/dashboard");
      else if (res.data.user.role === "merchant")
        navigate("/merchant/dashboard");
      else navigate("/customer/dashboard");
    } catch (err) {
      console.error("Sign-in failed:", err.response?.data);
    }
  };

  return <AuthCard />;

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
