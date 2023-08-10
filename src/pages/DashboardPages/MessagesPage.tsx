import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledDashboardMessagesMainContent } from "components/AdminDashboardComponents/MessagesComponents/DashboardMessages.styled";
import MessagesChat from "components/AdminDashboardComponents/MessagesComponents/MessagesChat/MessagesChat";
import MessagesFriendList from "components/AdminDashboardComponents/MessagesComponents/MessagesFriendsList/MessagesFriendList";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import React from "react";

export interface ActiveChatProps {
  activeChat: number | null;
  handleActiveChat: (userIndex: number) => void;
}

const MessagesPage = () => {
  const { title, previousTitle } = useBreadcrumbs();
  console.log("🚀 ~ title:", title);

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
