import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardVoluntaryItemContainer,
  DashboardVoluntaryItemStatusContainer,
} from "./DashboardVoluntaryItem.styled";
import { IsOnIndicator } from "./DashboardVoluntaryItem.styled";
import { useTranslation } from "react-i18next";

export interface IsOn extends React.HTMLAttributes<HTMLSpanElement> {
  isOn: boolean;
}

interface Props {
  text: string;
  isOn: boolean;
}

const DashboardVoluntaryItem = ({ text, isOn }: Props) => {
  const { t } = useTranslation("dashboard");
  return (
    <DashboardVoluntaryItemContainer>
      <Typography tag="h5">{text}</Typography>
      <DashboardVoluntaryItemStatusContainer>
        <IsOnIndicator isOn={isOn} />
        <Typography
          color="darkGray2"
          tag="span">
          {isOn ? t("voluntary.on") : t("voluntary.off")}
        </Typography>
      </DashboardVoluntaryItemStatusContainer>
    </DashboardVoluntaryItemContainer>
  );
};

export default DashboardVoluntaryItem;
