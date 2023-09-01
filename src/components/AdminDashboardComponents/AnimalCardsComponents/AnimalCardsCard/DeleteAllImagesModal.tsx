import { useQueryClient } from "@tanstack/react-query";
import Button from "components/SharedComponents/Button/Button";
import Modal from "components/SharedComponents/Modal/Modal";
import Typography from "components/SharedComponents/Typography/Typography";
import { useState } from "react";
import { AnimalCardsCardBtnsContainer } from "./utils/DashboardAnimalCardsCard.styled";

const DeleteAllImagesModal = ({ id }: { id: string }) => {
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] = useState(false);
  const queryClient = useQueryClient();
  return (
    <>
      <Button
        type="button"
        onClick={() => setIsDeleteAllModalOpen(true)}>
        Usuń wszystkie zdjęcia
      </Button>
      <Modal isOpen={isDeleteAllModalOpen}>
        <Typography
          variant="Heading 18 Semi Bold"
          tag="h3">
          Czy chcesz usunąć wszystkie zdjęcia z karty?
        </Typography>
        <AnimalCardsCardBtnsContainer>
          <Button
            isFullWidth
            variant="outline"
            onClick={() => setIsDeleteAllModalOpen(false)}
            type="button">
            Anuluj
          </Button>
          <Button
            isFullWidth
            onClick={() => {
              queryClient.setQueryData(["storageImages", id], []);
              setIsDeleteAllModalOpen(false);
            }}
            type="button">
            Potwierdź
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
