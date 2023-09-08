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

  const { data: localImagesUrls, isLoading: GetStorageImagesIsLoading } =
    useGetStorageImagesForDashboard(localImagesIds);

  useEffect(() => {
    if (viewsData) {
      const profilePictures = viewsData?.petInListInShelterDto.map(
        (pet) => pet.profilePhoto
      );

      setLocalImagesIds(profilePictures);
    }
  }, [viewsData]);

  if (isLoading || GetStorageImagesIsLoading) {
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
        {viewsData &&
          localImagesUrls &&
          viewsData.petInListInShelterDto.map((item, index) => (
            <React.Fragment key={item.id + item.name + index}>
              <DashboardMostPopularAnimalsItem
                img={localImagesUrls[index]}
                item={item}
              />
              {index !== viewsData.petInListInShelterDto.length - 1 && (
                <Divider />
              )}
            </React.Fragment>
          ))}
      </DashboardMostPopularAnimalsContent>
    </DashboardMostPopularAnimalsContainer>
  );
};

export default DashboardMostPopularAnimals;
