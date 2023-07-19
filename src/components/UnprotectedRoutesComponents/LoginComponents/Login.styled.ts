import { getColor } from "utils/styles/getStyle/getColor";
import styled from "styled-components";
import { hexToRGBA } from "utils/styles/getStyle/hexToRGBA";



export const LoginPageLeftSection = styled.div`
  flex: 1 0 50.83%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 149px 120px 150px 156px;

  @media screen and (max-width: 1250px) {
    padding: 120px 0 150px 5%;
  }

  @media screen and (max-width: 1100px) {
    padding: 120px 0 150px 2%;
  }

  @media screen and (max-width: 1000px) {
    flex: 0 0 100%;
    background-color: ${getColor("primary050")};
    padding: 100px 4.44% 0px;
  }

  @media screen and (max-width: 500px) {
    padding: 100px 4.44% 0px;
  }
`;

export const LoginPageRightSection = styled.div`
  flex: 0 0 49.17%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 259.98px 156px 240.25px 164.96px;

  @media screen and (max-width: 1350px) {
    padding: 259.98px 2% 240.25px 0%;
  }

  @media screen and (max-width: 1250px) {
    padding: 259.98px 5% 240.25px 0%;
  }

  @media screen and (max-width: 1100px) {
    padding: 259.98px 2% 240.25px 0;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

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

  @media screen and (max-width: 500px) {
    gap: 6px;
  }
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
