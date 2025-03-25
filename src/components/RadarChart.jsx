import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Radar } from "react-chartjs-2";
  import { useTheme } from "styled-components";
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  export const data = {
    labels: [
      "Thing 1",
      "Thing 2",
      "Thing 3",
      "Thing 4",
      "Thing 5",
      "Thing 6",
      "Thing 7",
      "Thing 8",
      "Thing 9",
      "Thing 10",
    ],
    datasets: [
      {
        label: "Me in love",
        data: [15, 0, 0, 40, 0, 27, 20, 25, 26, 27],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "with React",
        data: [15, 27, 26, 25, 20, 27, 0, 0, 40, 0],
        backgroundColor: "rgb(75, 192, 192, 0.4)",
        borderColor: "#63ffd8",
        borderWidth: 1,
      },
    ],
  };
  
  export function RadarChart() {
    const theme = useTheme(); // Obtiene el tema actual
  
    const options = {
      scales: {
        r: {
          angleLines: {
            color: theme.gridColor, // Cambia el color de las líneas del radar según el tema
          },
          grid: {
            color: theme.gridColor, // Cambia el color de la cuadrícula según el tema
          },
          pointLabels: {
            color: theme.text, // Cambia el color de los labels (Thing 1, Thing 2, etc.)
          },
          /* ticks: {
            color: theme.text, // Cambia el color de los valores numéricos en el radar
          }, */
        },
      },
      plugins: {
        legend: {
          labels: {
            color: theme.text, // Cambia el color del texto de la leyenda
          },
        },
      },
    };
  
    return <Radar data={data} options={options} />;
  }
  