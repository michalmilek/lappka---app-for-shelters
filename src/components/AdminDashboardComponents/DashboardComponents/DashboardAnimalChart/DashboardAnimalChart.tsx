import Typography from "components/SharedComponents/Typography/Typography";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { getColor } from "utils/styles/getStyle/getColor";
import {
  StyledArrowUpIcon,
  StyledDashboardChartContainer,
  StyledDashboardChartTitleContainer,
} from "./DashboardAnimalChart.styled";
import Button from "components/SharedComponents/Button/Button";
import { CalendarIcon } from "components/SharedComponents/icons/icons";
import useDeviceType from "hooks/useDeviceType";
import DashboardChartDropdown from "./DashboardChartDropdown";

const data = [
  {
    name: "Sty",
    views: 1500,
  },
  {
    name: "Lut",
    views: 5500,
  },
  {
    name: "Mar",
    views: 7000,
  },
  {
    name: "Kwi",
    views: 5500,
  },
  {
    name: "Maj",
    views: 3500,
  },
  {
    name: "Cze",
    views: 11000,
  },
  {
    name: "Lip",
    views: 15300,
  },
  {
    name: "Sie",
    views: 16200,
  },
  {
    name: "Wrz",
    views: 0,
  },
  {
    name: "Paź",
    views: 0,
  },
  {
    name: "Lis",
    views: 0,
  },
  {
    name: "Gru",
    views: 0,
  },
];

const DashboardAnimalChart = () => {
  const [activeMonth, setActiveMonth] = useState<null | number>(null);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [timeSelect, setTimeSelect] = useState("Month");
  const deviceType = useDeviceType();

  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return tickItem.toString();
    const newItem = tickItem.toString();
    const newItem2 = newItem.substring(0, newItem.length - 3);
    return newItem2;
  };

  const handleTimeSelectChange = (value: string) => {
    setTimeSelect(value);
  };

  return (
    <StyledDashboardChartContainer>
      <StyledDashboardChartTitleContainer>
        <Typography variant="UI/UI Text 16 Semi Bold">
          Liczba wyświetleń podopiecznych
        </Typography>
        <Button
          onClick={() => setIsDropDownActive((prev) => !prev)}
          size="Medium"
          variant="outline">
          <CalendarIcon />
          Rok
          <StyledArrowUpIcon isDropDownActive={isDropDownActive} />
        </Button>
        {isDropDownActive && (
          <DashboardChartDropdown
            timeSelect={timeSelect}
            handleTimeSelectChange={handleTimeSelectChange}
          />
        )}
      </StyledDashboardChartTitleContainer>
      <ResponsiveContainer
        width={"100%"}
        height={deviceType === "mobile" ? 300 : 350}>
        <BarChart
          width={150}
          height={150}
          data={data}
          margin={{ top: 50, right: 30, bottom: 50, left: 30 }}>
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 20000]}
            tickFormatter={formatYAxis}>
            <Label
              value="       Tyś"
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
            dataKey="views"
            radius={[4, 4, 0, 0]}>
            {data.map((_entry, index) => (
              <Cell
                onClick={() => setActiveMonth(index)}
                cursor="pointer"
                fill={
                  index === activeMonth
                    ? getColor("primary500")
                    : getColor("midGray5")
                }
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledDashboardChartContainer>
  );
};

export default DashboardAnimalChart;
