import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Dashboard from "./components/Dashboard";
import Tickets from "./components/Tickets";

export default function App() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  const isAuthenticated = localStorage.getItem("ticketapp_session");

  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Landing navigate={navigate} />} />
        <Route path="/auth/login" element={<Login navigate={navigate} />} />
        <Route path="/auth/register" element={<Register navigate={navigate} />} />
        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={<Dashboard navigate={navigate} logout={logout} />} />
            <Route path="/tickets" element={<Tickets navigate={navigate} />} />
          </>
        )}
      </Routes>
      <footer className="site-footer">© TicketApp — built for Stage 2</footer>
    </div>
  );
}
