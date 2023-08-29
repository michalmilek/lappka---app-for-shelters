import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useToast from "hooks/useToast";
import { useNavigate } from "react-router-dom";
import { setLoading } from "redux/loadingSlice";
import { store } from "redux/store";
import { AuthRoutes, DashboardRoutes } from "router/router";
import { ExtendedAxiosError } from "services/axiosInstance";
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
  const navigate = useNavigate();
  const { showToast } = useToast();
  const resetPasswordSendEmailMutation = useMutation(
    (data: LoginRequest) => {
      return login(data);
    },
    {
      onSuccess: (data) => {
        const { accessToken, refreshToken } = data;
        showToast("Logowanie zakończone sukcesem.");
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate(DashboardRoutes.dashboard);
      },
      onError: (error: ExtendedAxiosError) => {
        console.log(error);
        if (error.response?.data?.errors[0].Code === "invalid_password") {
          showToast(
            "Wprowadzono nieprawidłowe hasło. Spróbuj ponownie",
            "error"
          );
        } else if (error.response?.data?.errors[0].Code === "invalid_email") {
          showToast(
            "Nie znaleziono użytkownika o podanym danym emailu.",
            "error"
          );
        }
      },
    }
  );

  return resetPasswordSendEmailMutation;
};

export const useRegisterShelterMutation = () => {
  const { showToast } = useToast();
  const registerShelterMutation = useMutation(registerShelter, {
    onSuccess: () => {
      showToast(
        "Rejestracja zakończona sukcesem. Aktywuj konto przez wiadomość wysłaną na podany email."
      );
    },
    onError: (error: ExtendedAxiosError) => {
      console.log(error);
      if (error.response?.data?.errors[0].Code === "invalid_email") {
        showToast(
          "Podany adres email został już wykorzystany w rejestracji.",
          "error"
        );
      } else {
        if (error.response?.data?.errors[0].Code)
          showToast(error.response?.data?.errors[0].Description, "error");
      }
    },
  });

  return registerShelterMutation;
};

export const useResetPasswordSendEmailMutation = () => {
  const { showToast } = useToast();
  const resetPasswordSendEmailMutation = useMutation(resetPasswordSendEmail, {
    onError: (error: ExtendedAxiosError) => {
      console.log(error);
      if (error.response?.data?.errors[0].Code === "invalid_mail") {
        showToast(
          "Użytkownik o podanym emailu nie istnieje w bazie danych.",
          "error"
        );
      } else {
        if (error.response?.data?.errors[0].Code)
          showToast(error.response?.data?.errors[0].Description, "error");
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
  const { showToast } = useToast();
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
        showToast(
          "Hasło zostało zmienione. Zaloguj się za pomocą nowego hasła."
        );
        navigate(AuthRoutes.login);
      },
      onError: (error: AxiosError) => {
        console.log(error);
        if (error.response?.status === 400)
          showToast("Podano niewłaściwy token albo token już wygasł.", "error");
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
      onError: (error: ExtendedAxiosError) => {
        console.log(error);
        if (error.response?.data.errors[0].Code === "invalid_token")
          toastService.showToast("Podano niewłaściwy token.", "error");
      },
      onMutate: () => store.dispatch(setLoading(true)),
      onSettled: () => store.dispatch(setLoading(false)),
    }
  );

  return revokeTokenMutation;
};
