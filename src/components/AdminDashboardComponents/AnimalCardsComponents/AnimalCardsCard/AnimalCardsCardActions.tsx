import { useQueryClient } from "@tanstack/react-query";
import Button from "components/SharedComponents/Button/Button";
import Modal from "components/SharedComponents/Modal/Modal";
import useToast from "hooks/useToast";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import {
  usePostShelterCardsArchive,
  usePutShelterCardsHide,
  usePutShelterCardsPublish,
} from "services/pet/petServices";
import { AnimalCardsCardBtnsContainer } from "./utils/DashboardAnimalCardsCard.styled";

const AnimalCardsCardActions = ({ id }: { id: string }) => {
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const [isMoveToArchiveModalOpen, setIsMoveToArchiveModalOpen] =
    useState(false);
  const queryClient = useQueryClient();
  const {
    mutate: PutShelterCardsPublishFn,
    isLoading: PutShelterCardsPublishIsLoading,
  } = usePutShelterCardsPublish();

  const {
    mutate: PutShelterCardsHideFn,
    isLoading: PutShelterCardsHideIsLoading,
  } = usePutShelterCardsHide();

  const {
    mutate: PostShelterCardsArchiveFn,
    isLoading: PostShelterCardsArchiveIsLoading,
  } = usePostShelterCardsArchive();

  const invalidateQuery = () => {
    queryClient.invalidateQueries({
      queryKey: ["shelterCardsCard", id],
    });
  };

  useEffect(() => {
    if (
      PutShelterCardsPublishIsLoading ||
      PutShelterCardsHideIsLoading ||
      PostShelterCardsArchiveIsLoading
    )
      dispatch(setLoading(true));
    else dispatch(setLoading(false));
  }, [
    PutShelterCardsPublishIsLoading,
    PutShelterCardsHideIsLoading,
    PostShelterCardsArchiveIsLoading,
    dispatch,
  ]);

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
      </AnimalCardsCardBtnsContainer>
      <Modal isOpen={isMoveToArchiveModalOpen}>
        <AnimalCardsCardBtnsContainer>
          <Button
            isFullWidth
            variant="outline"
            onClick={() => setIsMoveToArchiveModalOpen(false)}
            type="button">
            Anuluj
          </Button>
          <Button
            type="button"
            isFullWidth
            onClick={() => {
              PostShelterCardsArchiveFn(id, {
                onSuccess: () => {
                  setIsMoveToArchiveModalOpen(false);
                  showToast(
                    "Karta została pomyślnie przesunięta do archiwum",
                    "success"
                  );
                },
              });
            }}
            color="error">
            Potwierdź
          </Button>
        </AnimalCardsCardBtnsContainer>
      </Modal>
    </>
  );
};

export default AnimalCardsCardActions;
