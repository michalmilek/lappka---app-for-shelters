import { useShelterVolunteering } from "services/pet/petServices";
import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardVoluntaryContainer,
  DashboardVoluntaryItemsContainer,
  DashboardVoluntaryTitleContainer,
} from "./DashboardVoluntary.styled";
import DashboardVoluntaryItem from "./DashboardVoluntaryItem";
import SkeletonVoluntary from "./SkeletonVoluntary";
import ErrorVoluntary from "./ErrorVoluntary";
import { useTranslation } from "react-i18next";

const DashboardVoluntary = () => {
  const { t } = useTranslation("dashboard");
  const { data, isLoading, isError, error, isSuccess } =
    useShelterVolunteering();

  if (isError) {
    console.log(error);
    return <ErrorVoluntary />;
  }

  if (isLoading) {
    return <SkeletonVoluntary />;
  }

  if (data && isSuccess) {
    return (
      <DashboardVoluntaryContainer>
        <DashboardVoluntaryTitleContainer>
          <Typography
            variant="Heading 18 Semi Bold"
            tag="h3"
            color="darkGray2">
            {t("voluntary.voluntary")}
          </Typography>
        </DashboardVoluntaryTitleContainer>
        <Divider />
        <DashboardVoluntaryItemsContainer>
          <DashboardVoluntaryItem
            text={t("voluntary.makeADonation")}
            isOn={data.isDonationActive}
          />
          <Divider />
          <DashboardVoluntaryItem
            text={t("voluntary.dailyAssistance")}
            isOn={data.isDailyHelpActive}
          />
          <Divider />
          <DashboardVoluntaryItem
            text={t("voluntary.walkingTheDogs")}
            isOn={data.isTakingDogsOutActive}
          />
        </DashboardVoluntaryItemsContainer>
      </DashboardVoluntaryContainer>
    );
  }

  return null;
};

export default DashboardVoluntary;
