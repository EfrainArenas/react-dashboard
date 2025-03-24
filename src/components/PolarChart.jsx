import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { useTheme } from "styled-components";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [6, 5, 4],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PolarChart() {
  const theme = useTheme();

  const options = {
    plugins: {
      legend: {
        labels: {
          color: theme.text,
        },
      },
    },
    scales: {
        r: {
            angleLines: {
            color: theme.gridColor,
            },
            grid: {
            color: theme.gridColor,
            },
            pointLabels: {
            font: {
                color: theme.text,
            },
            },
        }
    },
    responsive: true,
  };

  return <PolarArea data={data} options={options}/>;
}
