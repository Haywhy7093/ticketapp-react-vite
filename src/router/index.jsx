import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "../components/Landing.jsx";
import Login from "../components/pages/auth/Login.jsx";
import Register from "../components/pages/auth/Register.jsx";
import Dashboard from "../components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />, 
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

export default router;
