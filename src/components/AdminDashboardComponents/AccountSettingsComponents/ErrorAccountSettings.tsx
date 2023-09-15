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
  grid-area: b;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 80vh;
  background-color: ${getColor("white")};
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #1018280f;
  animation: ${appearAnimation} 0.3s ease-in-out;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: ${getColor("darkGray2")};
  font-size: 18px;
  margin: 0;
  padding: 16px;
`;

const ErrorAccountSettings = () => {
  const { t } = useTranslation();
  return (
    <ErrorContainer>
      <ErrorMessage>{t("errors.errorDuringDownload")}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorAccountSettings;
