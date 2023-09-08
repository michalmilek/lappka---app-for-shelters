import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { store } from "redux/store";
import { ExtendedAxiosError } from "services/axiosInstance";
import toastService from "singletons/toastService";
import {
  deleteStorageImage,
  deleteStorageImages,
  getStorageImage,
  getStorageImages,
  postStoragePicture,
  postStoragePictures,
} from "./storage";

export const usePostStoragePictures = () => {
  const mutation = useMutation((files: File[]) => postStoragePictures(files), {
    onError: (error: ExtendedAxiosError) => {
      if (error.response?.status === 400) {
        toastService.showToast(
          "Któryś z plików przekracza wagę 15MB lub nie jest zdjęciem.",
          "error"
        );
      } else if (error.response?.status === 403)
        toastService.showToast(
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
  const mutation = useMutation((imgId: string) => deleteStorageImage(imgId), {
    onSuccess: () => {
      toastService.showToast("Zdjęcie usunięte pomyślnie.", "success");
    },
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.response?.status === 404)
        toastService.showToast(
          "Podane zdjęcie nie znajduje się w bazie danych.",
          "error"
        );
      else if (error.response?.status === 403)
        toastService.showToast(
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
  const mutation = useMutation(
    (imgsIds: string[]) => deleteStorageImages(imgsIds),
    {
      onSuccess: () => {},
      onMutate: () => {
        dispatch(setLoading(true));
      },
      onError: (error: ExtendedAxiosError) => {
        if (error.response?.status === 404)
          toastService.showToast(
            "Jedno lub więcej zdjęć nie znajduje się w bazie danych.",
            "error"
          );
        else if (error.response?.status === 403)
          toastService.showToast(
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

export const useGetStorageImagesForUser = (imgId: string, userId: string) => {
  return useQuery(
    ["storageImagesProfilePictures", imgId, imgId],
    () => getStorageImage(imgId),
    {
      enabled: !!imgId && !!userId,
    }
  );
};

export const usePostStoragePicture = () => {
  const dispatch = useDispatch();
  const mutation = useMutation(postStoragePicture, {
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.response?.status === 403)
        toastService.showToast(
          "Nie masz wystarczających uprawnień do wykonania tej akcji. Skontaktuj się z administratorem.",
          "error"
        );
    },
    onSettled: () => dispatch(setLoading(false)),
  });
  return mutation;
};


export const useGetStorageImagesForId = (imgId: string) => {
  return useQuery(["storageImagesProfilePictures", imgId], () =>
    getStorageImage(imgId)
  );
};