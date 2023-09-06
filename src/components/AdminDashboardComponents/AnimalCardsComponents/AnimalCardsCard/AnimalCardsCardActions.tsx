import { useQueryClient } from "@tanstack/react-query";
import Button from "components/SharedComponents/Button/Button";
import Modal from "components/SharedComponents/Modal/Modal";
import useToast from "hooks/useToast";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import {
  useDeleteShelterCard,
  usePutShelterCardsHide,
  usePutShelterCardsPublish,
} from "services/pet/petServices";
import DeleteCardModal from "../../../SharedComponents/Modal/ModalsWithLogic/DeleteCardModal";
import MoveToArchiveModal from "../../../SharedComponents/Modal/ModalsWithLogic/MoveToArchiveModal";
import { AnimalCardsCardBtnsContainer } from "./utils/DashboardAnimalCardsCard.styled";

const AnimalCardsCardActions = ({ id }: { id: string }) => {
  const { showToast } = useToast();
  const [isMoveToArchiveModalOpen, setIsMoveToArchiveModalOpen] =
    useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleMoveToArchiveModal = (value: boolean) => {
    setIsMoveToArchiveModalOpen(value);
  };

  const handleDeleteModalState = (value: boolean) => {
    setIsDeleteModalOpen(value);
  };

  const queryClient = useQueryClient();
  const { mutate: PutShelterCardsPublishFn } = usePutShelterCardsPublish();

  const { mutate: PutShelterCardsHideFn } = usePutShelterCardsHide();

  const invalidateQuery = () => {
    queryClient.invalidateQueries({
      queryKey: ["shelterCardsCard", id],
    });
  };

  return (
    <>
      <AnimalCardsCardBtnsContainer>
        <Button
          onClick={() => {
            PutShelterCardsHideFn(id, {
              onSuccess: () => {
                showToast("Karta została ukryta", "success");
                invalidateQuery();
              },
            });
          }}
          type="button"
          variant="outline">
          Ukryj
        </Button>
        <Button
          onClick={() => {
            PutShelterCardsPublishFn(id, {
              onSuccess: () => {
                showToast("Karta została opublikowana", "success");
                invalidateQuery();
              },
            });
          }}
          type="button">
          Publikuj
        </Button>
        <Button
          type="button"
          onClick={() => setIsMoveToArchiveModalOpen(true)}
          variant="fill"
          color="error">
          Przenieś do archiwum
        </Button>
        <Button
          type="button"
          onClick={() => setIsDeleteModalOpen(true)}
          variant="fill"
          color="red800">
          Usuń kartę
        </Button>
      </AnimalCardsCardBtnsContainer>
      <MoveToArchiveModal
        handleMoveToArchiveModal={handleMoveToArchiveModal}
        id={id}
        isMoveToArchiveModalOpen={isMoveToArchiveModalOpen}
      />
      <DeleteCardModal
        handleDeleteModalState={handleDeleteModalState}
        id={id}
        isDeleteModalOpen={isDeleteModalOpen}
      />
    </>
  );
};

export default AnimalCardsCardActions;
