import { SendIcon } from "components/SharedComponents/icons/icons";
import { css, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { MessageInterface } from "./MessagesChat";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
  margin: 0 auto;
  background-color: ${getColor("lightGray5")};
  height: 100%;
`;

export const MessageContainer = styled.div<MessageInterface>`
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: flex-start;

  ${({ isSentByMe }) =>
    isSentByMe
      ? css`
          flex-direction: row-reverse;
          align-items: flex-end;
        `
      : ""}
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const MessageBubble = styled.div<MessageInterface>`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  padding: 14px 16px;
  border-radius: ${({ isSentByMe }) =>
    isSentByMe ? "12px 0px 12px 12px" : "0px 12px 12px 12px"};
  background-color: ${({ isSentByMe }) =>
    isSentByMe ? getColor("primary500") : getColor("white")};
  color: ${({ isSentByMe }) =>
    isSentByMe ? getColor("white") : getColor("darkGray3")};
  max-width: 70%;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${getColor("white")};
  padding: 12px 24px;
  gap: 24px;
`;

export const StyledSendIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${getColor("primary400")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledSendMessageIcon = styled(SendIcon)`
  & path {
    stroke: ${getColor("white")};
    fill: ${getColor("white")};
  }
`;
