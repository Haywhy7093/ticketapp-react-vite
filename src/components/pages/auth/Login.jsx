import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// in Login.jsx
import { login } from "../../../services/auth";
import { useToast } from "/src/store/toast.jsx";



export default function Login() {
  const { pushToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login({ email, password });
      pushToast("Logged in successfully", "success");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      pushToast("Login failed: " + err.message, "error");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handle} aria-label="Login form">
        <h2>Login</h2>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <div className="field-error">{error}</div>}

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
