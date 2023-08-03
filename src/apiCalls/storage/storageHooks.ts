import { useMutation } from "@tanstack/react-query";
import { postStoragePicture } from "./storage";

export function usePostStoragePicture() {
  const mutation = useMutation((file: File) => postStoragePicture(file));
  return mutation;
}
