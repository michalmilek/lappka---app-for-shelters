import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledProtectedPageContent = styled.div`
  margin-left: 256px;
  width: calc(100% - 256px);
  margin-right: 2px;
  height: 100%;
  background: ${getColor("lightGray5")};
  overflow-y: hidden;

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