import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import mobileMenuReducer from "./mobileMenuSlice";
import toastReducer from "./toastSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    mobileMenu: mobileMenuReducer,
    toasts: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
