import { IdentificationIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import { motion } from "framer-motion";
import React from "react";
import {
  StyledDashboardInfoCard,
  StyledDashboardInfoCardIconContainer,
  StyledDashboardInfoCardTextContainer,
} from "./DashboardInfoCardsItem.styled";

const DashboardInfoCardsItem = () => {
  return (
    <StyledDashboardInfoCard
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <StyledDashboardInfoCardIconContainer>
        <IdentificationIcon />
      </StyledDashboardInfoCardIconContainer>
      <StyledDashboardInfoCardTextContainer>
        <Typography
          tag="span"
          variant="UI Small/UI Text 12 Semi Bold"
          color="midGray4">
          Karty zwierząt
        </Typography>
        <Typography
          tag="h3"
          variant="Heading 30 Semi"
          color="darkGray2">
          361
        </Typography>
      </StyledDashboardInfoCardTextContainer>
    </StyledDashboardInfoCard>
  );
};

export default DashboardInfoCardsItem;
