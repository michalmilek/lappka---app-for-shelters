import styled from "styled-components";

export const StyledDashboardInfoCardsContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  grid-area: a;

  @media screen and (max-width: 1350px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
