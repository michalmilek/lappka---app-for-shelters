import { ActiveChatProps } from "pages/DashboardPages/MessagesPage";
import React from "react";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import MessagesFriendsListItem from "./MessagesFriendsListItem";

const MessagesFriendListContainer = styled.aside`
  width: 256px;
  background: ${getColor("white")};
  padding-top: 32px;
  height: 100vh;
  border-right: 1px solid ${getColor("lightGray3")};
`;
const MessagesFriendListContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 0;
`;

const messages = [
  {
    name: "John",
    message: "Hello, how are you?",
    time: "10:30 am",
    amountOfMessages: "2",
  },
  {
    name: "Alice",
    message: "I'm good, thanks for asking!",
    time: "11:45 am",
    amountOfMessages: "1",
  },
  {
    name: "Bob",
    message: "Hey, did you see that movie?",
    time: "1:20 pm",
    amountOfMessages: "3",
  },
];

const MessagesFriendList = () => {
  return (
    <MessagesFriendListContainer>
      <MessagesFriendListContainerList>
        {messages.map((message, index) => (
          <MessagesFriendsListItem
            key={message.name + message.message + index + message.time}
            active={true}
            index={index + 1}
            name={message.name}
            message={message.message}
            time={message.time}
            amountOfMessages={message.amountOfMessages}
          />
        ))}
      </MessagesFriendListContainerList>
    </MessagesFriendListContainer>
  );
};

export default MessagesFriendList;
