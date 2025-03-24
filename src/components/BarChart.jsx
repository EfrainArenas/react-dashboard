import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 300, 400, 500, 600, 700],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [200, 300, 400, 500, 600, 700, 800],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const BarChart = () => {
  const theme = useTheme();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: theme.text,
        },
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
        color: theme.text,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: theme.text, // Cambia el color de los labels del eje X
        },
        grid: {
          color: theme.gridColor, // Cambia el color de la cuadrícula
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: theme.text, // Cambia el color de los valores numéricos del eje Y
        },
        grid: {
          color: theme.gridColor, // Cambia el color de la cuadrícula
        },
      },
    },
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default BarChart;
