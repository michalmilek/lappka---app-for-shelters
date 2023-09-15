import Typography from "components/SharedComponents/Typography/Typography";
import { useTranslation } from "react-i18next";
import { DashboardRoutes } from "router/router";
import { Pet } from "services/pet/petTypes";
import { useGetStorageImagesForId } from "services/storage/storageServices";
import { typeValueToLabel } from "utils/appUtils";
import {
  ContainerLink,
  DashboardNewestAnimalCardsItemContainer,
  DashboardNewestAnimalCardsItemContentContainer,
  DashboardNewestAnimalCardsItemContentDataContainer,
  DashboardNewestAnimalCardsItemImg,
} from "./DashboardNewestAnimalCardsItem.styled";
import { NewestAnimalImgSkeleton } from "./DashboardNewestAnimalCardsItemContainerSkeleton";
import { DashboardNewestAnimalCardsItemImgError } from "./ErrorNewestAnimal";

interface Props {
  item: Pet;
}

const DashboardNewestAnimalCardsItem = ({ item }: Props) => {
  const {
    data: img,
    isLoading,
    isSuccess,
    isError,
  } = useGetStorageImagesForId(item.profilePhoto);
  const { t, i18n } = useTranslation();

  return (
    <ContainerLink to={DashboardRoutes.animalCards + "/" + item.petId}>
      <DashboardNewestAnimalCardsItemContainer>
        {isError && <DashboardNewestAnimalCardsItemImgError />}
        {isLoading && <NewestAnimalImgSkeleton />}
        {isSuccess && (
          <DashboardNewestAnimalCardsItemImg
            src={img}
            alt={item.name + " photo"}
          />
        )}
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
              {t(typeValueToLabel(item.animalCategory))}
            </Typography>
            <Typography
              variant="UI Small/UI Text 12 Reg"
              color="midGray2">
              {Intl.DateTimeFormat(i18n.language).format(
                new Date(item.createdAt)
              )}
            </Typography>
          </DashboardNewestAnimalCardsItemContentDataContainer>
        </DashboardNewestAnimalCardsItemContentContainer>
      </DashboardNewestAnimalCardsItemContainer>
    </ContainerLink>
  );
};

export default DashboardNewestAnimalCardsItem;
