import { getColor } from "utils/styles/getStyle/getColor";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";
import useDeviceType from "hooks/useDeviceType";
import { useTranslation } from "react-i18next";

interface StyledNavLinkProps extends NavLinkProps {
  icon: JSX.Element;
  text: string;
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

export const StyledMessagesNumberContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  height: 25px;
  width: 24px;
  padding: 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMessagesNumberSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1px 4px;
  border-radius: 8px;
  background: ${getColor("red500")};
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${getColor("white")};
`;

const SidebarNavLink = ({ icon, text, ...rest }: StyledNavLinkProps) => {
  const deviceType = useDeviceType();
  const { t } = useTranslation();
  return (
    <StyledNavLink {...rest}>
      <>
        {icon}
        {deviceType === "desktop" && <>{text}</>}
      </>
      {text === t("sidebar.messages") && (
        <StyledMessagesNumberContainer>
          <StyledMessagesNumberSpan>{56}</StyledMessagesNumberSpan>
        </StyledMessagesNumberContainer>
      )}
    </StyledNavLink>
  );
};

export default SidebarNavLink;
