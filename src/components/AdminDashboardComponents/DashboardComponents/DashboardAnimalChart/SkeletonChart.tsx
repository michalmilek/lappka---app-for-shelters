import useDeviceType from "hooks/useDeviceType";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { keyframes, styled } from "styled-components";
import { errorData } from "./ChartDataUtils";
import { StyledResponsiveContainer } from "./ErrorChart";

const shimmer = keyframes`
  0% {
    background-position: -600px 0;
  }
  100% {
    background-position: 600px 0;
  }
`;

export const SkeletonChartContainer = styled.div`
  position: relative;
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 600px 100%;
  height: 100%;
  width: 100%;
  min-height: 36vh;
  border-radius: 8px;
  grid-area: b;
  box-shadow: 0px 1px 2px 0px #1018280f, 0px 1px 3px 0px #1018281a;
  animation: ${shimmer} 1.5s infinite;
`;

const SkeletonChart = () => {
  return (
    <SkeletonChartContainer>
      <StyledResponsiveContainer
        height={"99%"}
        width={"99%"}>
        <BarChart
          width={400}
          height={300}
          data={errorData}
          margin={{ top: 50, right: 30, bottom: 50, left: 30 }}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]}>
            <Label
              value="Views"
              position="top"
              offset={30}
              viewBox={{ x: 50 }}
              dx={10}
              dy={0}
            />
          </YAxis>
          <Tooltip />
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
          />
          <Bar
            label={false}
            dataKey="views"
            radius={[4, 4, 0, 0]}
            fill="#8884d8"
          />
        </BarChart>
      </StyledResponsiveContainer>
    </SkeletonChartContainer>
  );
};

export default SkeletonChart;
