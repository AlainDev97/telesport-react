import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Pie, getElementAtEvent } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js";

import type { Olympic } from "../models/Olympic";
import { calculateTotalMedals } from "../utils/olympicCalculations";

interface MedalsPieChartProps {
  countries: Olympic[];
}

export const MedalsPieChart = ({ countries }: MedalsPieChartProps) => {
  const navigate = useNavigate();

  const chartRef = useRef<ChartJS<"pie"> | null>(null);

  const chartData = {
    labels: countries.map((country) => country.country),

    datasets: [
      {
        label: "Total des médailles",

        data: countries.map((country) => calculateTotalMedals(country)),

        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    onHover: (
      _event: unknown,
      elements: { index: number }[],
      chart: { canvas: HTMLCanvasElement },
    ) => {
      chart.canvas.style.cursor = elements.length > 0 ? "pointer" : "default";
    },

    plugins: {
      legend: {
        position: "bottom" as const,

        labels: {
          color: "white",
        },
      },
    },
  };

  const handleChartClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const chart = chartRef.current;

    if (!chart) return;

    const elements = getElementAtEvent(chart, event);

    if (elements.length === 0) return;

    const countryIndex = elements[0].index;

    const selectedCountry = countries[countryIndex];

    if (!selectedCountry) return;

    navigate(`/country/${selectedCountry.id}`);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="h-100">
        <Pie
          ref={chartRef}
          data={chartData}
          options={chartOptions}
          onClick={handleChartClick}
        />
      </div>
    </div>
  );
};
