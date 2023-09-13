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
import { useNavigate, useSearchParams } from "react-router-dom";
import { DashboardRoutes } from "router/router";
import ErrorAnimalCardsTable from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsTable/ErrorAnimalCardsTable";
import { useTranslation } from "react-i18next";

const AnimalCardsPage = () => {
  const [searchParams] = useSearchParams();
  const pageIndexFromQueryParams = searchParams.get("pageIndex");
  const pageSizeFromQueryParams = searchParams.get("pageSize");
  const sortParamFromQueryParams = searchParams.get("sortParam");
  const sortParamOrderFromQueryParams = searchParams.get("asc");
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { data, isLoading, isError, isSuccess } = useShelterCards(
    pageIndexFromQueryParams ? +pageIndexFromQueryParams : 1,
    pageSizeFromQueryParams ? +pageSizeFromQueryParams : 10,
    sortParamFromQueryParams ? sortParamFromQueryParams : "createdAt",
    sortParamOrderFromQueryParams ? sortParamOrderFromQueryParams : "false"
  );

  return (
    <StyledDashboardAnimalCardsMain
      key={
        String(pageIndexFromQueryParams) +
        pageSizeFromQueryParams +
        sortParamFromQueryParams +
        sortParamOrderFromQueryParams
      }>
      <DashboardNavbar
        title="Karty zwierząt"
        Button={
          <Button
            icon={<StyledPlusIcon />}
            iconPlace="left"
            onClick={() => navigate(DashboardRoutes.animalCardsNewCard)}>
            {t("table.newCard")}
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
