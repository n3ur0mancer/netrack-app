import React from "react";
import Plot from "react-plotly.js";
import Header from "../components/Header/Header";
import "@fontsource/hanken-grotesk";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-main-container">
      <Header />
      <div className="dashboard-main-grid-container">
        <div className="dashboard-big-square-grid-container">
          <Plot
            data={[
              {
                name: "Cash",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [30134, 31400, 30532, 29748, 26340, 25534],
                marker: { color: "blue" },
              },
              {
                name: "Stocks",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [19643.36, 20044.8, 20268, 20381.4, 20692.6, 21034.2],
                marker: { color: "green" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{ title: "All assets" }}
          />
        </div>
        <div className="dashboard-rectangle-grid-container">
          <Plot
            data={[
              {
                name: "Placeholder",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [30134, 31400, 30532, 29748, 26340, 25534],
                marker: { color: "blue" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{ title: "Complete Networth" }}
          />
        </div>
        <div className="dashboard-small-square-grid-container-left">
          <Plot
            data={[
              {
                name: "Winner",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [19643.36, 20044.8, 20268, 20381.4, 20692.6, 21034.2],
                marker: { color: "green" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{ title: "Winner" }}
          />
        </div>
        <div className="dashboard-small-square-grid-container-right">
          <Plot
            data={[
              {
                name: "Loser",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [30134, 31400, 30532, 29748, 26340, 25534],
                marker: { color: "red" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{ title: "Loser" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
