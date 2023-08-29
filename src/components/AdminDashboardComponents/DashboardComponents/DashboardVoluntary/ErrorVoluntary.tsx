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
  grid-area: c;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${getColor("white")};
  border-radius: 6px;
  width: 100%;
  box-shadow: 0px 2px 4px 0px #5b687114;
  animation: ${appearAnimation} 0.3s ease-in-out;

  min-height: 15vh;
`;

const ErrorMessageContainer = styled.div`
  padding: 16px;
  text-align: center;
`;

const ErrorVoluntary = () => {
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

export default ErrorVoluntary;
