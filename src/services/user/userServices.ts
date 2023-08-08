import { useMutation, useQuery } from "@tanstack/react-query";
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
  const mutation = useMutation(() => deleteProfilePicture());
  return mutation;
};

export const useGetUser = () => {
  const response = useQuery(["user"], getUser);
  return response;
};

export const usePatchUser = () => {
  const mutation = useMutation((data: PatchUserRequest) => patchUser(data));

  return mutation;
};

export const useDeleteUser = () => {
  const mutation = useMutation(() => deleteUser());
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
