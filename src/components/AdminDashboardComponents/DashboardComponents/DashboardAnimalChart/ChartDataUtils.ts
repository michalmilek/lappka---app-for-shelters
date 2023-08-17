import React from "react";
import { TimeType } from "./DashboardAnimalChart";

const getMonthNameByIndex = (index: number) => {
  const monthNames = [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru",
  ];

  return monthNames[index] || "";
};

export const createYearData = (data: number[]) => {
  const yearData = Array.from({ length: 12 }, (_, index) => {
    const monthName = getMonthNameByIndex(index);
    const views = data[index] || 0;

    return {
      name: monthName,
      views: views,
    };
  });

  return yearData;
};

const getDayNameByIndexInMonth = (index: number) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayNames = Array.from({ length: daysInMonth }, (_, i) =>
    (i + 1).toString()
  );

  return dayNames[index - 1] || "";
};

export const createMonthData = (data: number[]) => {
  const monthData = data.map((_views, index) => {
    const dayIndex = index + 1;
    const dayName = getDayNameByIndexInMonth(dayIndex);
    const views = data[index] || 0;

    return {
      name: dayName,
      views: views,
    };
  });

  return monthData;
};

const getDayNameByIndex = (index: number) => {
  const dayNames = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"];

  return dayNames[index % 7] || "";
};

export const createWeekData = (data: number[]) => {
  const weekData = Array.from({ length: 7 }, (_, index) => {
    const dayIndex = index + 1;
    const dayName = getDayNameByIndex(dayIndex);
    const views = data[index] || 0;

    return {
      name: dayName,
      views: views,
    };
  });

  return weekData;
};

export const getChartTypeTimeByType = (type: TimeType): string => {
  switch (type) {
    case "Month":
      return "Miesiąc";
    case "Year":
      return "Rok";
    case "Week":
      return "Tydzień";
    default:
      return "Rok";
  }
};


  export const errorData = [
    { name: "A", views: Math.floor(Math.random() * 100) },
    { name: "B", views: Math.floor(Math.random() * 100) },
    { name: "C", views: Math.floor(Math.random() * 100) },
    { name: "D", views: Math.floor(Math.random() * 100) },
    { name: "E", views: Math.floor(Math.random() * 100) },
  ];