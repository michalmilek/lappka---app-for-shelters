import { useMutation, useQuery } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { store } from "redux/store";
import { ExtendedAxiosError } from "services/axiosInstance";
import {
  deleteStorageImage,
  deleteStorageImages,
  getStorageImages,
  postStoragePictures,
} from "./storage";

export const usePostStoragePictures = () => {
  const { showToast } = useToast();
  const mutation = useMutation((files: File[]) => postStoragePictures(files), {
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 400) {
        showToast(
          "Któryś z plików przekracza wagę 15MB lub nie jest zdjęciem.",
          "error"
        );
      } else if (error.status === 403)
        showToast(
          "Nie masz wystarczających uprawnień do wykonania tej akcji. Skontaktuj się z administratorem.",
          "error"
        );
    },
    onMutate: () => {
      store.dispatch(setLoading(true));
    },
    onSettled: () => {
      store.dispatch(setLoading(false));
    },
  });
  return mutation;
};

export const useDeleteStorageImage = () => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const mutation = useMutation((imgId: string) => deleteStorageImage(imgId), {
    onSuccess: () => {
      showToast("Zdjęcie usunięte pomyślnie.", "success");
    },
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 404)
        showToast("Podane zdjęcie nie znajduje się w bazie danych.", "error");
      else if (error.status === 403)
        showToast(
          "Nie masz wystarczających uprawnień do wykonania tej akcji. Skontaktuj się z administratorem.",
          "error"
        );
    },
    onSettled: () => dispatch(setLoading(false)),
  });
  return mutation;
};

export const useDeleteStorageImages = () => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const mutation = useMutation(
    (imgsIds: string[]) => deleteStorageImages(imgsIds),
    {
      onSuccess: () => {
        showToast("Zdjęcia usunięte pomyślnie.", "success");
      },
      onMutate: () => {
        dispatch(setLoading(true));
      },
      onError: (error: ExtendedAxiosError) => {
        if (error.status === 404)
          showToast(
            "Jedno lub więcej zdjęć nie znajduje się w bazie danych.",
            "error"
          );
        else if (error.status === 403)
          showToast(
            "Nie masz wystarczających uprawnień do wykonania tej akcji. Skontaktuj się z administratorem.",
            "error"
          );
      },
      onSettled: () => dispatch(setLoading(false)),
    }
  );
  return mutation;
};

export const useGetStorageImagesForAnimal = (
  imgsIds: string[],
  animalId: string
) => {
  return useQuery(
    ["storageImages", animalId],
    () => getStorageImages(imgsIds),
    {
      enabled: imgsIds.length > 0,
    }
  );
};

export const useGetStorageImagesForDashboard = (imgsIds: string[]) => {
  return useQuery(["storageImages", imgsIds], () => getStorageImages(imgsIds), {
    enabled: imgsIds.length > 0,
  });
};

export const useGetStorageImagesForTable = (
  imgsIds: string[],
  pageNumber: number,
  pageSize: number
) => {
  return useQuery(
    ["storageImagesProfilePictures", pageNumber, pageSize],
    () => getStorageImages(imgsIds),
    {
      enabled: imgsIds.length > 0,
    }
  );
};