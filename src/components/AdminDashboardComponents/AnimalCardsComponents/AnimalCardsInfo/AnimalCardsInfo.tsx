import { useShelterStats } from "services/pet/petServices";
import {
  IdentificationIcon,
  SearchCircleIcon,
  UserCircleIcon,
} from "components/SharedComponents/icons/icons";
import { styled } from "styled-components";
import AnimalCardsInfoItem from "./AnimalCardsInfoItem";
import SkeletonAnimalCardsInfoItem from "./SkeletonAnimalCardsInfoItem";
import ErrorAnimalCardsInfo from "./ErrorAnimalCardsInfo";

const AnimalCardsInfoContainer = styled.div`
  grid-area: a;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100px;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

const AnimalCardsInfo = () => {
  const { data, isLoading, isError, error, isSuccess } = useShelterStats();

  if (isError) {
    console.log(error);
    return <ErrorAnimalCardsInfo />;
  }

  return (
    <AnimalCardsInfoContainer>
      <AnimalCardsInfoItem
        isLoading={isLoading}
        icon={<IdentificationIcon />}
        text="Karty zwierząt"
        number={data ? data.cardCount : 0}
      />
      <AnimalCardsInfoItem
        isLoading={isLoading}
        icon={<SearchCircleIcon />}
        text="Szuka właściciela"
        number={data ? data.toAdoptCount : 0}
      />
      <AnimalCardsInfoItem
        isLoading={isLoading}
        icon={<UserCircleIcon />}
        text="Z właścicielem"
        number={data ? data.adoptedCount : 0}
      />
    </AnimalCardsInfoContainer>
  );
};

export default AnimalCardsInfo;
