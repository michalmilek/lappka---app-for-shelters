import React from "react";
import styled, { keyframes } from "styled-components";
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
  grid-area: c;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${getColor("white")};
  border-radius: 6px;
  min-width: 272px;
  height: 351px;
  box-shadow: 0px 2px 4px 0px #5b687114;
  animation: ${appearAnimation} 0.3s ease-in-out;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: ${getColor("darkGray2")};
  font-size: 18px;
  margin: 0;
  padding: 16px;
  text-align: center;
`;

const ErrorVoluntary = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>{"Wystąpił błąd podczas pobierania danych."}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorVoluntary;
