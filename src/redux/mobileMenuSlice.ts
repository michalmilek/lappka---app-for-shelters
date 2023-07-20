import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface MobileMenuState {
  isMobileMenuOpen: boolean;
}

const initialState: MobileMenuState = {
  isMobileMenuOpen: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { setMobileMenuOpen } = mobileMenuSlice.actions;

export const selectIsMobileMenuOpen = (state: RootState) =>
  state.mobileMenu.isMobileMenuOpen;

export default mobileMenuSlice.reducer;
