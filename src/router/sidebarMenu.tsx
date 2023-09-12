import {
  AnimalsCardsIcon,
  DashboardIcon,
  EmployeesIcon,
  MessagesIcon,
  VoluntaryIcon,
} from "components/SharedComponents/icons/icons";
import { DashboardRoutes } from "./router";
import i18next from "i18next";

export const menu = {
  firstMenu: {
    title: "",
    elements: [
      {
        to: DashboardRoutes.dashboard,
        icon: <DashboardIcon />,
        title: i18next.t("sidebar.dashboard"),
      },
      {
        to: DashboardRoutes.messages,
        icon: <MessagesIcon />,
        title: i18next.t("sidebar.messages"),
        messagesNumber: 56,
      },
      {
        to: DashboardRoutes.animalCards,
        icon: <AnimalsCardsIcon />,
        title: i18next.t("sidebar.animalCards"),
      },
      {
        to: DashboardRoutes.voluntary,
        icon: <VoluntaryIcon />,
        title: i18next.t("sidebar.voluntary"),
      },
    ],
  },
  secondMenu: {
    title: i18next.t("sidebar.organisation"),
    elements: [
      {
        to: DashboardRoutes.employees,
        icon: <EmployeesIcon />,
        title: i18next.t("sidebar.employees"),
      },
    ],
  },
};


