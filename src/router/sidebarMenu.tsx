import {
  AnimalsCardsIcon,
  DashboardIcon,
  EmployeesIcon,
  MessagesIcon,
  VoluntaryIcon,
} from "components/SharedComponents/icons/icons";
import { DashboardRoutes } from "./router";

export const menu = {
  firstMenu: {
    title: "",
    elements: [
      {
        to: DashboardRoutes.DASHBOARD,
        icon: <DashboardIcon />,
        title: "Dashboard",
      },
      {
        to: DashboardRoutes.MESSAGES,
        icon: <MessagesIcon />,
        title: "Wiadomości",
        messagesNumber: 56,
      },
      {
        to: DashboardRoutes.ANIMALCARDS,
        icon: <AnimalsCardsIcon />,
        title: "Karty zwierząt",
      },
      {
        to: DashboardRoutes.VOLUNTARY,
        icon: <VoluntaryIcon />,
        title: "Wolontariat",
      },
    ],
  },
  secondMenu: {
    title: "ORGANIZACJA",
    elements: [
      {
        to: DashboardRoutes.EMPLOYEES,
        icon: <EmployeesIcon />,
        title: "Pracownicy",
      },
    ],
  },
};


