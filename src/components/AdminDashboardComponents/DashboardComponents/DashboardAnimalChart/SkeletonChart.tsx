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
import { getColor } from "utils/styles/getStyle/getColor";
import { errorData } from "./ChartDataUtils";
import { StyledResponsiveContainer } from "./ErrorChart";

const pulseAnimation = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.4;
}
`;

export const SkeletonChartContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  grid-area: b;
  background: ${getColor("darkGray2")};
  box-shadow: 0px 1px 2px 0px #1018280f;
  box-shadow: 0px 1px 3px 0px #1018281a;
  animation: ${pulseAnimation} 1.5s infinite;
`;

const SkeletonChart = () => {
  const deviceType = useDeviceType();
  return (
    <SkeletonChartContainer>
      <StyledResponsiveContainer
        width={"100%"}
        height={deviceType === "mobile" ? 300 : 350}>
        <BarChart
          width={150}
          height={150}
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
