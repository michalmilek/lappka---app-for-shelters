import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ImageState {
  height: number | null;
  width: number | null;
}

const initialState: ImageState = {
  height: null,
  width: null,
};

const imageSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setHeight: (state, action: PayloadAction<number | null>) => {
      state.height = action.payload;
    },
    setWidth: (state, action: PayloadAction<number | null>) => {
      state.width = action.payload;
    },
  },
});

export const { setHeight, setWidth } = imageSlice.actions;

export const selectImageHeight = (state: RootState) => state.image.height;
export const selectImageWidth = (state: RootState) => state.image.width;

export default imageSlice.reducer;
