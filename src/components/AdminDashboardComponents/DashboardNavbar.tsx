import {
  BellIcon,
  HamburgerMenuIcon,
} from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import { MobileMenuContext } from "context/MobileMenuContextProvider";
import useDeviceType from "hooks/useDeviceType";
import React, { useContext } from "react";
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
  const { IsMobileMenuOpen, handleMobileMenu } = useContext(MobileMenuContext);
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
          onClick={() => handleMobileMenu(!IsMobileMenuOpen)}
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
