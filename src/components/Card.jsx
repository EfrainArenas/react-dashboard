import styled from "styled-components";

const ChartContainer = styled.div`
  /* width: 80%;
  max-width: 600px; */
  display: flex;
  justify-content: center;
    align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Card = ({ children }) => {
  return <ChartContainer>{children}</ChartContainer>;
};
