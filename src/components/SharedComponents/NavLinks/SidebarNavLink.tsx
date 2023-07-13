import { getColor } from "utils/styles/getStyle/getColor";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: transparent;
  padding: 0 5px;
  transition: all 0.2s ease;
  :hover {
    ${getColor("primary050")};
  }
  &.active {
    color: ${getColor("primary050")};
  }
`;

export default StyledNavLink;
