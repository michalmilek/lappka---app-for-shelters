import useDeviceType from "hooks/useDeviceType";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled, { keyframes } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { errorData } from "./ChartDataUtils";

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-area: b;
  background-color: #ffffff;
  border-radius: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${appearAnimation} 0.3s ease-in-out;
`;

const ErrorMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${getColor("darkGray2")};
  font-size: 18px;
  margin: 0;
  padding: 16px;
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  visibility: hidden;
`;

const ErrorChart = () => {
  const deviceType = useDeviceType();

  return (
    <ErrorContainer>
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
      <ErrorMessage>{"Wystąpił błąd podczas pobierania danych."}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorChart;
