import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import { SVGProps } from "react";
import { Link } from "react-router-dom";
import { css, keyframes, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import ReactCountryFlag from "react-country-flag";

interface ExtendedSVGProps extends SVGProps<SVGSVGElement> {
  isDropdownActive: boolean;
}

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  background: ${getColor("white")};
  padding: 20px 16px 33px;
  width: 256px;
  height: 100%;
  border-right: 1px solid ${getColor("lightGray3")};
  z-index: 2000;

  @media screen and (max-width: 550px) {
    transform: translateX(-100%);
    opacity: 0;

    &.sidebar-entering {
      animation: slideIn 0.3s forwards;
    }

    &.sidebar-exiting {
      animation: slideOut 0.3s forwards;
    }

    @keyframes slideIn {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 180px;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

export const StyledSidebarTopMenu = styled.div`
  width: 100%;
`;

export const StyledSidebarList = styled.ul`
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const StyledSidebarLogo = styled.img`
  margin-left: 10px;
`;

export const StyledSidebarIcon = styled.svg`
  stroke: inherit;
`;

export const StyledOrganisationListTitleContainer = styled.div`
  padding: 10px 12px 6px;
  width: 100%;
`;

export const StyledOrganisationListContainer = styled.div`
  width: 100%;
  margin-top: 4px;
`;

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
  position: relative;
`;

export const StyledUserMenuNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

export const StyledSidebarArrowDownIcon = styled(ArrowDownIcon).withConfig({
  shouldForwardProp: (prop) => prop !== "isDropdownActive",
})<ExtendedSVGProps>`
  height: 16px;
  width: 16px;
  transition: all 0.3s ease-in-out;

  ${({ isDropdownActive }) =>
    isDropdownActive &&
    css`
      transform: rotate(180deg);
    `}
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
  }
`;

export const StyledUserMenuDropdown = styled.ul`
  position: absolute;
  padding: 8px 0;
  width: 171px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  left: 100%;
  bottom: 100%;
  list-style-type: none;
  background: ${getColor("white")};
  border-radius: 6px;
  border: 1px solid ${getColor("lightGray5")};
  box-shadow: 0px 12px 24px #5b68713d;

  &.dropdown-entering {
    animation: ${fadeInAnimation} 0.3s forwards;
  }

  &.dropdown-exiting {
    animation: ${fadeOutAnimation} 0.3s forwards;
  }
`;

export const StyledUserMenuDropdownItem = styled.li`
  padding: 4px 20px;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: ${getColor("lightGray4")};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledFlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;

  .flag {
    width: 50px !important;
    height: auto !important;
    transition: transform 0.2s;
    background-color: #fff;
    border: 3px solid ${getColor("darkGray2")};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const UserAvatar = styled.img`
  height: 42px;
  width: 42px;
  border: 1px solid #0000001a;
  border-radius: 50%;
`;