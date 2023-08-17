import { useShelterCards } from "services/pet/petServices";
import AnimalCardsInfo from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsInfo/AnimalCardsInfo";
import AnimalCardsTable from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsTable/AnimalCardsTable";
import SkeletonTableComponent from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsTable/SkeletonTableComponent";
import {
  StyledDashboardAnimalCardsMain,
  StyledDashboardAnimalCardsMainContent,
} from "components/AdminDashboardComponents/AnimalCardsComponents/DashboardAnimalCards.styled";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import Button from "components/SharedComponents/Button/Button";
import { StyledPlusIcon } from "components/SharedComponents/icons/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import useToast from "hooks/useToast";

const AnimalCardsPage = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error, isSuccess } = useShelterCards();
  const { showToast } = useToast();

  useEffect(() => {
    if (isError) showToast(error as string, "error");
  });

  return (
    <StyledDashboardAnimalCardsMain>
      <DashboardNavbar
        title="Karty zwierząt"
        Button={
          <Button
            icon={<StyledPlusIcon />}
            iconPlace="left"
            onClick={() => navigate(DashboardRoutes.animalCardsNewCard)}>
            Nowa karta
          </Button>
        }
      />
      <StyledDashboardAnimalCardsMainContent>
        <AnimalCardsInfo />
        {data && isSuccess && <AnimalCardsTable data={data} />}
        {isLoading && <SkeletonTableComponent />}
      </StyledDashboardAnimalCardsMainContent>
    </StyledDashboardAnimalCardsMain>
  );
};

export default AnimalCardsPage;

//
