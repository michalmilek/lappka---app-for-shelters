import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PaginationState } from "@tanstack/react-table";

const initialState: PaginationState = {
  pageIndex: 1,
  pageSize: 10,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTablePaginationState: (
      state,
      action: PayloadAction<PaginationState>
    ) => {
      state.pageIndex = action.payload.pageIndex;
      state.pageSize = action.payload.pageSize;
    },
  },
});

export const { setTablePaginationState } = tableSlice.actions;

export default tableSlice.reducer;

export const selectTablePageSize = (state: RootState) => {
  return state.table.pageSize;
};

export const selectTablePageIndex = (state: RootState) => {
  return state.table.pageIndex;
};
