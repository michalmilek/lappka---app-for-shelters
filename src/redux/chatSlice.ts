import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ChatMessage } from "components/AdminDashboardComponents/MessagesComponents/messagaData";

interface ActiveChatState {
  activeChatData: ActiveChatData | null;
  me: string;
}

interface ActiveChatData {
  name: string;
  message: string;
  time: string;
  amountOfMessages: string;
  messages: ChatMessage[];
}

const initialState: ActiveChatState = {
  activeChatData: null,
  me: "Michał",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChatData: (state, action: PayloadAction<ActiveChatData>) => {
      state.activeChatData = action.payload;
    },
  },
});

export const { setActiveChatData } = chatSlice.actions;

export default chatSlice.reducer;

export const selectActiveChatData = (state: RootState) => {
  return state.chat.activeChatData;
};

export const selectMe = (state: RootState) => {
  return state.chat.me;
};
