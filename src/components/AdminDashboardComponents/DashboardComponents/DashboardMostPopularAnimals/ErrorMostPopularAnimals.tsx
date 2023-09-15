import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
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
  flex-direction: column;
  background-color: ${getColor("white")};
  border-radius: 8px;
  grid-area: e;
  height: 100%;
  min-height: 35vh;
  width: 3fr;
  box-shadow: 0px 1px 2px 0px #1018280f;
  animation: ${appearAnimation} 0.3s ease-in-out;
`;

const ErrorMostPopularAnimals = () => {
  const { t } = useTranslation();
  return (
    <ErrorContainer>
      <Typography
        tag="p"
        color="darkGray2"
        variant="UI/UI Text 16 Medium Bold">
        {t("errors.errorDuringDownload")}
      </Typography>
    </ErrorContainer>
  );
};

export default ErrorMostPopularAnimals;
