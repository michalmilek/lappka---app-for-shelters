import { useShelterStats } from "apiCalls/pet/petHooks";
import {
  IdentificationIcon,
  SearchCircleIcon,
  UserCircleIcon,
} from "components/SharedComponents/icons/icons";
import { styled } from "styled-components";
import AnimalCardsInfoItem from "./AnimalCardsInfoItem";

const AnimalCardsInfoContainer = styled.div`
  grid-area: a;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

const AnimalCardsInfo = () => {
  const { data, isLoading, isError, error, isSuccess } = useShelterStats();

  if (isError) {
    console.log(error);
  }

  if (isSuccess && data) {
    return (
      <AnimalCardsInfoContainer>
        <AnimalCardsInfoItem
          isLoading={isLoading}
          icon={<IdentificationIcon />}
          text="Karty zwierząt"
          number={data.cardCount}
        />
        <AnimalCardsInfoItem
          isLoading={isLoading}
          icon={<SearchCircleIcon />}
          text="Szuka właściciela"
          number={data.toAdoptCount}
        />
        <AnimalCardsInfoItem
          isLoading={isLoading}
          icon={<UserCircleIcon />}
          text="Z właścicielem"
          number={data.adoptedCount}
        />
      </AnimalCardsInfoContainer>
    );
  }

  return null;
};

export default AnimalCardsInfo;
