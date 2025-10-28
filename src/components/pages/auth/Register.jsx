import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// in Register.jsx
import { register } from "../../../services/auth";
import { useToast } from "/src/store/toast.jsx"


export default function Register() {
  const { pushToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 chars");
      return;
    }

    try {
      await register({ email, password });
      pushToast("Account created", "success");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      pushToast("Registration failed", "error");
    }
  };
  

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handle} aria-label="Register form">
        <h2>Create account</h2>

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
          Get Started
        </button>
      </form>
    </div>
  );
}
