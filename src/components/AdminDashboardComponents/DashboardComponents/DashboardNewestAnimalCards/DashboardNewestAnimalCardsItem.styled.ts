import { Link } from "react-router-dom";
import styled from "styled-components";
export const DashboardNewestAnimalCardsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  transition: all 400ms ease-in-out;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DashboardNewestAnimalCardsItemImg = styled.img`
  width: 280px;
  height: 215px;
  object-fit: cover;

  @media screen and (max-width: 1700px) {
    width: 250px;
    height: 180px;
  }

  @media screen and (max-width: 1550px) {
    width: 240px;
    height: 150px;
  }

  @media screen and (max-width: 1480px) {
    width: 190px;
    height: 135px;
  }

  @media screen and (max-width: 1350px) {
    width: 165px;
    height: 100px;
  }

  @media screen and (max-width: 1024px) {
    width: 150px;
  }
  @media screen and (max-width: 550px) {
    height: 50px;
    width: 100%;
  }
`;

export const DashboardNewestAnimalCardsItemContentContainer = styled.div`
  padding: 8px 12px;
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 550px) {
    align-items: center;
  }
`;

export const DashboardNewestAnimalCardsItemContentDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ContainerLink = styled(Link)`
  text-decoration: none;
`;
