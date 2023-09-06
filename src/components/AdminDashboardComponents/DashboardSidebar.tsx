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
import { useEffect } from "react";
import { menu } from "router/sidebarMenu";
import { useSelector } from "react-redux";
import { selectIsMobileMenuOpen } from "redux/mobileMenuSlice";
import { useRevokeToken } from "services/auth/authServices";
import { UnstyledButton } from "components/SharedComponents/Button/Button.styled";

const DashboardSidebar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();
  console.log("🚀 ~ deviceType:", deviceType);
  const isOpen = useSelector(selectIsMobileMenuOpen);
  const { mutate: revokeTokenFn } = useRevokeToken();
  const token = localStorage.getItem("refreshToken");

  useClickOutside(userMenuRef, () => setIsDropdownActive(false));

  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName) setIsDropdownActive(false);
  }, [pathName]);

  return (
    <StyledSidebar className={isOpen ? "sidebar-entering" : "sidebar-exiting"}>
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
          {menu.firstMenu.elements.map((item, index) => (
            <StyledNavLink
              key={item.title + index}
              to={item.to}
              icon={item.icon}
              text={item.title}
              end={item.title !== "Dashboard" ? false : true}
            />
          ))}
        </StyledSidebarList>
        <StyledOrganisationListTitleContainer>
          <Typography
            color="midGray3"
            variant="UI Small/UI Text 12 Semi Bold">
            {deviceType === "mobile" || deviceType === "tablet"
              ? menu.secondMenu.title.substring(0, 3)
              : menu.secondMenu.title}
          </Typography>
        </StyledOrganisationListTitleContainer>
        <StyledOrganisationListContainer>
          {menu.secondMenu.elements.map((item, index) => (
            <StyledNavLink
              key={item.title + index}
              to={item.to}
              icon={item.icon}
              text={item.title}
            />
          ))}
        </StyledOrganisationListContainer>
      </StyledSidebarTopMenu>

      <StyledUserMenu
        ref={userMenuRef}
        onClick={() => {
          setIsDropdownActive((prev) => !prev);
        }}>
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
        <StyledUserMenuDropdown
          className={
            isDropdownActive ? "dropdown-entering" : "dropdown-exiting"
          }>
          <StyledUserMenuDropdownItem>
            <StyledLink to={DashboardRoutes.accountSettings}>
              <Typography
                color="darkGray1"
                variant="UI/UI Text 14 Reg">
                Ustawienia konta
              </Typography>
            </StyledLink>
          </StyledUserMenuDropdownItem>
          <StyledUserMenuDropdownItem>
            <UnstyledButton
              onClick={() => {
                if (token) revokeTokenFn(token);
              }}>
              <Typography variant="UI/UI Text 14 Reg">Wyloguj się</Typography>
            </UnstyledButton>
          </StyledUserMenuDropdownItem>
        </StyledUserMenuDropdown>
      </StyledUserMenu>
    </StyledSidebar>
  );
};

export default DashboardSidebar;
