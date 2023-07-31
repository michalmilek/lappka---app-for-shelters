import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { useSelector } from "react-redux/es/exports";
import { selectActiveChatData, selectMe } from "redux/chatSlice";
import {
  Avatar,
  ChatContainer,
  MessageBubble,
  MessageContainer,
  MessageInputContainer,
  StyledSendIconContainer,
  StyledSendMessageIcon,
} from "./MessageChat.styled";
import SendMessage from "./SendMessage.png";

export interface MessageInterface extends React.HTMLAttributes<HTMLDivElement> {
  isSentByMe?: boolean;
}

const MessagesChat = () => {
  const currentUser = useSelector(selectMe);
  const activeChatData = useSelector(selectActiveChatData);

  return (
    <ChatContainer>
      {activeChatData?.messages.map((message) => {
        const isSentByMe = message.sender === currentUser;
        const date = new Date(message.timestamp * 1000);

        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return (
          <MessageContainer
            key={message.id + message.sender + message.timestamp}
            isSentByMe={isSentByMe}>
            {message.sender !== currentUser && (
              <Avatar src="https://www.w3schools.com/w3images/avatar6.png" />
            )}
            <MessageBubble isSentByMe={isSentByMe}>
              <Typography
                variant="UI/UI Text 14 Med"
                color={isSentByMe ? "white" : "darkGray2"}>
                {message.message}
              </Typography>
              <Typography
                tag="span"
                variant="UI Small/UI Text 12 Reg"
                color="midGray3">
                {`${hours}:${minutes}`}
              </Typography>
            </MessageBubble>
          </MessageContainer>
        );
      })}
      <MessageInputContainer>
        <Input
          placeholder="Wpisz wiadomość..."
          backgroundColor="lightGray5"
        />
        <img
          src={SendMessage}
          alt=""
        />
      </MessageInputContainer>
    </ChatContainer>
  );
};

export default MessagesChat;
