import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setLoading } from "redux/loadingSlice";
import { store } from "redux/store";
import { AuthRoutes, DashboardRoutes } from "router/router";
import { ExtendedAxiosError2 } from "services/axiosInstance";
import toastService from "singletons/toastService";
import {
  login,
  LoginRequest,
  registerShelter,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
  ResetPasswordSetNewPasswordRequest,
  revokeToken,
} from "./auth";

export const useLoginMutation = () => {
  const { t } = useTranslation("login");
  const navigate = useNavigate();
  const resetPasswordSendEmailMutation = useMutation(
    (data: LoginRequest) => {
      return login(data);
    },
    {
      onMutate: () => {
        store.dispatch(setLoading(true));
      },
      onSettled: () => {
        store.dispatch(setLoading(false));
      },
      onSuccess: (data) => {
        const { accessToken, refreshToken } = data;
        toastService.showToast(t("login.loginSuccess"));
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate(DashboardRoutes.dashboard);
      },
      onError: (error: ExtendedAxiosError2) => {
        console.log(error);
        if (error.response?.data?.Code === "invalid_password") {
          toastService.showToast(t("login.wrongPassword"), "error");
        } else if (error.response?.data?.Code === "invalid_email") {
          toastService.showToast(t("login.userNotFound"), "error");
        }
      },
    }
  );

  return resetPasswordSendEmailMutation;
};

export const useRegisterShelterMutation = () => {
  const { t } = useTranslation("register");
  const registerShelterMutation = useMutation(registerShelter, {
    onSuccess: () => {
      toastService.showToast(t("register.registerSuccess"));
    },
    onError: (error: ExtendedAxiosError2) => {
      console.log(error);
      if (error.response?.data?.Code === "invalid_email") {
        toastService.showToast(t("register.usedEmail"), "error");
      } else {
        if (error.response?.data?.Code)
          toastService.showToast(error.response?.data?.Description, "error");
      }
    },
  });

  return registerShelterMutation;
};

export const useResetPasswordSendEmailMutation = () => {
  const resetPasswordSendEmailMutation = useMutation(resetPasswordSendEmail, {
    onError: (error: ExtendedAxiosError2) => {
      console.log(error);
      if (error.response?.data?.Code === "invalid_email") {
        toastService.showToast(
          "Użytkownik o podanym emailu nie istnieje w bazie danych.",
          "error"
        );
      } else {
        if (error.response?.data?.Code)
          toastService.showToast(error.response?.data?.Description, "error");
      }
    },
  });

  return resetPasswordSendEmailMutation;
};

interface ResetPasswordSetNewPasswordWithTokenRequest {
  resetPasswordSetNewPasswordData: ResetPasswordSetNewPasswordRequest;
  token: string;
}

export const useResetPasswordSetNewPasswordMutation = () => {
  const navigate = useNavigate();
  const resetPasswordSendEmailMutation = useMutation(
    (data: ResetPasswordSetNewPasswordWithTokenRequest) => {
      const {
        resetPasswordSetNewPasswordData,
        token,
      }: {
        resetPasswordSetNewPasswordData: ResetPasswordSetNewPasswordRequest;
        token: string;
      } = data;

      return resetPasswordSetNewPassword(
        resetPasswordSetNewPasswordData,
        token
      );
    },
    {
      onSuccess: () => {
        toastService.showToast(
          "Hasło zostało zmienione. Zaloguj się za pomocą nowego hasła."
        );
        navigate(AuthRoutes.login);
      },
      onError: (error: AxiosError) => {
        console.log(error);
        if (error.response?.status === 400)
          toastService.showToast(
            "Podano niewłaściwy token albo token już wygasł.",
            "error"
          );
      },
    }
  );

  return resetPasswordSendEmailMutation;
};

export const useRevokeToken = () => {
  const navigate = useNavigate();
  const revokeTokenMutation = useMutation(
    (refreshToken: string) => {
      return revokeToken(refreshToken);
    },
    {
      onSuccess: () => {
        toastService.showToast("Zostałeś pomyślnie wylogowany.");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate(AuthRoutes.login);
      },
      onError: (error: ExtendedAxiosError2) => {
        console.log(error);
        if (error.response?.data.Code === "invalid_token")
          toastService.showToast("Podano niewłaściwy token.", "error");
        else {
          toastService.showToast(
            "Wystąpił błąd, skontaktuj się z administratorem strony.",
            "error"
          );
        }
      },
      onMutate: () => store.dispatch(setLoading(true)),
      onSettled: () => store.dispatch(setLoading(false)),
    }
  );

  return revokeTokenMutation;
};
