import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledProtectedPageNavbar = styled.nav`
  position: relative;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 32px;
  justify-content: space-between;
  background: ${getColor("white")};
  z-index: 15;
  box-shadow: 0px 12px 1px 0px #00000003;

  box-shadow: 0px 8px 4px 0px #00000005;

  box-shadow: 0px 4px 1px 0px #00000005;

  user-select: none;
  overflow: hidden;
`;


export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 400;
  height: 100%;
`;

export const StyledNavbarButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 1024px) {
    gap: 16px;
  }

  @media screen and (max-width: 550px) {
    gap: 8px;
  }
`;
