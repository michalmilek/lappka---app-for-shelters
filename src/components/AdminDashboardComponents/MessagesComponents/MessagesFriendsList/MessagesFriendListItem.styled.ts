import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { AsideFriendsListItemActive } from "./MessagesFriendsListItem";

export const MessasgesFriendsListItemContainer = styled.li<AsideFriendsListItemActive>`
  width: 100%;
  background: ${({ $active }) =>
    $active ? getColor("primary050") : getColor("white")};

  padding: 0 12px 0 16px;
  z-index: 100;
  cursor: pointer;

  &:hover {
    background: ${getColor("lightGray1")};
  }

  transition: all 0.3s ease-in-out;
`;

export const MessasgesFriendsListItemContainerBorderContainer = styled.div`
  border-bottom: 1px solid ${getColor("lightGray4")};
  display: flex;
  gap: 48px;
  justify-content: space-between;

  padding: 12px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${getColor("lightGray4")};
  }
`;

export const MessagesFriendsListItemUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MessagesFriendsListItemUserImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;

export const MessagesFriendsListItemUserInfoNameAndMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

export const MessagesFriendsListItemMessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
  gap: 2px;
`;
