import {
  ArrowDownIcon,
  DashboardIcon,
  EmployeesIcon,
} from "components/SharedComponents/icons/icons";
import StyledNavLink from "components/SharedComponents/NavLink/SidebarNavLink";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useEffect, useRef, useState } from "react";
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

function useClickOutside(
  ref: React.RefObject<HTMLUListElement>,
  callback: () => void
) {
  function handleClickOutside(event: MouseEvent) {
    if (
      ref.current &&
      !ref.current.contains(event.target as HTMLUListElement)
    ) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

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
          <StyledNavLink
            to={"/dashboard"}
            icon={<DashboardIcon />}>
            Dashboard
          </StyledNavLink>
          <StyledNavLink
            to={"/dashboard/messages"}
            icon={<DashboardIcon />}>
            Wiadomości
          </StyledNavLink>
          <StyledNavLink
            to={"/dashboard/animal-cards"}
            icon={<DashboardIcon />}>
            Karty zwierząt
          </StyledNavLink>
          <StyledNavLink
            to={"/dashboard/animal-cards"}
            icon={<DashboardIcon />}>
            Wolontariat
          </StyledNavLink>
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
            to={"/dashboard/organisation/employees"}
            icon={<EmployeesIcon />}>
            Pracownicy
          </StyledNavLink>
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
