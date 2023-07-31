import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  DashboardNewestAnimalCardsItemContainer,
  DashboardNewestAnimalCardsItemContentContainer,
  DashboardNewestAnimalCardsItemContentDataContainer,
  DashboardNewestAnimalCardsItemImg,
} from "./DashboardNewestAnimalCardsItem.styled";

const DashboardNewestAnimalCardsItem = () => {
  return (
    <DashboardNewestAnimalCardsItemContainer>
      <DashboardNewestAnimalCardsItemImg
        src={
          "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
        }
        alt=""
      />
      <DashboardNewestAnimalCardsItemContentContainer>
        <Typography
          tag="h4"
          color="darkGray2"
          variant="UI/UI Text 16 Semi Bold">
          Ninka
        </Typography>
        <DashboardNewestAnimalCardsItemContentDataContainer>
          <Typography
            variant="UI/UI Text 14 Reg"
            color="midGray2">
            Kot
          </Typography>
          <Typography
            variant="UI Small/UI Text 12 Reg"
            color="midGray2">
            {new Date().toLocaleDateString("pl-PL")}
          </Typography>
        </DashboardNewestAnimalCardsItemContentDataContainer>
      </DashboardNewestAnimalCardsItemContentContainer>
    </DashboardNewestAnimalCardsItemContainer>
  );
};

export default DashboardNewestAnimalCardsItem;
