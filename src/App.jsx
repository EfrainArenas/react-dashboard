import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./globalStyles";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { DashboardGrid } from "./components/DashboardGrid";
import { styled } from "styled-components";
import { DoughnutChart } from "./components/DoughnutChart";
import { RadarChart } from "./components/RadarChart";
import { AreaChart } from "./components/AreaChart";
import { PolarChart } from "./components/PolarChart";
import { StackedBarChart } from "./components/StackedBarChart";
import { ThemeToggle } from "./components/ThemeToggle";

const Banner = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
    flex: 1;
    padding: 20px;
    h1 {
        margin: 0;
    }
    h2 {
        margin: 0;
        color: #777;
    }
`;

function App() {
  const getInitialTheme = () => {
    return localStorage.getItem("theme") || "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Banner>
          <Title>
            <h1>Dashboard Example</h1>
            <h2>By: Efraín Arenas</h2>
          </Title>
          <ThemeToggle toggleTheme={toggleTheme} />
        </Banner>
        <DashboardGrid
          div1={<LineChart />}
          div2={<StackedBarChart />}
          div3={<DoughnutChart />}
          div4={<RadarChart />}
          div5={<PolarChart />}
          div6={<BarChart />}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
