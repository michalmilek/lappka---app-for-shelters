import { IdentificationIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import SkeletonAnimalCardsInfoItem from "./SkeletonAnimalCardsInfoItem";

const StyledAnimalCardsInfoItemContainer = styled.div`
  background: ${getColor("white")};
  height: 82px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 6px;
  gap: 12px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

const StyledAnimalCardsInfoCardIconContainer = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${getColor("primary050")};

  & path {
    background: ${getColor("primary050")};
    stroke: ${getColor("primary500")};
  }
`;

const StyledAnimalCardsInfoItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

interface Props {
  text: string;
  number: number;
  icon: JSX.Element;
  isLoading: boolean;
}

const AnimalCardsInfoItem = ({ text, number, icon, isLoading }: Props) => {
  if (isLoading) {
    return <SkeletonAnimalCardsInfoItem />;
  }

  return (
    <StyledAnimalCardsInfoItemContainer>
      <StyledAnimalCardsInfoCardIconContainer>
        {icon}
      </StyledAnimalCardsInfoCardIconContainer>
      <StyledAnimalCardsInfoItemTextContainer>
        <Typography
          tag="span"
          variant="UI Small/UI Text 12 Semi Bold"
          color="midGray4">
          {text}
        </Typography>
        <Typography
          tag="h3"
          variant="Heading 30 Semi"
          color="darkGray2">
          {number}
        </Typography>
      </StyledAnimalCardsInfoItemTextContainer>
    </StyledAnimalCardsInfoItemContainer>
  );
};

export default AnimalCardsInfoItem;
