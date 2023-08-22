import Typography from "components/SharedComponents/Typography/Typography";
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
  height: 10vh;
  grid-area: a;
  background-color: ${getColor("white")};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${appearAnimation} 0.3s ease-in-out;
`;

const ErrorMessageContainer = styled.div`
  padding: 16px;
`;

const ErrorCards = () => {
  return (
    <ErrorContainer>
      <ErrorMessageContainer>
        <Typography
          tag="p"
          color="darkGray2"
          variant="UI/UI Text 16 Medium Bold">
          {"Wystąpił błąd podczas pobierania danych."}
        </Typography>
      </ErrorMessageContainer>
    </ErrorContainer>
  );
};

export default ErrorCards;
