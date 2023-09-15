import StyledNavLink from "components/SharedComponents/NavLink/SidebarNavLink";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useRef, useState } from "react";
import LappkaLogo from "./LappkaLogo.png";
import LappkaMobileLogo from "./LappkaMobileLogo.png";
import {
  StyledFlagContainer,
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
  UserAvatar,
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
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { useGetUser } from "services/user/userServices";
import { useGetShelter } from "services/pet/petServices";
import { useGetStorageImagesForId } from "services/storage/storageServices";

const DashboardSidebar = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();
  const isOpen = useSelector(selectIsMobileMenuOpen);
  const { mutate: revokeTokenFn } = useRevokeToken();
  const token = localStorage.getItem("refreshToken");
  const { data: userData } = useGetUser();
  const { data: shelterData } = useGetShelter();
  const { data: userImg } = useGetStorageImagesForId(userData?.profilePicture);

  useClickOutside(userMenuRef, () => setIsDropdownActive(false));

  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName) setIsDropdownActive(false);
  }, [pathName]);

  const changeLanguage = (lng: "en" | "pl" | "de") => {
    i18n.changeLanguage(lng);
  };

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
          {menu.firstMenu.elements.map((item, index) => {
            return (
              <StyledNavLink
                key={item.title + index}
                to={item.to}
                icon={item.icon}
                text={t(item.title)}
                end={t(item.title) !== t(`sidebar.dashboard`) ? false : true}
              />
            );
          })}
        </StyledSidebarList>
        <StyledOrganisationListTitleContainer>
          <Typography
            color="midGray3"
            variant="UI Small/UI Text 12 Semi Bold">
            {deviceType === "mobile" || deviceType === "tablet"
              ? t(menu.secondMenu.title).substring(0, 3)
              : t(menu.secondMenu.title)}
          </Typography>
        </StyledOrganisationListTitleContainer>
        <StyledOrganisationListContainer>
          {menu.secondMenu.elements.map((item, index) => (
            <StyledNavLink
              key={item.title + index}
              to={item.to}
              icon={item.icon}
              text={t(item.title)}
            />
          ))}
        </StyledOrganisationListContainer>
        <StyledFlagContainer>
          <UnstyledButton
            onClick={() => {
              changeLanguage("en");
            }}>
            <ReactCountryFlag
              className="flag"
              countryCode="GB"
              aria-label={t("languageChange.EN")}
              svg
              title={t("languageChange.EN")}
            />
          </UnstyledButton>
          <UnstyledButton
            onClick={() => {
              changeLanguage("pl");
            }}>
            <ReactCountryFlag
              className="flag"
              title={t("languageChange.PL")}
              aria-label={t("languageChange.PL")}
              countryCode="PL"
              svg
            />
          </UnstyledButton>
          <UnstyledButton
            onClick={() => {
              changeLanguage("de");
            }}>
            <ReactCountryFlag
              className="flag"
              title={t("languageChange.DE")}
              aria-label={t("languageChange.DE")}
              countryCode="DE"
              svg
            />
          </UnstyledButton>
        </StyledFlagContainer>
      </StyledSidebarTopMenu>

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
    </StyledSidebar>
  );
};

export default DashboardSidebar;
