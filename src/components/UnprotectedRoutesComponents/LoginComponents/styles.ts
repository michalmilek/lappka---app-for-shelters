import { getColor } from "utils/styles/getStyle/getColor";
import styled from "styled-components";
import { hexToRGBA } from "utils/styles/getStyle/hexToRGBA";

export const StyledLoginForm = styled.form`
  background: ${getColor("white")};
  border-radius: 8px;
  z-index: 5;
  border: 1px solid ${getColor("lightGray4")};
  padding: 32px;
  width: 456px;
  box-shadow: 0px 1px 3px ${hexToRGBA("#1018281A", 0.2)};

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

export const StyledLoginTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLoginInputContainer = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 500px) {
    margin-top: 16px;
  }
`;

export const StyledLoginOptionsContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-bottom: 24px;
  }
`;

export const StyledLoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
`;
