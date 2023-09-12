import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface DeleteCardState {
  id: string;
  isDeleteModalOpen: boolean;
}

const initialState: DeleteCardState = {
  id: "",
  isDeleteModalOpen: false,
};

const deleteCardSlice = createSlice({
  name: "deleteCard",
  initialState,
  reducers: {
    setCardId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setIsDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isDeleteModalOpen = action.payload;
    },
  },
});

export const { setCardId, setIsDeleteModalOpen } = deleteCardSlice.actions;

export const selectDeleteCardId = (state: RootState) => state.deleteCard.id;

export const selectIsDeleteModalOpen = (state: RootState) =>
  state.deleteCard.isDeleteModalOpen;

export default deleteCardSlice.reducer;
