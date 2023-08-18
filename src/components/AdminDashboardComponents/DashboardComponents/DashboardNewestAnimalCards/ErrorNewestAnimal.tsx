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

const ErrorNewestAnimal = () => {
  return (
    <ErrorContainer>
      <Typography
        tag="p"
        color="darkGray2"
        variant="UI/UI Text 16 Medium Bold">
        {"Wystąpił błąd podczas pobierania danych."}
      </Typography>
    </ErrorContainer>
  );
};

export default ErrorNewestAnimal;
