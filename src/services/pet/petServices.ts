import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import toastService from "singletons/toastService";
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

export const useShelterVolunteering = () => {
  return useQuery(["shelterVolunteering"], getShelterVolunteering);
};

export const useUpdateShelterVolunteering = () => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: ShelterVolunteeringResponse) => updateShelterVolunteering(data),
    {
      onSuccess: () => {
        showToast("Dane o wolontariacie pomyślnie zaktualizowane.");
        queryClient.invalidateQueries(["shelterVolunteering"]);
      },
      onError: (error) => {
        console.log(error);
        toastService.showToast(
          "Wystąpił błąd z aktualizacją danych, skontaktuj się z administratorem.",
          "error"
        );
      },
      onMutate: () => {
        dispatch(setLoading(true));
      },
      onSettled: () => {
        dispatch(setLoading(false));
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

export const usePostShelterCardsCreatePet = () => {
  const dispatch = useDispatch();
  const mutation = useMutation(
    (data: AnimalCreatePetInterface) => postShelterCardsCreatePet(data),
    {
      onError: (error) => {
        toastService.showToast("Dodawanie zakończone niepowodzeniem", "error");
        console.log(error);
      },
      onMutate: () => {
        dispatch(setLoading(true));
      },
      onSettled: () => {
        dispatch(setLoading(false));
      },
    }
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
