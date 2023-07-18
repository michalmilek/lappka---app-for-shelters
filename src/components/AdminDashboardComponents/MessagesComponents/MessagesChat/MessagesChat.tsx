import { useSelector } from "react-redux/es/exports";
import { selectMe } from "redux/chatSlice";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

interface MessageInterface extends React.HTMLAttributes<HTMLDivElement> {
  isSentByMe?: boolean;
}

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  border: 1px solid #000;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f7f7f7;
`;

const MessageContainer = styled.div<MessageInterface>`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  ${({ isSentByMe }) =>
    isSentByMe
      ? `
        flex-direction: row-reverse;
        align-items: flex-end;
      `
      : ""}
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const MessageBubble = styled.div<MessageInterface>`
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ isSentByMe }) =>
    isSentByMe ? getColor("primary500") : getColor("white")};
  color: ${({ isSentByMe }) =>
    isSentByMe ? getColor("white") : getColor("darkGray3")};
  max-width: 70%;
`;

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: number;
}

const dummyChatData: ChatMessage[] = [
  {
    id: 1,
    sender: "John",
    message: "fsafds!",
    timestamp: 1626547200,
  },
  {
    id: 2,
    sender: "Michał",
    message: "Hfds fads!",
    timestamp: 1626547300,
  },
  {
    id: 3,
    sender: "John",
    message: "fdsfdsaf?",
    timestamp: 1626547400,
  },
];

const MessagesChat = () => {
  const currentUser = useSelector(selectMe);

  return (
    <ChatContainer>
      {dummyChatData.map((message) => {
        const isSentByMe = message.sender === currentUser;
        return (
          <MessageContainer
            key={message.id + message.sender + message.timestamp}
            isSentByMe={isSentByMe}>
            {message.sender !== currentUser && (
              <Avatar src="https://www.w3schools.com/w3images/avatar6.png" />
            )}
            <MessageBubble isSentByMe={isSentByMe}>
              {message.message}
            </MessageBubble>
          </MessageContainer>
        );
      })}
    </ChatContainer>
  );
};

export default MessagesChat;
