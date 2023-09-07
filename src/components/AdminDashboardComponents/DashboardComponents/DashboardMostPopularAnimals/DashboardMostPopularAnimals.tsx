import Divider from "components/SharedComponents/Divider/Divider";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useState, useEffect } from "react";
import { useShelterCards } from "services/pet/petServices";
import { Pet } from "services/pet/petTypes";
import { useGetStorageImagesForDashboard } from "services/storage/storageServices";
import {
  DashboardMostPopularAnimalsContainer,
  DashboardMostPopularAnimalsContent,
  DashboardMostPopularAnimalsHeadingContainer,
} from "./DashboardMostPopularAnimals.styled";
import DashboardMostPopularAnimalsItem from "./DashboardMostPopularAnimalsItem";
import SkeletonMostPopularAnimals from "./SkeletonMostPopularAnimals";

export interface PetWithUrl extends Omit<Pet, "isVisible"> {
  img: string;
  isVisible?: boolean;
}

const DashboardMostPopularAnimals = () => {
  const {
    isLoading,
    data: viewsData,
    isError,
    error,
    isSuccess,
  } = useShelterCards(1, 5, "views");

  const [localImagesIds, setLocalImagesIds] = useState<string[]>([]);

  const {
    isSuccess: GetStorageImagesIsSuccess,
    data: localImagesUrls,
    isLoading: GetStorageImagesIsLoading,
  } = useGetStorageImagesForDashboard(localImagesIds);

  const [viewsDataWithUrls, setViewsDataWithUrls] = useState<PetWithUrl[]>([]);

  useEffect(() => {
    if (viewsData) {
      const profilePictures = viewsData?.petInListInShelterDto.map(
        (pet) => pet.profilePhoto
      );

      setLocalImagesIds(profilePictures);
    }
  }, [viewsData]);

  useEffect(() => {
    if (viewsData && localImagesUrls) {
      const updatedViewsData = viewsData.petInListInShelterDto.map(
        (pet, index) => {
          if (localImagesUrls[index]) {
            return {
              ...pet,
              img: localImagesUrls[index],
            };
          }
          return pet;
        }
      );
      setViewsDataWithUrls(updatedViewsData as PetWithUrl[]);
    }
  }, [localImagesUrls, viewsData]);

  if (isLoading) {
    return <SkeletonMostPopularAnimals />;
  }

  return (
    <DashboardMostPopularAnimalsContainer>
      <DashboardMostPopularAnimalsHeadingContainer>
        <Typography
          variant="Heading 18 Semi Bold"
          color="darkGray2">
          Najpopularniejsze
        </Typography>
      </DashboardMostPopularAnimalsHeadingContainer>
      <Divider />
      <DashboardMostPopularAnimalsContent>
        {viewsDataWithUrls.map((item, index) => (
          <React.Fragment key={item.id + item.name + index}>
            <DashboardMostPopularAnimalsItem item={item} />
            {index !== viewsDataWithUrls.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </DashboardMostPopularAnimalsContent>
    </DashboardMostPopularAnimalsContainer>
  );
};

export default DashboardMostPopularAnimals;
