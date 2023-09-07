import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const mutation = useMutation(() => deleteProfilePicture(), {
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 400)
        toastService.showToast(
          "Podane zdjęcie zostało już usunięte, albo użytkownik nie posiadał zdjęcia profilowego.",
          "error"
        );
      else if (error.status === 500)
        toastService.showToast(
          "Wewnętrzny błąd serwera. Spróbuj ponownie później.",
          "error"
        );
    },
  });
  return mutation;
};

export const useGetUser = () => {
  const response = useQuery(["user"], getUser);
  return response;
};

export const usePatchUser = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation((data: PatchUserRequest) => patchUser(data), {
    onSuccess: () => {
      toastService.showToast(
        "Zmienione dane użytkownika zostały zapisane.",
        "success"
      );
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 400) {
        toastService.showToast(
          "Przepraszamy, ale żądanie jest nieprawidłowe. Proszę sprawdź przesłane dane i spróbuj ponownie.",
          "error"
        );
      } else if (error.status === 403)
        toastService.showToast(
          "Przepraszamy, ale nie masz wystarczających uprawnień do wykonania tej akcji. Skontaktuj się z administratorem, jeśli uważasz, że to błąd.",
          "error"
        );
      else if (error.status === 500)
        toastService.showToast(
          "Wewnętrzny błąd serwera, spróbuj ponownie później.",
          "error"
        );
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
  const navigate = useNavigate();
  const mutation = useMutation(() => deleteUser(), {
    onSuccess: () => {
      toastService.showToast(
        "Użytkownik został pomyślnie usunięty. Następuje przeniesienie na stronę logowania."
      );
      navigate("/login");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    onError: (error: ExtendedAxiosError) => {
      if (error.status === 400) {
        toastService.showToast(
          "Przepraszamy, ale żądanie jest nieprawidłowe. Proszę sprawdź przesłane dane i spróbuj ponownie.",
          "error"
        );
      } else if (error.status === 403)
        toastService.showToast(
          "Przepraszamy, ale nie masz wystarczających uprawnień do usunięcia tego użytkownika. Skontaktuj się z administratorem, jeśli uważasz, że to błąd.",
          "error"
        );
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
