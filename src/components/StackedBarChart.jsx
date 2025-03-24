import React from "react";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 300, 400, 500, 600, 700],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: [150, 250, 350, 450, 550, 650, 750],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: [200, 300, 400, 500, 600, 700, 800],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 1",
    },
  ],
};

export function StackedBarChart() {
  const theme = useTheme(); // Obtiene el tema actual

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Cool bar chart :)",
        color: theme.text, // Cambia el color del título
      },
      legend: {
        labels: {
          color: theme.text, // Cambia el color de la leyenda
        },
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
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

  return <Bar options={options} data={data} />;
}
