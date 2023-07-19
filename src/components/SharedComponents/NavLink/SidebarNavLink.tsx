import { getColor } from "utils/styles/getStyle/getColor";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

interface StyledNavLinkProps extends NavLinkProps {
  icon: JSX.Element;
}

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  background: transparent;
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  height: 40px;
  transition: all 400ms ease-in-out;
  color: ${getColor("darkGray2")};
  gap: 12px;
  & path {
    stroke: ${getColor("midGray4")} !important;
  }

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.3%;

  &:hover {
    background: ${getColor("lightGray4")};
  }
  &.active {
    color: ${getColor("primary700")};
    background: ${getColor("primary050")};
    stroke: ${getColor("primary050")} !important;

    & path {
      stroke: ${getColor("primary500")} !important;
    }
  }
`;

const SidebarNavLink = ({ icon, children, ...rest }: StyledNavLinkProps) => {
  return (
    <StyledNavLink {...rest}>
      <>
        {icon}
        {children}
      </>
    </StyledNavLink>
  );
};

export default SidebarNavLink;
