import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// ✅ Correct import (check this path!)
import { ToastProvider } from "./store/toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>         {/* ✅ Router goes here */}
      <ToastProvider>       {/* ✅ Toast can safely wrap App inside router */}
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
