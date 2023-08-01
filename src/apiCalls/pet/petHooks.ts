import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getShelterCards,
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
