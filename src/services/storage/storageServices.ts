import { useMutation, useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("storage");
  const mutation = useMutation((files: File[]) => postStoragePictures(files), {
    onError: (error: ExtendedAxiosError) => {
      if (error.response?.status === 400) {
        toastService.showToast(t("error.postStoragePictures"), "error");
      }
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
  const { t } = useTranslation("storage");
  const dispatch = useDispatch();
  const mutation = useMutation((imgId: string) => deleteStorageImage(imgId), {
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.response?.status === 404)
        toastService.showToast(t("error.deleteStorageImage"), "error");
    },
    onSettled: () => dispatch(setLoading(false)),
  });
  return mutation;
};

export const useDeleteStorageImages = () => {
  const { t } = useTranslation("storage");
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
          toastService.showToast(t("error.deleteStorageImages"), "error");
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
    ["storageImages", animalId, { imgsIds: imgsIds }],
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
    onSettled: () => dispatch(setLoading(false)),
  });
  return mutation;
};


export const useGetStorageImagesForId = (imgId: string | undefined) => {
  return useQuery(
    ["storageImagesProfilePictures", imgId],
    () => getStorageImage(imgId as string),
    {
      enabled: !!imgId,
    }
  );
};