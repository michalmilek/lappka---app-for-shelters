import { useShelterCardsCard } from "services/pet/petServices";
import React, { useEffect } from "react";
import DashboardAnimalCardsCardForm from "./DashboardAnimalCardsCardForm";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import AnimalCardsCardSkeleton from "./utils/AnimalCardsCardSkeleton";
import AnimalCardsCardError from "./utils/AnimalCardsCardError";

const DashboardAnimalCardsCardStateHandler = ({
  isEditOn,
  id,
}: {
  isEditOn: boolean;
  id: string;
}) => {
  const { isLoading, isError, error, isSuccess, data } =
    useShelterCardsCard(id);
  const { handleDynamicTitle } = useBreadcrumbs();

  useEffect(() => {
    if (isSuccess) handleDynamicTitle(data.name);
  }, [data, isSuccess, handleDynamicTitle]);

  if (isError) {
    console.log(error);

    return <AnimalCardsCardError />;
  }

  if (isLoading) {
    return <AnimalCardsCardSkeleton />;
  }

  if (isSuccess && data) {
    return (
      <DashboardAnimalCardsCardForm
        isEditOn={isEditOn}
        data={data}
      />
    );
  }
  return null;
};

export default DashboardAnimalCardsCardStateHandler;
