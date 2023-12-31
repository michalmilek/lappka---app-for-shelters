import Typography from "components/SharedComponents/Typography/Typography";
import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";
import { getColor } from "utils/styles/getStyle/getColor";
import {
  StyledArrowUpIcon,
  StyledDashboardChartContainer,
  StyledDashboardChartTitleContainer,
  StyledResponsiveContainer,
} from "./DashboardAnimalChart.styled";
import Button from "components/SharedComponents/Button/Button";
import { CalendarIcon } from "components/SharedComponents/icons/icons";
import useDeviceType from "hooks/useDeviceType";
import DashboardChartDropdown from "./DashboardChartDropdown";
import {
  ChartData,
  ViewsStateFilled,
} from "./DashboardAnimalChartStateHandler";
import {
  cutToFirstLetter,
  emptyFn,
  getChartTypeTimeByType,
} from "./ChartDataUtils";
import { useTranslation } from "react-i18next";
import CustomTooltip from "./CustomTooltip";

interface Props {
  viewsState: ViewsStateFilled;
  isLoading: boolean;
}

export type TimeType = "Month" | "Year" | "Week";

const DashboardAnimalChart = ({ viewsState, isLoading }: Props) => {
  const { t, i18n } = useTranslation("dashboard");
  const [activeMonth, setActiveMonth] = useState<null | number>(null);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [timeSelect, setTimeSelect] = useState<TimeType>("Year");
  const deviceType = useDeviceType();

  const largerThanTablet = deviceType === "desktop" || deviceType === "laptop";

  const condition = !largerThanTablet && timeSelect === "Year";

  const desktopChartMargin = deviceType === "desktop" ? 10 : 15;

  const getChartDataByType = (type: TimeType): ChartData[] => {
    switch (type) {
      case "Month":
        return viewsState.chartMonthData;
      case "Year":
        return viewsState.chartYearData;
      case "Week":
        return viewsState.chartWeekData;
      default:
        return viewsState.chartYearData;
    }
  };

  const getChartRange = (type: TimeType): number[] => {
    switch (type) {
      case "Month":
        return [0, 10000];
      case "Year":
        return [0, 20000];
      case "Week":
        return [0, 1000];
      default:
        return [0, 20000];
    }
  };

  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return tickItem.toString();
    const newItem = tickItem.toString();
    const newItem2 = newItem.substring(0, newItem.length - 3);
    return newItem2;
  };

  const handleTimeSelectChange = (value: TimeType) => {
    setTimeSelect(value);
  };

  const axisLabelStyle = {
    fontSize: deviceType !== "mobile" ? "16px" : "12px",
    fontWeight: 500,
    fill: "#9AA6AC",
    lineHeight: "16px",
    fontFamily: "Inter",
  };

  return (
    <StyledDashboardChartContainer>
      <StyledDashboardChartTitleContainer>
        <Typography variant="UI/UI Text 16 Semi Bold">
          {t("animalChart.numberOfMentees")}
        </Typography>
        <Button
          onClick={() => setIsDropDownActive((prev) => !prev)}
          size="Medium"
          variant="outline">
          <CalendarIcon />
          {getChartTypeTimeByType(timeSelect)}
          <StyledArrowUpIcon isDropdownActive={isDropDownActive} />
        </Button>

        <DashboardChartDropdown
          isDropDownActive={isDropDownActive}
          timeSelect={timeSelect}
          handleTimeSelectChange={handleTimeSelectChange}
        />
      </StyledDashboardChartTitleContainer>
      <StyledResponsiveContainer
        minHeight={300}
        height={"99%"}
        width={"99%"}>
        <BarChart
          width={400}
          height={300}
          data={getChartDataByType(timeSelect)}
          margin={{
            top: 50,
            right: 30,
            bottom: desktopChartMargin,
            left: desktopChartMargin,
          }}>
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="name"
            tick={axisLabelStyle}
            tickFormatter={condition ? cutToFirstLetter : emptyFn}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            domain={getChartRange(timeSelect)}
            tickFormatter={timeSelect === "Year" ? formatYAxis : emptyFn}>
            <Label
              value={
                timeSelect === "Year"
                  ? t("animalChart.thousands")
                  : timeSelect === "Month"
                  ? t("animalChart.viewsInMonth")
                  : t("animalChart.views")
              }
              position="top"
              offset={30}
              viewBox={{ x: 50 }}
              dx={10}
              dy={0}
            />
          </YAxis>
          <Tooltip
            cursor={false}
            content={<CustomTooltip />}
          />
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
          />
          <Bar
            label={false}
            dataKey="views"
            radius={[4, 4, 0, 0]}>
            {getChartDataByType(timeSelect).map((_entry, index) => (
              <Cell
                onClick={() => setActiveMonth(index)}
                cursor="pointer"
                fill={
                  index === activeMonth
                    ? getColor("primary500")
                    : getColor("midGray5")
                }
                key={`cell-${index + Math.random() * 10000}`}
              />
            ))}
          </Bar>
        </BarChart>
      </StyledResponsiveContainer>
    </StyledDashboardChartContainer>
  );
};

export default DashboardAnimalChart;
