import {
  BellIcon,
  HamburgerMenuIcon,
} from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import useDeviceType from "hooks/useDeviceType";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsMobileMenuOpen,
  setMobileMenuOpen,
} from "redux/mobileMenuSlice";
import {
  StyledNavbarButtonContainer,
  StyledProtectedPageNavbar,
} from "./DashboardNavbar.styled";

interface ProtectedNavbarProps {
  title: string;
  Button?: JSX.Element | null;
}

const DashboardNavbar = ({ title, Button = null }: ProtectedNavbarProps) => {
  const deviceType = useDeviceType();
  const dispatch = useDispatch();
  const IsMobileMenuOpen = useSelector(selectIsMobileMenuOpen);
  return (
    <StyledProtectedPageNavbar>
      <Typography
        color="darkGray2"
        variant="Heading 20 Semi Bold"
        tag="h2">
        {title}
      </Typography>
      {deviceType === "mobile" && (
        <HamburgerMenuIcon
          onClick={() => dispatch(setMobileMenuOpen(!IsMobileMenuOpen))}
        />
      )}
      <StyledNavbarButtonContainer>
        <BellIcon />
        {Button}
      </StyledNavbarButtonContainer>
    </StyledProtectedPageNavbar>
  );
};

export default DashboardNavbar;
