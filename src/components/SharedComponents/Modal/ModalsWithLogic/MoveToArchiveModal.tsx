import Button from "components/SharedComponents/Button/Button";
import Modal from "components/SharedComponents/Modal/Modal";
import React from "react";
import { useTranslation } from "react-i18next";
import { usePostShelterCardsArchive } from "services/pet/petServices";
import toastService from "singletons/toastService";
import { AnimalCardsCardBtnsContainer } from "../../../AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/utils/DashboardAnimalCardsCard.styled";

interface Props {
  isMoveToArchiveModalOpen: boolean;
  id: string;
  handleMoveToArchiveModal: (value: boolean) => void;
}

const MoveToArchiveModal = ({
  isMoveToArchiveModalOpen,
  id,
  handleMoveToArchiveModal,
}: Props) => {
  const { mutate: PostShelterCardsArchiveFn } = usePostShelterCardsArchive();
  const { t } = useTranslation();
  return (
    <Modal isOpen={isMoveToArchiveModalOpen}>
      <AnimalCardsCardBtnsContainer>
        <Button
          isFullWidth
          variant="outline"
          onClick={() => handleMoveToArchiveModal(false)}
          type="button">
          {t("buttons.cancel")}
        </Button>
        <Button
          type="button"
          isFullWidth
          onClick={() => {
            PostShelterCardsArchiveFn(id, {
              onSuccess: () => {
                handleMoveToArchiveModal(false);
                toastService.showToast(
                  "Karta została pomyślnie przesunięta do archiwum",
                  "success"
                );
              },
            });
          }}
          color="error">
          {t("buttons.confirm")}
        </Button>
      </AnimalCardsCardBtnsContainer>
    </Modal>
  );
};

export default MoveToArchiveModal;
