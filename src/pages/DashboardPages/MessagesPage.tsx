import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledDashboardMessagesMainContent } from "components/AdminDashboardComponents/MessagesComponents/DashboardMessages.styled";
import MessagesChat from "components/AdminDashboardComponents/MessagesComponents/MessagesChat/MessagesChat";
import MessagesFriendList from "components/AdminDashboardComponents/MessagesComponents/MessagesFriendsList/MessagesFriendList";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import React from "react";

export interface ActiveChatProps {
  activeChat: number | null;
  handleActiveChat: (userIndex: number) => void;
}

const MessagesPage = () => {
  return (
    <StyledProtectedPageContent>
      <DashboardNavbar title="Wiadomości" />
      <StyledDashboardMessagesMainContent>
        <MessagesFriendList />
        <MessagesChat />
      </StyledDashboardMessagesMainContent>
    </StyledProtectedPageContent>
  );
};

export default MessagesPage;
