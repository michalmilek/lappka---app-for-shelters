import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background: ${getColor("white")};
  padding: 20px 16px 33px;
  width: 256px;
`;

export const StyledSidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;
