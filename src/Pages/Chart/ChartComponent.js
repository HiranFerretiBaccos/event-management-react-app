import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ChartComponent({ chartDataProps }) {
    return <Bar data={chartDataProps} />;
}

export default ChartComponent;