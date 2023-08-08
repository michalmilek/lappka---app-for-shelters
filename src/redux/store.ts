import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import mobileMenuReducer from "./mobileMenuSlice";
import toastReducer from "./toastSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    mobileMenu: mobileMenuReducer,
    toasts: toastReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
