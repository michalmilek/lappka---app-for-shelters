import { DashboardIcon } from "components/SharedComponents/icons/icons";
import StyledNavLink from "components/SharedComponents/NavLink/SidebarNavLink";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import LappkaLogo from "./LappkaLogo.png";
import { StyledSidebar, StyledSidebarList } from "./ProtectedSidebar.styled";

const ProtectedSidebar = () => {
  return (
    <StyledSidebar>
      <img
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
      <Typography variant="UI Small/UI Text 12 Semi Bold">
        ORGANIZACJA
      </Typography>
      <StyledNavLink
        to={"/dashboard/organisation/employees"}
        icon={<DashboardIcon />}>
        Organizacja
      </StyledNavLink>

      <div>
        <img
          src=""
          alt=""
        />
        <div>
          <div>
            <Typography variant="UI/UI Text 14 Med">Jan Kowalski</Typography>
          </div>
          <Typography variant="UI Small/UI Text 12 Reg">
            Psiaki Adapciaki z Psiej Wioski
          </Typography>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default ProtectedSidebar;
