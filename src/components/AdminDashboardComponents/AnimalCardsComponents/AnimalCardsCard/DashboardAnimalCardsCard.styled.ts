import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledCardFormComponent = styled.form`
  border-radius: 8px;
  background: ${getColor("white")};
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
  width: 100%;
`;

export const StyledCardHeader = styled.header`
  padding: 24px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCardFormContentContainer = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledCardImgContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledCardImg = styled.img`
  flex: 1 1;
  width: 116px;
  height: 120px;
  border-radius: 12px;
`;

export const StyledCardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledCardFooter = styled.footer`
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;

  box-shadow: 0px 1px 0px 0px #eef0f2 inset;
`;

export const CardButton = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
`;
