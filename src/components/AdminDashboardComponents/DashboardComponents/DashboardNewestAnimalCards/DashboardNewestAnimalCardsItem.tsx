import { Pet } from "apiCalls/pet/pet";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { DashboardRoutes } from "router/router";
import {
  ContainerLink,
  DashboardNewestAnimalCardsItemContainer,
  DashboardNewestAnimalCardsItemContentContainer,
  DashboardNewestAnimalCardsItemContentDataContainer,
  DashboardNewestAnimalCardsItemImg,
} from "./DashboardNewestAnimalCardsItem.styled";

interface Props {
  item: Pet;
}

const DashboardNewestAnimalCardsItem = ({ item }: Props) => {
  return (
    <ContainerLink to={DashboardRoutes.animalCards + "/" + item.id}>
      <DashboardNewestAnimalCardsItemContainer>
        <DashboardNewestAnimalCardsItemImg
          src={item.profilePhoto}
          alt=""
        />
        <DashboardNewestAnimalCardsItemContentContainer>
          <Typography
            tag="h4"
            color="darkGray2"
            variant="UI/UI Text 16 Semi Bold">
            {item.name}
          </Typography>
          <DashboardNewestAnimalCardsItemContentDataContainer>
            <Typography
              variant="UI/UI Text 14 Reg"
              color="midGray2">
              {item.type}
            </Typography>
            <Typography
              variant="UI Small/UI Text 12 Reg"
              color="midGray2">
              {new Date(item.createdAt).toLocaleDateString("pl-PL")}
            </Typography>
          </DashboardNewestAnimalCardsItemContentDataContainer>
        </DashboardNewestAnimalCardsItemContentContainer>
      </DashboardNewestAnimalCardsItemContainer>
    </ContainerLink>
  );
};

export default DashboardNewestAnimalCardsItem;
