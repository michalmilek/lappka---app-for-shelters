import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ToastType = "success" | "error";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

const toastSlice = createSlice({
  name: "toasts",
  initialState: [] as Toast[],
  reducers: {
    addToast: (
      state,
      action: PayloadAction<{ message: string; type: ToastType }>
    ) => {
      const id = Math.random().toString(36);
      const { message, type } = action.payload;
      state.push({ id, message, type });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      return state.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
