import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import mobileMenuReducer from "./mobileMenuSlice";
import toastReducer from "./toastSlice";
import loadingReducer from "./loadingSlice";
import breadcrumbsReducer from "./breadcrumbsSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    mobileMenu: mobileMenuReducer,
    toasts: toastReducer,
    loading: loadingReducer,
    breadcrumbs: breadcrumbsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
