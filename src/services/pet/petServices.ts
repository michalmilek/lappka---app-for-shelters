import { useMutation, useQuery } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import {
  getShelterCards,
  getShelterCardsArchiveChartData,
  getShelterCardsArchiveChartDataForMonth,
  getShelterCardsArchiveChartDataForWeek,
  getShelterCardsCard,
  getShelterStats,
  getShelterVolunteering,
  postShelterCardsAnimal,
  postShelterCardsArchive,
  postShelterCardsCat,
  postShelterCardsDog,
  postShelterCardsOther,
  putShelterCardsAnimal,
  putShelterCardsHide,
  putShelterCardsPublish,
  updateShelterVolunteering,
} from "./pet";
import {
  Animal,
  AnimalEdit,
  Cat,
  Dog,
  Other,
  ShelterVolunteeringResponse,
} from "./petTypes";

export const useShelterStats = () => {
  return useQuery(["shelterStats"], getShelterStats);
};

export const useShelterCards = () => {
  return useQuery(["shelterCards"], getShelterCards);
};

export const useShelterVolunteering = (id: string) => {
  return useQuery(["shelterVolunteering", id], () =>
    getShelterVolunteering(id)
  );
};

export const useUpdateShelterVolunteering = () => {
  const mutation = useMutation((data: ShelterVolunteeringResponse) =>
    updateShelterVolunteering(data)
  );

  return mutation;
};

export const useShelterCardsArchiveChartData = () => {
  return useQuery(["shelterArchiveChartDataYear"], () =>
    getShelterCardsArchiveChartData()
  );
};

export const useShelterCardsArchiveChartDataForMonth = () => {
  return useQuery(["shelterArchiveChartDataMonth"], () =>
    getShelterCardsArchiveChartDataForMonth()
  );
};

export const useShelterCardsArchiveChartDataForWeek = () => {
  return useQuery(["shelterArchiveChartDataWeek"], () =>
    getShelterCardsArchiveChartDataForWeek()
  );
};

export const useShelterCardsCard = (petId: string) => {
  return useQuery(["shelterCardsCard", petId], () =>
    getShelterCardsCard(petId)
  );
};

export const usePostShelterCardsCat = () => {
  const mutation = useMutation((data: Cat) => postShelterCardsCat(data));

  return mutation;
};

export const usePostShelterCardsDog = () => {
  const mutation = useMutation((data: Dog) => postShelterCardsDog(data));

  return mutation;
};

export const usePostShelterCardsOther = () => {
  const mutation = useMutation((data: Other) => postShelterCardsOther(data));

  return mutation;
};

export const usePostShelterCardsAnimal = () => {
  const mutation = useMutation((data: Animal) => postShelterCardsAnimal(data));

  return mutation;
};

export const usePutShelterCardsAnimal = () => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const mutation = useMutation(
    (data: AnimalEdit) => putShelterCardsAnimal(data),
    {
      onSuccess: () => {
        dispatch(setLoading(false));
        showToast("Zdjęcie usunięte pomyślnie.", "success");
      },
      onMutate: () => {
        dispatch(setLoading(true));
      },
      onError: () => {
        dispatch(setLoading(false));
        console.log(mutation.error);
      },
    }
  );

  return mutation;
};

export const usePostShelterCardsArchive = () => {
  const mutation = useMutation((petId: string) =>
    postShelterCardsArchive(petId)
  );

  return mutation;
};

export const usePutShelterCardsPublish = () => {
  const mutation = useMutation((petId: string) =>
    putShelterCardsPublish(petId)
  );

  return mutation;
};

export const usePutShelterCardsHide = () => {
  const mutation = useMutation((petId: string) => putShelterCardsHide(petId));

  return mutation;
};