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
        to: DashboardRoutes.dashboard,
        icon: <DashboardIcon />,
        title: "Dashboard",
      },
      {
        to: DashboardRoutes.messages,
        icon: <MessagesIcon />,
        title: "Wiadomości",
        messagesNumber: 56,
      },
      {
        to: DashboardRoutes.animalCards,
        icon: <AnimalsCardsIcon />,
        title: "Karty zwierząt",
      },
      {
        to: DashboardRoutes.voluntary,
        icon: <VoluntaryIcon />,
        title: "Wolontariat",
      },
    ],
  },
  secondMenu: {
    title: "ORGANIZACJA",
    elements: [
      {
        to: DashboardRoutes.employees,
        icon: <EmployeesIcon />,
        title: "Pracownicy",
      },
    ],
  },
};


