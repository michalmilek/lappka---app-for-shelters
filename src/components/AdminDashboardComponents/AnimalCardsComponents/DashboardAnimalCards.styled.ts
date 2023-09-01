import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardAnimalCardsMain = styled.main`
  height: 100vh;
  width: calc(100vw - 256px);
  margin-left: 256px;
  max-width: 100%;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 180px);
    margin-left: 180px;
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 100px);
    margin-left: 100px;
  }

  @media screen and (max-width: 550px) {
    width: calc(100vw);
    margin-left: 0;
  }
`;

export const StyledDashboardAnimalCardsMainContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 56px);
  padding: 24px 24px 25px;
  background: ${getColor("lightGray5")};

  gap: 16px;
  align-items: flex-start;
  align-content: space-between;
  justify-content: flex-start;

  @media screen and (max-width: 1350px) {
    padding: 12px;
  }
`;
