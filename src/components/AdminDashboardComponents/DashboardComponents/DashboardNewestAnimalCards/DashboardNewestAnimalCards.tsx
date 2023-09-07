import { useShelterCards } from "services/pet/petServices";
import Button from "components/SharedComponents/Button/Button";
import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import { useState, useEffect } from "react";
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
import { useGetStorageImagesForDashboard } from "services/storage/storageServices";

const DashboardNewestAnimalCards = () => {
  const { isLoading, data, isError, error, isSuccess } = useShelterCards(1, 3);
  const [localImageIds, setLocalImageIds] = useState<string[]>([]);
  const navigate = useNavigate();
  const {
    isSuccess: GetStorageImagesIsSuccess,
    data: localImagesUrls,
    isLoading: GetStorageImagesIsLoading,
  } = useGetStorageImagesForDashboard(localImageIds);

  useEffect(() => {
    if (data) {
      const newLocalImageIds = data.petInListInShelterDto.map(
        (item) => item.profilePhoto
      );
      setLocalImageIds(newLocalImageIds);
    }
  }, [data]);

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
          Najnowsze karty zwierząt
        </Typography>
        <Button
          variant="outline"
          size="Medium"
          onClick={() => {
            navigate(DashboardRoutes.animalCards);
          }}>
          Wszystkie
        </Button>
      </DashboardNewestAnimalCardsContainerHeader>
      <Divider />
      <DashboardNewestAnimalCardsContainerContent>
        {(isLoading || GetStorageImagesIsLoading) && (
          <>
            <DashboardNewestAnimalCardsItemContainerSkeleton />
            <DashboardNewestAnimalCardsItemContainerSkeleton />
            <DashboardNewestAnimalCardsItemContainerSkeleton />
          </>
        )}
        {isSuccess &&
          GetStorageImagesIsSuccess &&
          data &&
          data.petInListInShelterDto.slice(0, 3).map((item, index) => (
            <DashboardNewestAnimalCardsItem
              key={item.id + index}
              item={item}
              img={localImagesUrls[index]}
            />
          ))}
        {isSuccess && data?.petInListInShelterDto.length === 0 && (
          <DashboardNewestAnimalCardsEmptyCardsList>
            <Typography
              tag="p"
              color="darkGray2"
              variant="UI/UI Text 16 Medium Bold">
              Brak kart zwierząt w bazie. Dodaj pierwszą kartę.
            </Typography>
            <Button
              onClick={() => navigate(DashboardRoutes.animalCardsNewCard)}>
              Dodaj pierwszą kartę
            </Button>
          </DashboardNewestAnimalCardsEmptyCardsList>
        )}
      </DashboardNewestAnimalCardsContainerContent>
    </DashboardNewestAnimalCardsContainer>
  );
};

export default DashboardNewestAnimalCards;
