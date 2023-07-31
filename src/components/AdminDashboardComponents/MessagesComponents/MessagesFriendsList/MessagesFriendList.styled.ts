import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const MessagesFriendListContainer = styled.aside`
  display: flex;

  width: 256px;
  background: ${getColor("white")};
  padding-top: 32px;
  height: 100%;
  border-right: 1px solid ${getColor("lightGray3")};

  @media screen and (max-width: 1024px) {
    width: 200px;
  }

  @media screen and (max-width: 550px) {
    width: 100px;
  }
`;
export const MessagesFriendListContainerList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 0;
`;
