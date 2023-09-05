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
import { useSelector } from "react-redux";
import { selectTablePageIndex, selectTablePageSize } from "redux/tableSlice";
import { ExtendedAxiosError } from "services/axiosInstance";
import { useGetStorageImagesForTable } from "services/storage/storageServices";
import {
  PetWithImageUrl,
  ShelterCardsResponseWithProfilePictureUrl,
} from "services/pet/petTypes";

const AnimalCardsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageIndexFromQueryParams = searchParams.get("pageIndex");
  const pageSizeFromQueryParams = searchParams.get("pageSize");
  const sortParamFromQueryParams = searchParams.get("sortParam");
  const sortParamOrderFromQueryParams = searchParams.get("asc");

  const navigate = useNavigate();

  const [pageIndex, setPageIndex] = useState(
    pageIndexFromQueryParams ? pageIndexFromQueryParams : 1
  );
  const [pageSize, setPageSize] = useState(
    pageSizeFromQueryParams ? pageSizeFromQueryParams : 10
  );
  const [sortParam, setSortParam] = useState(
    sortParamFromQueryParams ? sortParamFromQueryParams : "createdat"
  );
  const [sortParamOrder, setSortParamOrder] = useState(
    sortParamOrderFromQueryParams ? sortParamOrderFromQueryParams : "false"
  );

  const { data, isLoading, isError, isSuccess } = useShelterCards(
    +pageIndex,
    +pageSize,
    sortParam,
    sortParamOrder
  );
  const [imageIds, setImageIds] = useState<string[]>([]);

  useEffect(() => {
    if (isSuccess && data) {
      const profilePhotosArray = data.petInListInShelterDto.map(
        (pet) => pet.profilePhoto
      );
      setImageIds(profilePhotosArray);
    }
  }, [data, isSuccess]);

  const { data: imageUrls } = useGetStorageImagesForTable(
    imageIds,
    +pageIndex,
    +pageSize
  );

  const [dataWithProfilePictureUrl, setDataWithProfilePictureUrl] =
    useState<ShelterCardsResponseWithProfilePictureUrl | null>(null);

  useEffect(() => {
    if (imageUrls && data) {
      const petsWithProfileUrls = data.petInListInShelterDto.map(
        (pet, index) => ({
          ...pet,
          profilePhotoUrl: imageUrls[index],
        })
      );

      setDataWithProfilePictureUrl({
        ...data,
        petInListInShelterDto: petsWithProfileUrls,
      });
    }
  }, [data, imageUrls]);

  useEffect(() => {
    if (pageIndexFromQueryParams) {
      setPageIndex(pageIndexFromQueryParams);
    }
  }, [pageIndexFromQueryParams]);

  useEffect(() => {
    if (pageSizeFromQueryParams) {
      setPageSize(pageSizeFromQueryParams);
    }
  }, [pageSizeFromQueryParams]);

  useEffect(() => {
    if (sortParamFromQueryParams) {
      setSortParam(sortParamFromQueryParams);
    }
  }, [sortParamFromQueryParams]);

  useEffect(() => {
    if (sortParamOrderFromQueryParams) {
      setSortParamOrder(sortParamOrderFromQueryParams);
    }
  }, [sortParamOrderFromQueryParams]);

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
        {data &&
          isSuccess &&
          dataWithProfilePictureUrl &&
          typeof dataWithProfilePictureUrl.petInListInShelterDto[0]
            .profilePhotoUrl === "string" && (
            <AnimalCardsTable data={dataWithProfilePictureUrl} />
          )}
        {isLoading && <SkeletonTableComponent />}
        {isError && <ErrorAnimalCardsTable />}
      </StyledDashboardAnimalCardsMainContent>
    </StyledDashboardAnimalCardsMain>
  );
};

export default AnimalCardsPage;
