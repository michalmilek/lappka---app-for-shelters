import Button from "components/SharedComponents/Button/Button";
import Modal from "components/SharedComponents/Modal/Modal";
import React from "react";
import { useDeleteShelterCard } from "services/pet/petServices";
import { AnimalCardsCardBtnsContainer } from "../utils/DashboardAnimalCardsCard.styled";

interface Props {
  isDeleteModalOpen: boolean;
  id: string;
  handleDeleteModalState: (value: boolean) => void;
}

const DeleteCardModal = ({
  isDeleteModalOpen,
  id,
  handleDeleteModalState,
}: Props) => {
  const { mutate: deleteCardFn } = useDeleteShelterCard();

  return (
    <Modal isOpen={isDeleteModalOpen}>
      <AnimalCardsCardBtnsContainer>
        <Button
          isFullWidth
          variant="outline"
          onClick={() => handleDeleteModalState(false)}
          type="button">
          Anuluj
        </Button>
        <Button
          type="button"
          isFullWidth
          onClick={() => {
            deleteCardFn(id, {
              onSuccess: () => {
                handleDeleteModalState(false);
              },
            });
          }}
          color="red800">
          Potwierdź
        </Button>
      </AnimalCardsCardBtnsContainer>
    </Modal>
  );
};

export default DeleteCardModal;
