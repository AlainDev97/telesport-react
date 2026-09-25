import { Line } from "react-chartjs-2";

import type { Olympic } from "../models/Olympic";

interface MedalsEvolutionChartProps {
  country: Olympic;
}

export const MedalsEvolutionChart = ({
  country,
}: MedalsEvolutionChartProps) => {
  const participations = [...country.participations].sort(
    (a, b) => a.year - b.year,
  );

  const evolutionData = {
    labels: participations.map((participation) =>
      participation.year.toString(),
    ),

    datasets: [
      {
        label: "Nombre de médailles",

        data: participations.map((participation) => participation.medalsCount),

        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const evolutionOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top" as const,

        labels: {
          color: "white",
        },
      },
    },

    scales: {
      y: {
        ticks: {
          color: "white",
        },

        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },

      x: {
        ticks: {
          color: "white",
        },

        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div className="h-100">
        <Line data={evolutionData} options={evolutionOptions} />
      </div>
    </div>
  );
};
