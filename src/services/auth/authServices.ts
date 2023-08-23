import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useToast from "hooks/useToast";
import {
  login,
  registerShelter,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
  ResetPasswordSetNewPasswordRequest,
} from "./auth";

export const useLoginMutation = () => {
  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      if (data) {
        const { accessToken, refreshToken } = data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      }
    },
  });

  return loginMutation;
};

export const useRegisterShelterMutation = () => {
  const registerShelterMutation = useMutation(registerShelter);

  return registerShelterMutation;
};

export const useResetPasswordSendEmailMutation = () => {
  const resetPasswordSendEmailMutation = useMutation(resetPasswordSendEmail, {
    onError: (error) => {
      console.error("Wystąpił błąd podczas rejestracji schroniska", error);
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
      onError: (error: AxiosError) => {
        console.log(error);
        if (error.response?.status === 400)
          showToast("Podano niewłaściwy token albo token już wygasł.", "error");
      },
    }
  );

  return resetPasswordSendEmailMutation;
};
