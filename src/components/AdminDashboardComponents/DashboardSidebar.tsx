import {
  AnimalsCardsIcon,
  DashboardIcon,
  EmployeesIcon,
  MessagesIcon,
  VoluntaryIcon,
} from "components/SharedComponents/icons/icons";
import StyledNavLink from "components/SharedComponents/NavLink/SidebarNavLink";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useRef, useState } from "react";
import LappkaLogo from "./LappkaLogo.png";
import LappkaMobileLogo from "./LappkaMobileLogo.png";
import {
  StyledLink,
  StyledOrganisationListContainer,
  StyledOrganisationListTitleContainer,
  StyledSidebar,
  StyledSidebarArrowDownIcon,
  StyledSidebarList,
  StyledSidebarLogo,
  StyledSidebarTopMenu,
  StyledUserMenu,
  StyledUserMenuDropdown,
  StyledUserMenuDropdownItem,
  StyledUserMenuNameContainer,
} from "./DashboardSidebar.styled";
import DummyAvatar from "./DummyAvatar.png";
import { useClickOutside } from "./utils";
import useDeviceType from "hooks/useDeviceType";
import { DashboardRoutes } from "router/router";

const firstMenu = [
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
];

const DashboardSidebar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const userMenuDropdownRef = useRef<HTMLUListElement>(null);
  const deviceType = useDeviceType();

  useClickOutside(userMenuDropdownRef, () => setIsDropdownActive(false));
  return (
    <StyledSidebar>
      <StyledSidebarTopMenu>
        <StyledSidebarLogo
          src={
            deviceType === "tablet" || deviceType === "mobile"
              ? LappkaMobileLogo
              : LappkaLogo
          }
          alt={"Lappka Logo"}
        />

        <StyledSidebarList>
          {firstMenu.map((item, index) => (
            <StyledNavLink
              key={item.title + index}
              to={item.to}
              icon={item.icon}
              text={item.title}
              end
            />
          ))}
        </StyledSidebarList>
        <StyledOrganisationListTitleContainer>
          <Typography
            color="midGray3"
            variant="UI Small/UI Text 12 Semi Bold">
            {deviceType === "mobile" || deviceType === "tablet"
              ? "ORG"
              : "ORGANIZACJA"}
          </Typography>
        </StyledOrganisationListTitleContainer>
        <StyledOrganisationListContainer>
          <StyledNavLink
            text="Pracownicy"
            to={DashboardRoutes.EMPLOYEES}
            icon={<EmployeesIcon />}
            end
          />
        </StyledOrganisationListContainer>
      </StyledSidebarTopMenu>

      <StyledUserMenu onClick={() => setIsDropdownActive(true)}>
        <img
          src={DummyAvatar}
          alt="user avatar"
        />
        {(deviceType === "laptop" || deviceType === "desktop") && (
          <div>
            <StyledUserMenuNameContainer>
              <Typography
                color="black"
                variant="UI/UI Text 14 Med">
                Jan Kowalski
              </Typography>
              <StyledSidebarArrowDownIcon isDropdownActive={isDropdownActive} />
            </StyledUserMenuNameContainer>
            <Typography
              color="primary600"
              variant="UI Small/UI Text 12 Reg">
              Psiaki Adapciaki z Psiej Wioski
            </Typography>
          </div>
        )}
        {isDropdownActive && (
          <StyledUserMenuDropdown ref={userMenuDropdownRef}>
            <StyledUserMenuDropdownItem>
              <StyledLink to={DashboardRoutes.ACCOUNTSETTINGS}>
                <Typography
                  color="darkGray1"
                  variant="UI/UI Text 14 Reg">
                  Ustawienia konta
                </Typography>
              </StyledLink>
            </StyledUserMenuDropdownItem>
            <StyledUserMenuDropdownItem>
              <Typography variant="UI/UI Text 14 Reg">Wyloguj się</Typography>
            </StyledUserMenuDropdownItem>
          </StyledUserMenuDropdown>
        )}
      </StyledUserMenu>
    </StyledSidebar>
  );
};

export default DashboardSidebar;
