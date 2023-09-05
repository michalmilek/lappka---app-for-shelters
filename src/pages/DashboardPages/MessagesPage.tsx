import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledDashboardMessagesMainContent } from "components/AdminDashboardComponents/MessagesComponents/DashboardMessages.styled";
import MessagesChat from "components/AdminDashboardComponents/MessagesComponents/MessagesChat/MessagesChat";
import MessagesFriendList from "components/AdminDashboardComponents/MessagesComponents/MessagesFriendsList/MessagesFriendList";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import SignalRComponent from "components/SignalrComponents/SignalRComponent";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import React from "react";

export interface ActiveChatProps {
  activeChat: number | null;
  handleActiveChat: (userIndex: number) => void;
}

const MessagesPage = () => {
  return (
    <StyledProtectedPageContent>
      <DashboardNavbar title="Wiadomości" />
      <SignalRComponent>
        <StyledDashboardMessagesMainContent>
          <MessagesFriendList />
          <MessagesChat />
        </StyledDashboardMessagesMainContent>
      </SignalRComponent>
    </StyledProtectedPageContent>
  );
};

export default MessagesPage;
