import React from "react";
import styled, { keyframes, css } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("white")};
  grid-area: d;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 1px 2px 0px #1018280f;
  animation: ${appearAnimation} 0.3s ease-in-out;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  margin: 0;
  padding: 16px;
`;

const ErrorNewestAnimal = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>{"Wystąpił błąd."}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorNewestAnimal;
