import React from "react";
import { styled } from "styled-components";
import AnimalCardsInfoItem from "./AnimalCardsInfoItem";

const AnimalCardsInfoContainer = styled.div`
  grid-area: a;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AnimalCardsInfo = () => {
  return (
    <AnimalCardsInfoContainer>
      <AnimalCardsInfoItem />
      <AnimalCardsInfoItem />
      <AnimalCardsInfoItem />
    </AnimalCardsInfoContainer>
  );
};

export default AnimalCardsInfo;