import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTickets } from "../services/tickets";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    in_progress: 0,
    closed: 0,
  });

  useEffect(() => {
    async function load() {
      try {
        const list = await getTickets();
        setStats({
          total: list.length,
          open: list.filter((t) => t.status === "open").length,
          in_progress: list.filter((t) => t.status === "in_progress").length,
          closed: list.filter((t) => t.status === "closed").length,
        });
      } catch (e) {
        // could show toast here
      }
    }

    load();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <div className="card stat">
          <h3>Total tickets</h3>
          <div className="stat-value">{stats.total}</div>
        </div>

        <div className="card stat">
          <h3>Open</h3>
          <div className="stat-value status-open">{stats.open}</div>
        </div>

        <div className="card stat">
          <h3>In Progress</h3>
          <div className="stat-value status-warning">{stats.in_progress}</div>
        </div>

        <div className="card stat">
          <h3>Closed</h3>
          <div className="stat-value status-closed">{stats.closed}</div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/tickets" className="btn">
          Manage Tickets
        </Link>
      </div>
    </div>
  );
}
