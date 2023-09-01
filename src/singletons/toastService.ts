import { addToast, removeToast } from "redux/toastSlice";
import { RootState, store } from "redux/store";

class ToastService {
  private static instance: ToastService;
  private store: typeof store;

  private constructor() {
    this.store = store;
  }

  static getInstance(): ToastService {
    if (!ToastService.instance) {
      ToastService.instance = new ToastService();
    }
    return ToastService.instance;
  }

  showToast = (
    message: string,
    type: "success" | "error" = "success",
    duration: number = 3000
  ) => {
    this.store.dispatch(addToast({ message, type }));

    setTimeout(() => {
      const toasts = (this.store.getState() as RootState).toasts;
      const toastId = toasts.find((toast) => toast.message === message)?.id;
      if (toastId) {
        this.store.dispatch(removeToast(toastId));
      }
    }, duration);
  };
}

const toastService = ToastService.getInstance();

export default toastService;
