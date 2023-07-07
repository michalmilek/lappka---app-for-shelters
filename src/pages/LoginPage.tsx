import { getColor } from "../utils/styles/getStyle/getColor";
import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginRegisterComponents/LoginForm";

const StyledLoginPage = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  /*   z-index: -10;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    z-index: -1;
    left: 0;
    background-color: ${getColor("white")};
    width: 732px;
  }

  &::after {
    z-index: -1;
    right: 0;
    background-color: ${getColor("primary050")};
    width: 708px;
  } */
`;

const LoginPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LeftSection = styled.div`
  flex: 0 0 732px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 0 0 708px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
`;

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <LeftSection>
        <LoginForm />
      </LeftSection>
      <RightSection></RightSection>
    </StyledLoginPage>
  );
};

export default LoginPage;
