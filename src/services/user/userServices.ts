import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "redux/loadingSlice";
import { ExtendedAxiosError } from "services/axiosInstance";
import toastService from "singletons/toastService";
import {
  deleteProfilePicture,
  deleteUser,
  getUser,
  patchUser,
  patchUserEmailAddress,
  patchUserNewPassword,
  PatchUserNewPasswordRequest,
  PatchUserRequest,
} from "./user";

export const useDeleteProfilePicture = () => {
  const { t } = useTranslation("userServices");
  const mutation = useMutation(() => deleteProfilePicture(), {
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 400)
        toastService.showToast(t("error.deleteProfilePicture"), "error");
    },
  });
  return mutation;
};

export const useGetUser = () => {
  const response = useQuery(["user"], getUser);
  return response;
};

export const usePatchUser = () => {
  const { t } = useTranslation("userServices");
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation((data: PatchUserRequest) => patchUser(data), {
    onSuccess: () => {
      toastService.showToast(t("success.patchUser"), "success");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 400) {
        toastService.showToast(t("error.patchUser"), "error");
      }
    },
    onMutate: () => {
      dispatch(setLoading(true));
    },
    onSettled: () => {
      dispatch(setLoading(false));
    },
  });

  return mutation;
};

export const useDeleteUser = () => {
  const { t } = useTranslation("userServices");
  const navigate = useNavigate();
  const mutation = useMutation(() => deleteUser(), {
    onSuccess: () => {
      toastService.showToast(t("success.deleteUser"), "success");
      navigate("/login");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 400) {
        toastService.showToast(t("error.deleteUser"), "error");
      }
    },
  });
  return mutation;
};

export const usePatchUserEmailAddress = () => {
  const mutation = useMutation(({ email }: { email: string }) =>
    patchUserEmailAddress({ email })
  );
  return mutation;
};

export const usePatchUserNewPassword = () => {
  const mutation = useMutation((data: PatchUserNewPasswordRequest) =>
    patchUserNewPassword(data)
  );

  return mutation;
};
