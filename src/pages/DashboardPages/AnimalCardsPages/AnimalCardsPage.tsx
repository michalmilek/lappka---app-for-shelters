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
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import useToast from "hooks/useToast";
import ErrorAnimalCardsTable from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsTable/ErrorAnimalCardsTable";
import { PaginationState } from "@tanstack/react-table";
import { useDispatch, useSelector } from "react-redux";
import { selectTablePageIndex, selectTablePageSize } from "redux/tableSlice";

const AnimalCardsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageIndexFromQueryParams = searchParams.get("pageIndex");
  const pageSizeFromQueryParams = searchParams.get("pageSize");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const pageIndexFromRedux = useSelector(selectTablePageIndex);
  const pageSizeFromRedux = useSelector(selectTablePageSize);

  const pageIndex = pageIndexFromQueryParams
    ? pageIndexFromQueryParams
    : pageIndexFromRedux;

  const pageSize = pageSizeFromQueryParams
    ? pageSizeFromQueryParams
    : pageSizeFromRedux;

  const { data, isLoading, isError, error, isSuccess } = useShelterCards(
    +pageIndex,
    +pageSize
  );
  const { showToast } = useToast();

  useEffect(() => {
    if (isError) {
      showToast("Wystąpił błąd pobierania danych", "error");
      console.log(error);
    }
  }, [error, isError, showToast]);

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
        {isError && <ErrorAnimalCardsTable />}
      </StyledDashboardAnimalCardsMainContent>
    </StyledDashboardAnimalCardsMain>
  );
};

export default AnimalCardsPage;

//
