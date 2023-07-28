import { IdentificationIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const StyledAnimalCardsInfoItemContainer = styled.div`
  background: ${getColor("white")};
  height: 82px;
  width: 368px;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 6px;
  gap: 12px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

const StyledAnimalCardsInfoItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const AnimalCardsInfoItem = () => {
  return (
    <StyledAnimalCardsInfoItemContainer>
      <IdentificationIcon />
      <StyledAnimalCardsInfoItemTextContainer>
        <Typography
          tag="span"
          $variant="UI Small/UI Text 12 Semi Bold"
          $color="midGray4">
          Karty zwierząt
        </Typography>
        <Typography
          tag="h3"
          $variant="Heading 30 Semi"
          $color="darkGray2">
          361
        </Typography>
      </StyledAnimalCardsInfoItemTextContainer>
    </StyledAnimalCardsInfoItemContainer>
  );
};

export default AnimalCardsInfoItem;
