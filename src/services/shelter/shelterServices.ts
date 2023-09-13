import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { putShelter } from "./shelter";

export const usePutShelter = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(putShelter, {
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["shelter"]);
    },
    onSettled: () => {
      dispatch(setLoading(false));
    },
  });

  return mutation;
};
