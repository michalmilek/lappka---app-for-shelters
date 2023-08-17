import {
  useShelterCardsArchiveChartData,
  useShelterCardsArchiveChartDataForMonth,
  useShelterCardsArchiveChartDataForWeek,
} from "services/pet/petServices";
import React, { useEffect, useState } from "react";
import {
  createMonthData,
  createWeekData,
  createYearData,
} from "./ChartDataUtils.ts";
import DashboardAnimalChart from "./DashboardAnimalChart";
import { SkeletonChart } from "./SkeletonChart";

export type ChartData = {
  name: string;
  views: number;
};

interface ViewsState {
  chartYearData: null | ChartData[];
  chartMonthData: null | ChartData[];
  chartWeekData: null | ChartData[];
}

export interface ViewsStateFilled {
  chartYearData: ChartData[];
  chartMonthData: ChartData[];
  chartWeekData: ChartData[];
}

const DashboardAnimalChartStateHandler = () => {
  const [viewsState, setViewsState] = useState<ViewsState>({
    chartYearData: null,
    chartMonthData: null,
    chartWeekData: null,
  });
  const [isLoadingState, setLoadingState] = useState(true);

  const {
    data: chartYearData,
    isLoading: isLoadingYear,
    isError: isErrorYear,
    error: errorYear,
    isSuccess: isSuccessYear,
  } = useShelterCardsArchiveChartData();
  const {
    data: chartMonthData,
    isLoading: isLoadingMonth,
    isError: isErrorMonth,
    error: errorMonth,
    isSuccess: isSuccessMonth,
  } = useShelterCardsArchiveChartDataForMonth();
  const {
    data: chartWeekData,
    isLoading: isLoadingWeek,
    isError: isErrorWeek,
    error: errorWeek,
    isSuccess: isSuccessWeek,
  } = useShelterCardsArchiveChartDataForWeek();

  useEffect(() => {
    if (chartMonthData && isSuccessMonth) {
      const monthData = createMonthData(chartMonthData);
      setViewsState((prevState) => ({
        ...prevState,
        chartMonthData: monthData,
      }));
    }
  }, [chartMonthData, isSuccessMonth]);

  useEffect(() => {
    if (chartYearData && isSuccessYear) {
      const yearData = createYearData(chartYearData);
      setViewsState((prevState) => ({ ...prevState, chartYearData: yearData }));
    }
  }, [chartYearData, isSuccessYear]);

  useEffect(() => {
    if (chartWeekData && isSuccessWeek) {
      const weekData = createWeekData(chartWeekData);
      setViewsState((prevState) => ({ ...prevState, chartWeekData: weekData }));
    }
  }, [chartWeekData, isSuccessWeek]);

  useEffect(() => {
    if (isLoadingMonth || isLoadingYear || isLoadingWeek) setLoadingState(true);
    else setLoadingState(false);
  }, [isLoadingMonth, isLoadingYear, isLoadingWeek]);

  if (isLoadingState) {
    return <SkeletonChart />;
  } else if (
    viewsState.chartMonthData &&
    viewsState.chartWeekData &&
    viewsState.chartYearData
  ) {
    return (
      <DashboardAnimalChart
        viewsState={viewsState as ViewsStateFilled}
        isLoading={isLoadingState}
      />
    );
  }

  return null;
};

export default DashboardAnimalChartStateHandler;
