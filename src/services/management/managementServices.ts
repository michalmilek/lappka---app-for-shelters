import { useMutation, useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import toastService from "singletons/toastService";
import {
  addWorker,
  deleteWorker,
  getManagement,
  getWorkers,
} from "./management";
import { Role } from "./managementTypes";

export const useShelterManagement = (role: Role) => {
  return useQuery(["management", role], () => getManagement(role));
};

export const useGetWorkers = () => {
  return useQuery(["workers"], getWorkers);
};

const useAddWorker = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("employees");
  const mutation = useMutation((email: string) => addWorker(email), {
    onSuccess: (_, email) => {
      toastService.showToast(t("addNewEmployeePromises.success", { email }));
    },
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onError: (error: any) => {
      if (error?.response.status === 400) {
        toastService.showToast(
          t("addNewEmployeePromises.emailExists"),
          "error"
        );
      }
    },
    onSettled: () => {
      dispatch(setLoading(false));
    },
  });

  return mutation;
};

export const useDeleteWorker = () => {
  const { t } = useTranslation("employees");
  const dispatch = useDispatch();
  const mutation = useMutation((email: string) => deleteWorker(email), {
    onSuccess: (_, email) => {
      toastService.showToast(
        t("deleteEmployeePromises.success", { email }),
        "success"
      );
    },
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onError: () => {
      toastService.showToast("error", "error");
    },
    onSettled: () => {
      dispatch(setLoading(false));
    },
  });

  return mutation;
};

export default useAddWorker;
