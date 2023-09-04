import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "redux/loadingSlice";
import { store } from "redux/store";
import { DashboardRoutes } from "router/router";
import { ExtendedAxiosError } from "services/axiosInstance";
import toastService from "singletons/toastService";
import {
  deleteShelterCard,
  getShelter,
  getShelterCards,
  getShelterCardsArchiveChartData,
  getShelterCardsArchiveChartDataForMonth,
  getShelterCardsArchiveChartDataForWeek,
  getShelterCardsCard,
  getShelterStats,
  getShelterVolunteering,
  postShelterCardsArchive,
  postShelterCardsCreatePet,
  putShelterCardsAnimal,
  putShelterCardsHide,
  putShelterCardsPublish,
  updateShelterVolunteering,
} from "./pet";
import {
  AnimalCreatePetInterface,
  AnimalEdit,
  PutSheltersCardInterface,
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
  pageSize: number = 10,
  sortParam: string = "createdAt",
  asc: string = "false"
) => {
  return useQuery(["shelterCards", pageSize, pageNumber, sortParam, asc], () =>
    getShelterCards([pageSize, pageNumber], sortParam, asc)
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
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (data: AnimalCreatePetInterface) => postShelterCardsCreatePet(data),
    {
      onSuccess: (_, payload) => {
        navigate(DashboardRoutes.dashboard);
        toastService.showToast(
          `Karta dla zwierzęcia o imieniu "${payload.name}" została utworzona`,
          "success"
        );
        queryClient.invalidateQueries(["shelterCards"]);
      },
      onError: (error: ExtendedAxiosError) => {
        if (error.response?.status !== 500) {
          toastService.showToast(
            "Dodawanie zakończone niepowodzeniem",
            "error"
          );
          console.log(error);
        }
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
    (data: PutSheltersCardInterface) => putShelterCardsAnimal(data),
    {
      onSuccess: () => {
        showToast(
          "Karta zwierzęcia została pomyślnie zaktualizowana.",
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
      onSuccess: (_, payload) => {
        showToast(`Karta została opublikowana.`, "success");
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

export const useDeleteShelterCard = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation((petId: string) => deleteShelterCard(petId), {
    onSuccess: () => {
      toastService.showToast("Karta została usunięta.", "success");
      queryClient.invalidateQueries({ queryKey: ["shelterCards"] });
      navigate(DashboardRoutes.dashboard);
    },
    onMutate: () => {
      store.dispatch(setLoading(true));
    },
    onSettled: () => {
      store.dispatch(setLoading(false));
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.response?.status === 403)
        toastService.showToast(
          "Nie masz uprawnień, aby usunąć kartę. Jeśli uważasz, że to bląd skontaktuj się z administratorem."
        );
    },
  });

  return mutation;
};
