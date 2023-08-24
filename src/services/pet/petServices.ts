import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import {
  getShelter,
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
  postShelterCardsCreatePet,
  postShelterCardsDog,
  postShelterCardsOther,
  putShelterCardsAnimal,
  putShelterCardsHide,
  putShelterCardsPublish,
  updateShelterVolunteering,
} from "./pet";
import {
  Animal,
  AnimalCreatePetInterface,
  AnimalEdit,
  Cat,
  Dog,
  Other,
  ShelterVolunteeringResponse,
} from "./petTypes";

export const useGetShelter = () => {
  return useQuery(["shelter"], getShelter);
};

export const useShelterStats = () => {
  return useQuery(["shelterStats"], getShelterStats);
};

export const useShelterCards = (
  pageNumber: number = 1,
  pageSize: number = 10
) => {
  return useQuery(["shelterCards", pageSize, pageNumber], () =>
    getShelterCards([pageSize, pageNumber])
  );
};

export const useShelterVolunteering = (id: string) => {
  return useQuery(["shelterVolunteering", id], () =>
    getShelterVolunteering(id)
  );
};

export const useUpdateShelterVolunteering = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: ShelterVolunteeringResponse) => updateShelterVolunteering(data),
    {
      onSuccess: () => {
        showToast("Dane o wolontariacie pomyślnie zaktualizowane.");
        queryClient.invalidateQueries(["shelterVolunteering"]);
      },
    }
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
export const usePostShelterCardsCreatePet = () => {
  const mutation = useMutation((data: AnimalCreatePetInterface) =>
    postShelterCardsCreatePet(data)
  );

  return mutation;
};

export const usePutShelterCardsAnimal = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: AnimalEdit) => putShelterCardsAnimal(data),
    {
      onSuccess: () => {
        showToast(
          "Karta zwierzęcia została pomyślnei zaktualizowana.",
          "success"
        );
        queryClient.invalidateQueries({ queryKey: ["shelterCardsCard"] });
      },
    }
  );

  return mutation;
};

export const usePostShelterCardsArchive = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const mutation = useMutation(
    (petId: string) => postShelterCardsArchive(petId),
    {
      onSuccess: () => {
        showToast("Karta została przeniesiona do archiwum", "success");
        queryClient.invalidateQueries({ queryKey: ["shelterCards"] });
      },
    }
  );

  return mutation;
};

export const usePutShelterCardsPublish = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (petId: string) => putShelterCardsPublish(petId),
    {
      onSuccess: () => {
        showToast("Karta została opublikowana.", "success");
        queryClient.invalidateQueries({ queryKey: ["shelterCards"] });
      },
    }
  );

  return mutation;
};

export const usePutShelterCardsHide = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation((petId: string) => putShelterCardsHide(petId), {
    onSuccess: () => {
      showToast("Karta została ukryta.", "success");
      queryClient.invalidateQueries({ queryKey: ["shelterCards"] });
    },
  });

  return mutation;
};
