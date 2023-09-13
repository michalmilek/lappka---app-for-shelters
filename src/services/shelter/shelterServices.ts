import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import toastService from "singletons/toastService";
import { putShelter } from "./shelter";

export const usePutShelter = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const mutation = useMutation(putShelter, {
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onSuccess: () => {
      toastService.showToast(
        t("organisationSettings.orgDataHasChanged"),
        "success"
      );
      queryClient.invalidateQueries(["shelter"]);
    },
    onSettled: () => {
      dispatch(setLoading(false));
    },
  });

  return mutation;
};
