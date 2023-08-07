import { useMutation } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { deleteStorageImage, postStoragePicture } from "./storage";

export function usePostStoragePicture() {
  const mutation = useMutation((file: File) => postStoragePicture(file));
  return mutation;
}

export const useDeleteStorageImage = () => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const mutation = useMutation((imgId: string) => deleteStorageImage(imgId), {
    onSuccess: () => {
      dispatch(setLoading(false));
      showToast("Zdjęcie usunięte pomyślnie.", "success");
    },
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onError: () => {
      dispatch(setLoading(true));
      console.log(mutation.error);
    },
  });
  return mutation;
};