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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-area: a;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${appearAnimation} 0.3s ease-in-out;
`;

const ErrorMessage = styled.p`
  color: ${getColor("darkGray2")};
  font-size: 18px;
  margin: 0;
  padding: 16px;
`;

const ErrorCards = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>Wystąpił błąd podczas pobierania danych.</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorCards;
