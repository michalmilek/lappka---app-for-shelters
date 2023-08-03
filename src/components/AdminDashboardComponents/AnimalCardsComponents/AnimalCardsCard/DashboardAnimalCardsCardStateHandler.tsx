import { useShelterCardsCard } from "apiCalls/pet/petHooks";
import React from "react";
import DashboardAnimalCardsCardForm from "./DashboardAnimalCardsCardForm";

const DashboardAnimalCardsCardStateHandler = ({
  isEditOn,
  id,
}: {
  isEditOn: boolean;
  id: string;
}) => {
  const { isLoading, isError, error, isSuccess, data } =
    useShelterCardsCard(id);

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
