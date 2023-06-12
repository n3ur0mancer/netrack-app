import React from "react";
import Header from "../components/Header/Header";
import "@fontsource/hanken-grotesk";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-main-grid-container">
        <div className="dashboard-big-square-grid-container"></div>
        <div className="dashboard-rectangle-grid-container"></div>
        <div className="dashboard-small-square-grid-container-left"></div>
        <div className="dashboard-small-square-grid-container-right"></div>
      </div>
    </div>
  );
}

export default Dashboard;
