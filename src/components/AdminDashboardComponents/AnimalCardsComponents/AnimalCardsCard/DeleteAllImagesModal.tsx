import { useQueryClient } from "@tanstack/react-query";
import Button from "components/SharedComponents/Button/Button";
import Modal from "components/SharedComponents/Modal/Modal";
import Typography from "components/SharedComponents/Typography/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimalCardsCardBtnsContainer } from "./utils/DashboardAnimalCardsCard.styled";

const DeleteAllImagesModal = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] = useState(false);
  const queryClient = useQueryClient();
  return (
    <>
      <Button
        type="button"
        onClick={() => setIsDeleteAllModalOpen(true)}>
        {t("animalCard.deleteAllPhotos")}
      </Button>
      <Modal isOpen={isDeleteAllModalOpen}>
        <Typography
          variant="Heading 18 Semi Bold"
          tag="h3">
          {t("animalCard.areYouSure")}
        </Typography>
        <AnimalCardsCardBtnsContainer>
          <Button
            isFullWidth
            variant="outline"
            onClick={() => setIsDeleteAllModalOpen(false)}
            type="button">
            {t("buttons.cancel")}
          </Button>
          <Button
            isFullWidth
            onClick={() => {
              queryClient.setQueryData(["storageImages", id], []);
              setIsDeleteAllModalOpen(false);
            }}
            type="button">
            {t("buttons.confirm")}
          </Button>
        </AnimalCardsCardBtnsContainer>
      </Modal>
    </>
  );
};

export default DeleteAllImagesModal;

/* deleteStorageImagesFn(data.photos, {
               onSuccess: () => {
                 setIsDeleteAllModalOpen(false);
                 queryClient.invalidateQueries({
                   queryKey: ["shelterCardsCard", id],
                 });
               },
             }); */
