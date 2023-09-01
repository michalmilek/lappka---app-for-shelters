import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  StyledDashboardInfoCard,
  StyledDashboardInfoCardIconContainer,
  StyledDashboardInfoCardTextContainer,
} from "./DashboardInfoCardsItem.styled";
import ErrorCard from "./ErrorCard";
import SkeletonCardItem from "./SkeletonCardItem";

interface Props {
  isLoading: boolean;
  isError: boolean;
  text: string;
  icon: JSX.Element;
  number: number;
  gridArea: string;
}

const DashboardInfoCardsItem = ({
  isLoading,
  isError,
  text,
  icon,
  number,
  gridArea,
}: Props) => {
  if (isLoading) {
    return <SkeletonCardItem gridArea={gridArea} />;
  }

  if (isError) {
    return <ErrorCard gridArea={gridArea} />;
  }

  return (
    <StyledDashboardInfoCard gridArea={gridArea}>
      <StyledDashboardInfoCardIconContainer>
        {icon}
      </StyledDashboardInfoCardIconContainer>
      <StyledDashboardInfoCardTextContainer>
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
      </StyledDashboardInfoCardTextContainer>
    </StyledDashboardInfoCard>
  );
};

export default DashboardInfoCardsItem;
