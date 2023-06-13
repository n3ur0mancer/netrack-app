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
                marker: { color: "white" },
              },
              {
                name: "Stocks",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [19643.36, 20044.8, 20268, 20381.4, 20692.6, 21034.2],
                marker: { color: "white" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{
              title: {
                text: "All assets",
                font: {
                  family: "Hanken Grotesk",
                  color: "white",
                  size: 25,
                },
                xref: "x",
                x: 0.08,
              },
              plot_bgcolor: "#262626",
              paper_bgcolor: "#262626",
              yaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "white",
                },
                showgrid: false,
              },
              xaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "white",
                },
                showgrid: false,
              },
              legend: {
                font: {
                  color: "white",
                },
              },
            }}
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
                marker: { color: "#262626" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{
              title: {
                text: "Overall net worth",
                font: {
                  family: "Hanken Grotesk",
                  color: "#262626",
                  size: 25,
                },
                xref: "x",
                x: 0.08,
              },
              yaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "#262626",
                },
                showgrid: false,
              },
              xaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "#262626",
                },
                showgrid: false,
              },
            }}
          />
        </div>
        <div className="dashboard-small-square-grid-container-left">
          <Plot
            data={[
              {
                name: "Losing",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [30134, 31400, 30532, 29748, 26340, 25534],
                marker: { color: "white" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{
              title: {
                text: "Losing",
                font: {
                  family: "Hanken Grotesk",
                  color: "white",
                  size: 25,
                },
                xref: "x",
                x: 0.15,
              },
              plot_bgcolor: "#B286FD",
              paper_bgcolor: "#B286FD",
              yaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "white",
                },
                showgrid: false,
              },
              xaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "white",
                },
                showgrid: false,
              },
            }}
          />
        </div>
        <div className="dashboard-small-square-grid-container-right">
          <Plot
            data={[
              {
                name: "Winning",
                type: "scatter",
                x: [1, 2, 3, 4, 5, 6],
                y: [19643.36, 20044.8, 20268, 20381.4, 20692.6, 21034.2],
                marker: { color: "#262626" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{
              title: {
                text: "Winning",
                font: {
                  family: "Hanken Grotesk",
                  color: "#262626",
                  size: 25,
                },
                xref: "x",
                x: 0.15,
              },
              yaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "#262626",
                },
                showgrid: false,
              },
              xaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "#262626",
                },
                showgrid: false,
              },
              plot_bgcolor: "#B2F042",
              paper_bgcolor: "#B2F042",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
