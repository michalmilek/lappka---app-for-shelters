import { IdentificationIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import { motion } from "framer-motion";
import React from "react";
import {
  StyledDashboardInfoCard,
  StyledDashboardInfoCardIconContainer,
  StyledDashboardInfoCardTextContainer,
} from "./DashboardInfoCardsItem.styled";
import Skeleton from "./SkeletonCard";

interface Props {
  isLoading: boolean;
  text: string;
  icon: JSX.Element;
  number: number;
}

const DashboardInfoCardsItem = ({ isLoading, text, icon, number }: Props) => {
  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <StyledDashboardInfoCard>
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
