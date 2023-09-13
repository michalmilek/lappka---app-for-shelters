import { useShelterCardsCard } from "services/pet/petServices";
import { useEffect } from "react";
import DashboardAnimalCardsCardForm from "./DashboardAnimalCardsCardForm";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import AnimalCardsCardSkeleton from "./utils/AnimalCardsCardSkeleton";
import AnimalCardsCardError from "./utils/AnimalCardsCardError";
import useDynamicTitle from "hooks/useDynamicTitle";
import { useTranslation } from "react-i18next";

const DashboardAnimalCardsCardStateHandler = ({
  isEditOn,
  id,
}: {
  isEditOn: boolean;
  id: string;
}) => {
  const { t } = useTranslation();
  const { isLoading, isError, error, isSuccess, data } =
    useShelterCardsCard(id);
  const { handleDynamicTitle } = useBreadcrumbs();
  const { handleDynamicTitle: handleDynamicTitleInBrowserCardName } =
    useDynamicTitle();

  useEffect(() => {
    if (isSuccess) {
      handleDynamicTitle(data.name);
      handleDynamicTitleInBrowserCardName(
        "ŁAPPKA - " + t("animalCard.card") + " " + data.name
      );
    }
  }, [
    data,
    isSuccess,
    handleDynamicTitle,
    handleDynamicTitleInBrowserCardName,
  ]);

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
