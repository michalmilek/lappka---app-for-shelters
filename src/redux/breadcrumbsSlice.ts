import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface BreadcrumbsState {
  previousTitle: string;
  title: string;
}

const initialState: BreadcrumbsState = {
  previousTitle: "",
  title: "",
};

const breadcrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setPreviousTitle: (state, action: PayloadAction<string>) => {
      state.previousTitle = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setPreviousTitle, setTitle } = breadcrumbsSlice.actions;

export const selectPreviousTitle = (state: RootState) =>
  state.breadcrumbs.previousTitle;

export const selectTitle = (state: RootState) => state.breadcrumbs.title;

export default breadcrumbsSlice.reducer;
