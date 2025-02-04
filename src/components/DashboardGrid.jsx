import { styled } from "styled-components";
import { Card } from "./Card";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 16px;
  max-height: 80vh;
`;

export const Div1 = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
`;

export const Div2 = styled.div`
  grid-column: span 3 / span 3;
  grid-row: span 3 / span 3;
  grid-column-start: 3;
`;

export const Div3 = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-column-start: 6;
`;

export const Div4 = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;
  grid-row-start: 3;
`;

export const Div5 = styled.div`
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
  grid-column-start: 3;
  grid-row-start: 4;
`;

export const Div6 = styled.div`
  grid-column: span 3 / span 3;
  grid-row: span 3 / span 3;
  grid-column-start: 5;
  grid-row-start: 4;
`;

export const DashboardGrid = ({ div1, div2, div3, div4, div5, div6 }) => {
  return (
    <Grid>
      <Div1>
        <Card>{div1 || <p>Div 1</p>}</Card>
      </Div1>
      <Div2>
        <Card>{div2 || <p>Div 2</p>}</Card>
      </Div2>
      <Div3>
        <Card>{div3 || <p>Div 3</p>}</Card>
      </Div3>
      <Div4>
        <Card>{div4 || <p>Div 4</p>}</Card>
      </Div4>
      <Div5>
        <Card>{div5 || <p>Div 5</p>}</Card>
      </Div5>
      <Div6>
        <Card>{div6 || <p>Div 6</p>}</Card>
      </Div6>
    </Grid>
  );
};
