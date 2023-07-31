import { useQuery } from "@tanstack/react-query";
import { getShelterCards, getShelterStats } from "./pet";

export const useShelterStats = () => {
  return useQuery(["shelterStats"], getShelterStats);
};

export const useShelterCards = () => {
  return useQuery(["shelterCards"], getShelterCards);
};
