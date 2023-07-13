import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  login,
  registerShelter,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
} from "./auth";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      if (data) {
        const { accessToken, refreshToken } = data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/");
      }
    },
    onError: (error) => {
      console.error("Wystąpił błąd podczas logowania", error);
    },
  });

  return loginMutation;
};

export const useRegisterShelterMutation = () => {
  const registerShelterMutation = useMutation(registerShelter, {
    onError: (error) => {
      console.error("Wystąpił błąd podczas resetu hasła", error);
    },
  });

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

export const useResetPasswordSetNewPasswordMutation = () => {
  const resetPasswordSendEmailMutation = useMutation(
    resetPasswordSetNewPassword,
    {
      onError: (error) => {
        console.error("Wystąpił błąd podczas rejestracji schroniska", error);
      },
    }
  );

  return resetPasswordSendEmailMutation;
};



