import React, { useState, useRef, useEffect } from "react";
import {
  StyledLink,
  StyledSidebarArrowDownIcon,
  StyledUserMenu,
  StyledUserMenuDropdown,
  StyledUserMenuDropdownItem,
  StyledUserMenuNameContainer,
  UserAvatar,
} from "./DashboardSidebar.styled";
import Typography from "components/SharedComponents/Typography/Typography";
import { useClickOutside } from "./utils";
import { useRevokeToken } from "services/auth/authServices";
import { UnstyledButton } from "components/SharedComponents/Button/Button.styled";
import { useTranslation } from "react-i18next";
import { DashboardRoutes } from "router/router";
import useDeviceType from "hooks/useDeviceType";

const UserMenu = ({ userData, shelterData, userImg }: any) => {
  const deviceType = useDeviceType();
  const { t } = useTranslation();
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const userMenuRef = useRef(null);
  const { mutate: revokeTokenFn } = useRevokeToken();
  const token = localStorage.getItem("refreshToken");

  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName) setIsDropdownActive(false);
  }, [pathName]);

  useClickOutside(userMenuRef, () => setIsDropdownActive(false));

  return (
    <>
      <StyledUserMenu
        tabIndex={0}
        role={"button"}
        ref={userMenuRef}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            setIsDropdownActive((prev) => !prev);
          }
        }}
        onClick={() => {
          setIsDropdownActive((prev) => !prev);
        }}>
        <UserAvatar
          src={userImg}
          alt={t("sidebar.avatarAlt")}
        />
        {(deviceType === "laptop" || deviceType === "desktop") && (
          <div>
            <StyledUserMenuNameContainer>
              <Typography
                color="black"
                variant="UI/UI Text 14 Med">
                {userData?.firstName + " " + userData?.lastName}
              </Typography>
              <StyledSidebarArrowDownIcon isDropdownActive={isDropdownActive} />
            </StyledUserMenuNameContainer>
            <Typography
              color="primary600"
              variant="UI Small/UI Text 12 Reg">
              {shelterData?.organizationName}
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
                {t("accountSettings.accountSettings")}
              </Typography>
            </StyledLink>
          </StyledUserMenuDropdownItem>
          <StyledUserMenuDropdownItem>
            <UnstyledButton
              onClick={() => {
                if (token) revokeTokenFn(token);
              }}>
              <Typography
                color="darkGray1"
                variant="UI/UI Text 14 Reg">
                {t("accountSettings.logOut")}
              </Typography>
            </UnstyledButton>
          </StyledUserMenuDropdownItem>
        </StyledUserMenuDropdown>
      </StyledUserMenu>
    </>
  );
};

export default UserMenu;
