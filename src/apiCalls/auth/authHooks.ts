import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, registerShelter } from "./auth";

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
      console.error("Wystąpił błąd podczas rejestracji schroniska", error);
    },
  });

  return registerShelterMutation;
};
