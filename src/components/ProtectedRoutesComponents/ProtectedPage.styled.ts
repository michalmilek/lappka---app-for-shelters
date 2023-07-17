import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledProtectedPageContent = styled.div`
  margin-left: 256px;
  width: calc(100% - 256px);
  height: 100vw;
  background: ${getColor("lightGray5")};

  @media screen and (max-width: 1024px) {
    width: calc(100% - 180px);
    margin-left: 180px;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 100px);
    margin-left: 100px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const StyledProtectedPageNavbar = styled.nav`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 32px;
  justify-content: space-between;
  background: ${getColor("white")};
  box-shadow: 0px 12px 1px 0px #00000003;

  box-shadow: 0px 8px 4px 0px #00000005;

  box-shadow: 0px 4px 1px 0px #00000005;
`;
