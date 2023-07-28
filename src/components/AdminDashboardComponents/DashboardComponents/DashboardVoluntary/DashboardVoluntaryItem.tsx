import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardVoluntaryItemContainer,
  DashboardVoluntaryItemStatusContainer,
} from "./DashboardVoluntaryItem.styled";
import { IsOnIndicator } from "./DashboardVoluntaryItem.styled";

export interface IsOn extends React.HTMLAttributes<HTMLSpanElement> {
  $isOn: boolean;
}

const DashboardVoluntaryItem = () => {
  return (
    <DashboardVoluntaryItemContainer>
      <Typography tag="h5">Wpłać darowiznę</Typography>
      <DashboardVoluntaryItemStatusContainer>
        <IsOnIndicator $isOn={true} />
        <Typography
          $color="darkGray2"
          tag="span">
          Włączone
        </Typography>
      </DashboardVoluntaryItemStatusContainer>
    </DashboardVoluntaryItemContainer>
  );
};

export default DashboardVoluntaryItem;
