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

const DashboardVoluntary = () => {
  const { data, isLoading, isError, error, isSuccess } =
    useShelterVolunteering("123");

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
            Wolontariat
          </Typography>
        </DashboardVoluntaryTitleContainer>
        <Divider />
        <DashboardVoluntaryItemsContainer>
          <DashboardVoluntaryItem
            text="Wpłać darowiznę"
            isOn={data.isDonationActive}
          />
          <Divider />
          <DashboardVoluntaryItem
            text="Codzienna pomoc"
            isOn={data.isDailyHelpActive}
          />
          <Divider />
          <DashboardVoluntaryItem
            text="Wyprowadzanie psów"
            isOn={data.isTakingDogsOutActive}
          />
        </DashboardVoluntaryItemsContainer>
      </DashboardVoluntaryContainer>
    );
  }

  return null;
};

export default DashboardVoluntary;
