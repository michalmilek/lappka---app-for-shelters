import { t } from "i18next";
import React from "react";
import { TimeType } from "./DashboardAnimalChart";

export const cutTo3Letters = (word: string) => {
  if (word.length <= 3) {
    return word;
  } else {
    return word.slice(0, 3);
  }
};

const getMonthNameByIndex = (index: number) => {
  const monthNames = [
    cutTo3Letters(t("months.january")),
    cutTo3Letters(t("months.february")),
    cutTo3Letters(t("months.march")),
    cutTo3Letters(t("months.april")),
    cutTo3Letters(t("months.may")),
    cutTo3Letters(t("months.june")),
    cutTo3Letters(t("months.july")),
    cutTo3Letters(t("months.august")),
    cutTo3Letters(t("months.september")),
    cutTo3Letters(t("months.october")),
    cutTo3Letters(t("months.november")),
    cutTo3Letters(t("months.december")),
  ];

  return monthNames[index] || "";
};

export function cutToFirstLetter(word: string) {
  return word.substring(0, 1);
}

export const emptyFn = <T extends { toString(): string }>(tickItem: T) => {
  return tickItem.toString();
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

/* const getDayNameByIndexInMonth = (index: number) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dayNames = Array.from({ length: daysInMonth }, (_, i) =>
    (i + 1).toString()
  );

  return dayNames[index - 1] || "";
}; */

export const createMonthData = (data: number[]) => {
  if (data.length !== 7) {
    throw new Error("Tydzień ma 7 dni...");
  }

  const monthData = data.map((views, index) => {
    const dayName = getDayNameByIndex(index);
    return {
      name: dayName,
      views: views,
    };
  });

  return monthData;
};

const getDayNameByIndex = (index: number) => {
  const dayNames = [
    cutTo3Letters(t("week.monday")),
    cutTo3Letters(t("week.tuesday")),
    cutTo3Letters(t("week.wednesday")),
    cutTo3Letters(t("week.thursday")),
    cutTo3Letters(t("week.friday")),
    cutTo3Letters(t("week.saturday")),
    cutTo3Letters(t("week.sunday")),
  ];

  return dayNames[index % 7] || "";
};

export const createWeekData = (data: number[]) => {
  const weekData = Array.from({ length: 7 }, (_, index) => {
    const dayName = getDayNameByIndex(index);
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
      return t("dashboard:animalChart.month");
    case "Year":
      return t("dashboard:animalChart.year");
    case "Week":
      return t("dashboard:animalChart.week");
    default:
      return t("dashboard:animalChart.year");
  }
};

export const errorData = [
  { name: "A", views: Math.floor(Math.random() * 100) },
  { name: "B", views: Math.floor(Math.random() * 100) },
  { name: "C", views: Math.floor(Math.random() * 100) },
  { name: "D", views: Math.floor(Math.random() * 100) },
  { name: "E", views: Math.floor(Math.random() * 100) },
];
