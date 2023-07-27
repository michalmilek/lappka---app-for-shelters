import {
  BellIcon,
  HamburgerMenuIcon,
} from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import useDeviceType from "hooks/useDeviceType";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsMobileMenuOpen,
  setMobileMenuOpen,
} from "redux/mobileMenuSlice";
import { styled } from "styled-components";
import {
  StyledNavbarButtonContainer,
  StyledProtectedPageNavbar,
  StyledTitle,
} from "./DashboardNavbar.styled";

interface ProtectedNavbarProps {
  previousTitle?: string;
  title: string;
  Button?: JSX.Element | null;
}

const StyledBellIcon = styled(BellIcon)`
  cursor: pointer;
`;

const DashboardNavbar = ({
  previousTitle,
  title,
  Button = null,
}: ProtectedNavbarProps) => {
  const deviceType = useDeviceType();
  const dispatch = useDispatch();
  const IsMobileMenuOpen = useSelector(selectIsMobileMenuOpen);
  return (
    <StyledProtectedPageNavbar>
      <StyledTitle>
        {previousTitle && deviceType !== "mobile" && (
          <Typography
            color="midGray2"
            variant="Heading 20 Semi Bold"
            tag="h2">
            {previousTitle}
          </Typography>
        )}

        <Typography
          color="darkGray2"
          variant={
            deviceType !== "mobile"
              ? "Heading 20 Semi Bold"
              : "UI/UI Text 14 Semi Bold"
          }
          tag="h2">
          {title}
        </Typography>
      </StyledTitle>
      {deviceType === "mobile" && (
        <HamburgerMenuIcon
          onClick={() => dispatch(setMobileMenuOpen(!IsMobileMenuOpen))}
        />
      )}
      <StyledNavbarButtonContainer>
        <StyledBellIcon />
        {Button}
      </StyledNavbarButtonContainer>
    </StyledProtectedPageNavbar>
  );
};

export default DashboardNavbar;
