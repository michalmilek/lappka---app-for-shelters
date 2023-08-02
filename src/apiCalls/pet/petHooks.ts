import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getShelterCards,
  getShelterCardsArchiveChartData,
  getShelterCardsArchiveChartDataForMonth,
  getShelterCardsArchiveChartDataForWeek,
  getShelterCardsCard,
  getShelterStats,
  getShelterVolunteering,
  ShelterVolunteeringResponse,
  updateShelterVolunteering,
} from "./pet";

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