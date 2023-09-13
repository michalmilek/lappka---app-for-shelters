import {
  AnimalsCardsIcon,
  DashboardIcon,
  EmployeesIcon,
  MessagesIcon,
  VoluntaryIcon,
} from "components/SharedComponents/icons/icons";
import { DashboardRoutes } from "./router";
import { t } from "i18next";

export const menu = {
  firstMenu: {
    title: "",
    elements: [
      {
        to: DashboardRoutes.dashboard,
        icon: <DashboardIcon />,
        title: "sidebar.dashboard",
      },
      {
        to: DashboardRoutes.messages,
        icon: <MessagesIcon />,
        title: "sidebar.messages",
        messagesNumber: 56,
      },
      {
        to: DashboardRoutes.animalCards,
        icon: <AnimalsCardsIcon />,
        title: "sidebar.animalCards",
      },
      {
        to: DashboardRoutes.voluntary,
        icon: <VoluntaryIcon />,
        title: "sidebar.voluntary",
      },
    ],
  },
  secondMenu: {
    title: "sidebar.organisation",
    elements: [
      {
        to: DashboardRoutes.employees,
        icon: <EmployeesIcon />,
        title: "sidebar.employees",
      },
    ],
  },
};


