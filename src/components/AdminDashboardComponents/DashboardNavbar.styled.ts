import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledProtectedPageNavbar = styled.nav`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 32px;
  justify-content: space-between;
  background: ${getColor("white")};
  z-index: 10;
  box-shadow: 0px 12px 1px 0px #00000003;

  box-shadow: 0px 8px 4px 0px #00000005;

  box-shadow: 0px 4px 1px 0px #00000005;

  user-select: none;
`;

export const StyledNavbarButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
