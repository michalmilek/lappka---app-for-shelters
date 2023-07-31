import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import useDeviceType from "hooks/useDeviceType";
import React from "react";
import {
  DashboardVoluntaryContainer,
  DashboardVoluntaryItemsContainer,
  DashboardVoluntaryTitleContainer,
} from "./DashboardVoluntary.styled";
import DashboardVoluntaryItem from "./DashboardVoluntaryItem";

const DashboardVoluntary = () => {
  return (
    <DashboardVoluntaryContainer>
      <DashboardVoluntaryTitleContainer>
        <Typography
          variant="Heading 18 Semi Bold"
          tag="h3"
          color="darkGray2">
          Wolontariat
        </Typography>
      </DashboardVoluntaryTitleContainer>
      <Divider />
      <DashboardVoluntaryItemsContainer>
        <DashboardVoluntaryItem
          text="Wpłać darowiznę"
          isOn={true}
        />
        <Divider />
        <DashboardVoluntaryItem
          text="Codzienna pomoc"
          isOn={true}
        />
        <Divider />
        <DashboardVoluntaryItem
          text="Wyprowadzanie psów"
          isOn={true}
        />
      </DashboardVoluntaryItemsContainer>
    </DashboardVoluntaryContainer>
  );
};

export default DashboardVoluntary;
