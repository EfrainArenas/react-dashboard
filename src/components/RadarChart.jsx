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
      data: [15, 0, 0, 30, 0, 27, 20, 25, 26, 27],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "with your company",
      data: [15, 27, 26, 25, 20, 27, 0, 0, 30, 0],
      backgroundColor: "rgba(99, 255, 245, 0.2)",
      borderColor: "#63ffd8",
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
  return <Radar data={data} />;
}
