import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { store } from "redux/store";
import { addToast, removeToast } from "redux/toastSlice";

const useToast = () => {
  const dispatch = useDispatch();

  const showToast = useCallback(
    (
      message: string,
      type: "success" | "error" = "success",
      duration: number = 3000
    ) => {
      dispatch(addToast({ message, type }));

      setTimeout(() => {
        const toasts = store.getState().toasts;
        const toastId = toasts.find((toast) => toast.message === message)?.id;
        if (toastId) {
          dispatch(removeToast(toastId));
        }
      }, duration);
    },
    [dispatch]
  );

  return { showToast };
};

export default useToast;
