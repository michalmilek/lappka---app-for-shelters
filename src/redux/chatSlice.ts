import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CounterState {
  userToChat: string | null;
  me: string;
}

const initialState: CounterState = {
  userToChat: null,
  me: "Michał",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setUserToChat: (state, action: PayloadAction<string>) => {
      state.userToChat = action.payload;
    },
  },
});

export const { setUserToChat } = chatSlice.actions;

export default chatSlice.reducer;

export const selectUserToChat = (state: RootState) => {
  return state.chat.userToChat;
};

export const selectMe = (state: RootState) => {
  return state.chat.me;
};
