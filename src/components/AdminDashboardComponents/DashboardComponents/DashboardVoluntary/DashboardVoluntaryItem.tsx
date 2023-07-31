import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardVoluntaryItemContainer,
  DashboardVoluntaryItemStatusContainer,
} from "./DashboardVoluntaryItem.styled";
import { IsOnIndicator } from "./DashboardVoluntaryItem.styled";

export interface IsOn extends React.HTMLAttributes<HTMLSpanElement> {
  isOn: boolean;
}


interface Props {
  text: string;
  isOn: boolean;
}

const DashboardVoluntaryItem = ({ text, isOn }: Props) => {
  return (
    <DashboardVoluntaryItemContainer>
      <Typography tag="h5">{text}</Typography>
      <DashboardVoluntaryItemStatusContainer>
        <IsOnIndicator isOn={true} />
        <Typography
          color="darkGray2"
          tag="span">
          {isOn ? "Włączone" : "Wyłączone"}
        </Typography>
      </DashboardVoluntaryItemStatusContainer>
    </DashboardVoluntaryItemContainer>
  );
};

export default DashboardVoluntaryItem;
