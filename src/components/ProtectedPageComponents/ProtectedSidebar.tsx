import {
  AnimalsCardsIcon,
  ArrowDownIcon,
  DashboardIcon,
  EmployeesIcon,
  MessagesIcon,
  VoluntaryIcon,
} from "components/SharedComponents/icons/icons";
import StyledNavLink from "components/SharedComponents/NavLink/SidebarNavLink";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import LappkaLogo from "./LappkaLogo.png";
import {
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
} from "./ProtectedSidebar.styled";
import DummyAvatar from "./DummyAvatar.png";
import { useClickOutside } from "./utils";
import { protectedRoutesFirstList } from "router/router";

const firstMenu = [
  { to: "/dashboard", icon: <DashboardIcon />, title: "Dashboard" },
  {
    to: "/dashboard/messages",
    icon: <MessagesIcon />,
    title: "Wiadomości",
    messagesNumber: 56,
  },
  {
    to: "/dashboard/animal-cards",
    icon: <AnimalsCardsIcon />,
    title: "Karty zwierząt",
  },
  { to: "/dashboard/voluntary", icon: <VoluntaryIcon />, title: "Wolontariat" },
];

const ProtectedSidebar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const userMenuDropdownRef = useRef<HTMLUListElement>(null);

  useClickOutside(userMenuDropdownRef, () => setIsDropdownActive(false));

  return (
    <StyledSidebar>
      <StyledSidebarTopMenu>
        <StyledSidebarLogo
          src={LappkaLogo}
          alt={"Lappka Logo"}
        />

        <StyledSidebarList>
          {firstMenu.map((item, index) => (
            <StyledNavLink
              key={item.title + index}
              to={item.to}
              icon={item.icon}
              text={item.title}
            />
          ))}
        </StyledSidebarList>
        <StyledOrganisationListTitleContainer>
          <Typography
            color="midGray3"
            variant="UI Small/UI Text 12 Semi Bold">
            ORGANIZACJA
          </Typography>
        </StyledOrganisationListTitleContainer>
        <StyledOrganisationListContainer>
          <StyledNavLink
            text="Pracownicy"
            to={"/dashboard/organisation/employees"}
            icon={<EmployeesIcon />}
          />
        </StyledOrganisationListContainer>
      </StyledSidebarTopMenu>

      <StyledUserMenu onClick={() => setIsDropdownActive(true)}>
        <img
          src={DummyAvatar}
          alt="user avatar"
        />
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
        {isDropdownActive && (
          <StyledUserMenuDropdown ref={userMenuDropdownRef}>
            <StyledUserMenuDropdownItem>
              <Typography
                color="darkGray1"
                variant="UI/UI Text 14 Reg">
                Ustawienia konta
              </Typography>
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

export default ProtectedSidebar;
