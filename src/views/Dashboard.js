import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Header from "../components/Header/Header";
import "@fontsource/hanken-grotesk";
import "./Dashboard.css";
import currencyData from "../data/currency.json";
import stocksData from "../data/stocks.json";
import commoditiesData from "../data/commodities.json";
import tangibleAssetData from "../data/tangibleAssets.json";

function Dashboard() {
  const eurData = currencyData.find((currency) => currency.currency === "EUR");
  const stockData = stocksData.find((stock) => stock.stock === "example");
  const goldData = commoditiesData.find(
    (commodity) => commodity.commodity === "gold"
  );
  const watchesData = tangibleAssetData.find(
    (tangibleAsset) => tangibleAsset.tangibleAsset === "watches"
  );

  // Overall net worth evolution calculation
  const calculateNetworth = () => {
    const overallNetworthData = [];
    const networthMap = {};

    const combineValues = (data, key) => {
      data.forEach((entry) => {
        const date = entry.date.substring(0, 7) + "-01";
        if (!networthMap[date]) networthMap[date] = 0;
        networthMap[date] += entry.value;
      });
    };

    combineValues(eurData.values, "EUR");
    combineValues(stockData.values, "Stocks");
    combineValues(goldData.values, "Commodities");
    combineValues(watchesData.values, "TangibleAssets");

    Object.entries(networthMap).forEach(([key, value]) => {
      overallNetworthData.push({ date: key, value });
    });

    return overallNetworthData;
  };

  // Find the best & worst performer
  const calculateDifference = (data) => {
    const firstValue = data[0].value;
    const lastValue = data[data.length - 1].value;
    return (lastValue - firstValue) / firstValue;
  };

  const eurDifference = calculateDifference(eurData.values);
  const stockDifference = calculateDifference(stockData.values);
  const goldDifference = calculateDifference(goldData.values);
  const watchesDifference = calculateDifference(watchesData.values);

  const maxDifference = Math.max(
    eurDifference,
    stockDifference,
    goldDifference,
    watchesDifference
  );
  const minDifference = Math.min(
    eurDifference,
    stockDifference,
    goldDifference,
    watchesDifference
  );

  const normalize = (value) => {
    return (value - minDifference) / (maxDifference - minDifference);
  };

  const normalizedEurDifference = normalize(eurDifference);
  const normalizedStockDifference = normalize(stockDifference);
  const normalizedGoldDifference = normalize(goldDifference);
  const normalizedWatchesDifference = normalize(watchesDifference);

  let bestData, worstData, bestDataName, worstDataName;

  if (
    normalizedEurDifference >= normalizedStockDifference &&
    normalizedEurDifference >= normalizedGoldDifference &&
    normalizedEurDifference >= normalizedWatchesDifference
  ) {
    bestData = eurData;
    bestDataName = "Currencies";
  } else if (
    normalizedStockDifference >= normalizedEurDifference &&
    normalizedStockDifference >= normalizedGoldDifference &&
    normalizedStockDifference >= normalizedWatchesDifference
  ) {
    bestData = stockData;
    bestDataName = "Stocks";
  } else if (
    normalizedGoldDifference >= normalizedEurDifference &&
    normalizedGoldDifference >= normalizedStockDifference &&
    normalizedGoldDifference >= normalizedWatchesDifference
  ) {
    bestData = goldData;
    bestDataName = "Commodities";
  } else {
    bestData = watchesData;
    bestDataName = "Tangible assets";
  }

  if (
    normalizedEurDifference <= normalizedStockDifference &&
    normalizedEurDifference <= normalizedGoldDifference &&
    normalizedEurDifference <= normalizedWatchesDifference
  ) {
    worstData = eurData;
    worstDataName = "Currencies";
  } else if (
    normalizedStockDifference <= normalizedEurDifference &&
    normalizedStockDifference <= normalizedGoldDifference &&
    normalizedStockDifference <= normalizedWatchesDifference
  ) {
    worstData = stockData;
    worstDataName = "Stocks";
  } else if (
    normalizedGoldDifference <= normalizedEurDifference &&
    normalizedGoldDifference <= normalizedStockDifference &&
    normalizedGoldDifference <= normalizedWatchesDifference
  ) {
    worstData = goldData;
    worstDataName = "Commodities";
  } else {
    worstData = watchesData;
    worstDataName = "Tangible assets";
  }

  // States
  const [overallNetworthData, setOverallNetworthData] = useState([]);

  // Effects
  useEffect(() => {
    const calculatedNetworthData = calculateNetworth();
    setOverallNetworthData(calculatedNetworthData);
  }, []);

  return (
    <div className="dashboard-main-container">
      <Header />
      <div className="dashboard-main-grid-container">
        <div className="dashboard-big-square-grid-container">
          <Plot
            data={[
              {
                name: "",
                type: "scatter",
                mode: "lines+markers",
                line: {
                  shape: "spline",
                  width: 3,
                },
                x: eurData.values.map((entry) => entry.date),
                y: eurData.values.map((entry) => entry.value),
                marker: {
                  color: "#00CB7A",
                  size: 10,
                  hoverlabel: {
                    font: {
                      family: "Hanken Grotesk",
                    },
                  },
                },
                hovertemplate: "<b>Currency</b><br>%{y:,.0f} €<br>%{x|%b, %Y}",
              },
              {
                name: "",
                type: "scatter",
                mode: "lines+markers",
                line: {
                  shape: "spline",
                  width: 3,
                },
                x: stockData.values.map((entry) => entry.date),
                y: stockData.values.map((entry) => entry.value),
                marker: {
                  color: "#C0EB1F",
                  size: 10,
                  hoverlabel: {
                    font: {
                      family: "Hanken Grotesk",
                    },
                  },
                },
                hovertemplate: "<b>Stocks</b><br>%{y:,.0f} €<br>%{x|%b, %Y}",
              },
              {
                name: "",
                type: "scatter",
                mode: "lines+markers",
                line: {
                  shape: "spline",
                  width: 3,
                },
                x: goldData.values.map((entry) => entry.date),
                y: goldData.values.map((entry) => entry.value),
                marker: {
                  color: "#E9D0CF",
                  size: 10,
                  hoverlabel: {
                    font: {
                      family: "Hanken Grotesk",
                    },
                  },
                },
                hovertemplate:
                  "<b>Commodities</b><br>%{y:,.0f} €<br>%{x|%b, %Y}",
              },
              {
                name: "",
                type: "scatter",
                mode: "lines+markers",
                line: {
                  shape: "spline",
                  width: 3,
                },
                x: watchesData.values.map((entry) => entry.date),
                y: watchesData.values.map((entry) => entry.value),
                marker: {
                  color: "#BDAFE8",
                  size: 10,
                  hoverlabel: {
                    font: {
                      family: "Hanken Grotesk",
                    },
                  },
                },
                hovertemplate:
                  "<b>Tangible assets</b><br>%{y:,.0f} €<br>%{x|%b, %Y}",
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
                gridcolor: "#3f3f3f",
                gridwidth: 1,
              },
              xaxis: {
                tickfont: {
                  amily: "Hanken Grotesk",
                  color: "#636363",
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
                name: "",
                type: "scatter",
                mode: "lines+markers",
                line: {
                  shape: "spline",
                },
                x: overallNetworthData.map((entry) => entry.date),
                y: overallNetworthData.map((entry) => entry.value),
                marker: { color: "#262626" },
                hovertemplate: "<b>Overall</b><br>%{y:,.0f} €<br>%{x|%b, %Y}",
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
                x: 0.065,
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
                  color: "#a5a5a5",
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
                name: "",
                type: "scatter",
                mode: "lines+markers",
                line: {
                  shape: "spline",
                },
                x: worstData.values.map((entry) => entry.date),
                y: worstData.values.map((entry) => entry.value),
                marker: { color: "white" },
                hovertemplate: "<b>Worst</b><br>%{y:,.0f} €<br>%{x|%b, %Y}",
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{
              title: {
                text: `Worst - ${worstDataName}`,
                font: {
                  family: "Hanken Grotesk",
                  color: "white",
                  size: 25,
                },
                xref: "x",
                x: 0.12,
              },
              annotations: [
                {
                  text: "The worst perfomer overall.",
                  showarrow: false,
                  xref: "paper",
                  yref: "paper",
                  x: -0.2,
                  y: -0.3,
                  xanchor: "left",
                  yanchor: "bottom",
                  font: {
                    family: "Hanken Grotesk",
                    color: "white",
                  },
                },
              ],
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
                showticklabels: false,
              },
            }}
          />
        </div>
        <div className="dashboard-small-square-grid-container-right">
          <Plot
            data={[
              {
                name: "",
                type: "scatter",
                mode: "lines+markers",
                line: {
                  shape: "spline",
                },
                x: bestData.values.map((entry) => entry.date),
                y: bestData.values.map((entry) => entry.value),
                marker: { color: "#262626" },
                hovertemplate: "<b>Best</b><br>%{y:,.0f} €<br>%{x|%b, %Y}",
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            config={{ responsive: true }}
            layout={{
              title: {
                text: `Best - ${bestDataName}`,
                font: {
                  family: "Hanken Grotesk",
                  color: "#262626",
                  size: 25,
                },
                xref: "x",
                x: 0.12,
              },
              annotations: [
                {
                  text: "The best perfomer overall.",
                  showarrow: false,
                  xref: "paper",
                  yref: "paper",
                  x: -0.15,
                  y: -0.2,
                  xanchor: "left",
                  yanchor: "top",
                  font: {
                    family: "Hanken Grotesk",
                    color: "#262626",
                  },
                },
              ],
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
                showticklabels: false,
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
