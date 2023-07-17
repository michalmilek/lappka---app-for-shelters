import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const DashboardNewestAnimalCardsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DashboardNewestAnimalCardsItemImg = styled.img`
  width: 100%;
  height: 215px;
  object-fit: cover;
`;

export const DashboardNewestAnimalCardsItemContentContainer = styled.div`
  padding: 8px 12px;
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DashboardNewestAnimalCardsItemContentDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
