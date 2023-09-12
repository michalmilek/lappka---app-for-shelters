import { useShelterCards } from "services/pet/petServices";
import Button from "components/SharedComponents/Button/Button";
import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import {
  DashboardNewestAnimalCardsContainer,
  DashboardNewestAnimalCardsContainerContent,
  DashboardNewestAnimalCardsContainerHeader,
  DashboardNewestAnimalCardsEmptyCardsList,
} from "./DashboardNewestAnimalCards.styled";
import DashboardNewestAnimalCardsItem from "./DashboardNewestAnimalCardsItem";
import DashboardNewestAnimalCardsItemContainerSkeleton from "./DashboardNewestAnimalCardsItemContainerSkeleton";
import ErrorNewestAnimal from "./ErrorNewestAnimal";
import { DashboardRoutes } from "router/router";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

const DashboardNewestAnimalCards = () => {
  const { isLoading, data, isError, error, isSuccess } = useShelterCards(1, 3);
  const navigate = useNavigate();

  if (isError) {
    console.log(error);
    return <ErrorNewestAnimal />;
  }

  return (
    <DashboardNewestAnimalCardsContainer>
      <DashboardNewestAnimalCardsContainerHeader>
        <Typography
          tag="h3"
          variant="UI/UI Text 16 Semi Bold">
          {t("newestAnimals.newestAnimalCards")}
        </Typography>
        <Button
          variant="outline"
          size="Medium"
          onClick={() => {
            navigate(DashboardRoutes.animalCards);
          }}>
          {t("newestAnimals.allCards")}
        </Button>
      </DashboardNewestAnimalCardsContainerHeader>
      <Divider />
      <DashboardNewestAnimalCardsContainerContent>
        {isLoading && (
          <>
            <DashboardNewestAnimalCardsItemContainerSkeleton />
            <DashboardNewestAnimalCardsItemContainerSkeleton />
            <DashboardNewestAnimalCardsItemContainerSkeleton />
          </>
        )}
        {isSuccess &&
          data.petInListInShelterDto.slice(0, 3).map((item, index) => (
            <DashboardNewestAnimalCardsItem
              key={item.petId + index}
              item={item}
            />
          ))}
        {isSuccess && data?.petInListInShelterDto.length === 0 && (
          <DashboardNewestAnimalCardsEmptyCardsList>
            <Typography
              tag="p"
              color="darkGray2"
              variant="UI/UI Text 16 Medium Bold">
              {t("newestAnimals.noAnimalCardsInDatabase")}
            </Typography>
            <Button
              onClick={() => navigate(DashboardRoutes.animalCardsNewCard)}>
              {t("newestAnimals.addFirstCard")}
            </Button>
          </DashboardNewestAnimalCardsEmptyCardsList>
        )}
      </DashboardNewestAnimalCardsContainerContent>
    </DashboardNewestAnimalCardsContainer>
  );
};

export default DashboardNewestAnimalCards;
