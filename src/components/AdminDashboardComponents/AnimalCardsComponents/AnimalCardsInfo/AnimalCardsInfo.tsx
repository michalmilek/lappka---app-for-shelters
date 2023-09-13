import { useShelterStats } from "services/pet/petServices";
import {
  IdentificationIcon,
  SearchCircleIcon,
  UserCircleIcon,
} from "components/SharedComponents/icons/icons";
import { styled } from "styled-components";
import AnimalCardsInfoItem from "./AnimalCardsInfoItem";
import ErrorAnimalCardsInfo from "./ErrorAnimalCardsInfo";
import { useTranslation } from "react-i18next";

const AnimalCardsInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;

const AnimalCardsInfo = () => {
  const { data, isLoading, isError } = useShelterStats();
  const { t } = useTranslation();

  if (isError) {
    return <ErrorAnimalCardsInfo />;
  }

  return (
    <AnimalCardsInfoContainer>
      <AnimalCardsInfoItem
        isLoading={isLoading}
        icon={<IdentificationIcon />}
        text={t("shelterStats.animalCards")}
        number={data ? data.cardCount : 0}
      />
      <AnimalCardsInfoItem
        isLoading={isLoading}
        icon={<SearchCircleIcon />}
        text={t("shelterStats.seeksOwner")}
        number={data ? data.toAdoptCount : 0}
      />
      <AnimalCardsInfoItem
        isLoading={isLoading}
        icon={<UserCircleIcon />}
        text={t("shelterStats.withOwner")}
        number={data ? data.adoptedCount : 0}
      />
    </AnimalCardsInfoContainer>
  );
};

export default AnimalCardsInfo;
