import React from "react";
import { AliceMessages, BobMessages, JohnMessages } from "../messagaData";
import {
  MessagesFriendListContainer,
  MessagesFriendListContainerList,
} from "./MessagesFriendList.styled";
import MessagesFriendsListItem from "./MessagesFriendsListItem";

const messages = [
  {
    name: "John",
    message: "Hello, how are you?",
    time: "10:30 am",
    amountOfMessages: "2",
    messages: JohnMessages,
  },
  {
    name: "Alice",
    message: "I'm good, thanks for asking!",
    time: "11:45 am",
    amountOfMessages: "1",
    messages: AliceMessages,
  },
  {
    name: "Bob",
    message: "Hey, did you see that movie?",
    time: "1:20 pm",
    amountOfMessages: "3",
    messages: BobMessages,
  },
];

const MessagesFriendList = () => {
  return (
    <MessagesFriendListContainer>
      <MessagesFriendListContainerList>
        {messages.map((message, index) => (
          <MessagesFriendsListItem
            key={message.name + message.message + index + message.time}
            $active={true}
            index={index + 1}
            name={message.name}
            message={message.message}
            time={message.time}
            amountOfMessages={message.amountOfMessages}
            chatData={message}
          />
        ))}
      </MessagesFriendListContainerList>
    </MessagesFriendListContainer>
  );
};

export default MessagesFriendList;
