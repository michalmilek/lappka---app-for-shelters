import { useShelterStats } from "services/pet/petServices";
import {
  IdentificationIcon,
  SearchCircleIcon,
  UserCircleIcon,
} from "components/SharedComponents/icons/icons";
import { styled } from "styled-components";
import AnimalCardsInfoItem from "./AnimalCardsInfoItem";
import ErrorAnimalCardsInfo from "./ErrorAnimalCardsInfo";

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

  if (isError) {
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
