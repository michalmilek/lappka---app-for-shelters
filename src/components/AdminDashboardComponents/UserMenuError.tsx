import Typography from "components/SharedComponents/Typography/Typography";
import useDeviceType from "hooks/useDeviceType";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  text-align: center;
  color: ${getColor("darkGray2")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ErrorIcon = styled.span`
  font-size: 24px;
`;

const UserMenuError = () => {
  const deviceType = useDeviceType();
  const { t } = useTranslation();
  return (
    <ErrorWrapper>
      <ErrorIcon>❌</ErrorIcon>
      <Typography
        tag="p"
        color="darkGray2"
        variant={
          deviceType === "desktop" || deviceType === "laptop"
            ? "UI/UI Text 16 Medium Bold"
            : "UI Small/UI Text 12 Reg"
        }>
        {t("errors.errorDuringDownload")}
      </Typography>
    </ErrorWrapper>
  );
};

export default UserMenuError;
