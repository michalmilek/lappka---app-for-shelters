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
import {
  useShelterCardsArchiveChartData,
  useShelterCardsArchiveChartDataForMonth,
} from "apiCalls/pet/petHooks";

const DashboardAnimalChart = () => {
  const [activeMonth, setActiveMonth] = useState<null | number>(null);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [timeSelect, setTimeSelect] = useState("Month");
  const deviceType = useDeviceType();
  const {
    data: chartData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useShelterCardsArchiveChartData();
  const {
    data: chartMonthData,
    isLoading: isLoadingMonth,
    isError: isErrorMonth,
    error: errorMonth,
    isSuccess: isSuccessMonth,
  } = useShelterCardsArchiveChartDataForMonth();

  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return tickItem.toString();
    const newItem = tickItem.toString();
    const newItem2 = newItem.substring(0, newItem.length - 3);
    return newItem2;
  };

  const handleTimeSelectChange = (value: string) => {
    setTimeSelect(value);
  };

  const axisLabelStyle = {
    fontSize: deviceType !== "mobile" ? "16px" : "12px",
    fontWeight: 500,
    fill: "#9AA6AC",
    lineHeight: "16px",
    fontFamily: "Inter",
  };

  if (chartMonthData && isSuccessMonth) {
    const monthData = chartMonthData.map((views, index) => {
      return {
        name: index + 1,
        views: views,
      };
    });
    console.log(monthData);
  }

  if (chartData && isSuccess) {
    const yearData = [
      {
        name: "Sty",
        views: chartData[0],
      },
      {
        name: "Lut",
        views: chartData[1],
      },
      {
        name: "Mar",
        views: chartData[2],
      },
      {
        name: "Kwi",
        views: chartData[3],
      },
      {
        name: "Maj",
        views: chartData[4],
      },
      {
        name: "Cze",
        views: chartData[5],
      },
      {
        name: "Lip",
        views: chartData[6],
      },
      {
        name: "Sie",
        views: chartData[7],
      },
      {
        name: "Wrz",
        views: chartData[8],
      },
      {
        name: "Paź",
        views: chartData[9],
      },
      {
        name: "Lis",
        views: chartData[10],
      },
      {
        name: "Gru",
        views: chartData[11],
      },
    ];

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
            <StyledArrowUpIcon isDropdownActive={isDropDownActive} />
          </Button>

          <DashboardChartDropdown
            isDropDownActive={isDropDownActive}
            timeSelect={timeSelect}
            handleTimeSelectChange={handleTimeSelectChange}
          />
        </StyledDashboardChartTitleContainer>
        <ResponsiveContainer
          width={"100%"}
          height={deviceType === "mobile" ? 300 : 350}>
          <BarChart
            width={150}
            height={150}
            data={yearData}
            margin={{ top: 50, right: 30, bottom: 50, left: 30 }}>
            <XAxis
              dataKey="name"
              tick={axisLabelStyle}
            />
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
              label={false}
              dataKey="views"
              radius={[4, 4, 0, 0]}>
              {chartData.map((_entry, index) => (
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
  }

  return null;
};

export default DashboardAnimalChart;
