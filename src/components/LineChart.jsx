import { Line } from "react-chartjs-2";
import { useTheme } from "styled-components";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title,
} from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title
);

const LineChart = () => {
  const theme = useTheme();

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [5, 10, 30, 28, 64, 60, 100],
        borderColor: "rgba(75,192,192,1)",
        /* backgroundColor: "rgba(75,192,192,0.2)", */
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "#fff",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Happiness level if you hire me",
        color: theme.text,
      },
      tooltip: {
        
        enabled: true, // Ensure tooltips are enabled
        callbacks: {
          label: function (context) {
            const value = context.raw; // Get the value of the data point
            return `Sales: ${value}`;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
        labels: {
            color: theme.text, // Cambia el color de la leyenda
          },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
            color: theme.text, // Cambia el color de los labels del eje X
          },
      },
      y: {
        grid: {
          color: theme.gridColor, // Cambia el color de la cuadrícula
        },
        ticks: {
            color: theme.text, // Cambia el color de los labels del eje X
          },
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
