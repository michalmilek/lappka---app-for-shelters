import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface BreadcrumbsState {
  shelterId: string;
}

const initialState: BreadcrumbsState = {
  shelterId: "",
};

const shelterSlice = createSlice({
  name: "shelter",
  initialState,
  reducers: {
    setShelterId: (state, action: PayloadAction<string>) => {
      state.shelterId = action.payload;
    },
  },
});

export const { setShelterId } = shelterSlice.actions;

export const selectShelterId = (state: RootState) => state.shelter.shelterId;

export default shelterSlice.reducer;
