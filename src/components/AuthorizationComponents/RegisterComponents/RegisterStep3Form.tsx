import React from "react";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import useDeviceType from "hooks/useDeviceType";
import { useTranslation } from "react-i18next";

const RegisterStep3Form = () => {
  const { t } = useTranslation("register");
  const navigate = useNavigate();
  const deviceType = useDeviceType();

  return (
    <Button
      onClick={() => navigate("/login")}
      size={deviceType === "desktop" ? "XLarge" : "Large"}
      isFullWidth
      variant="fill"
      type="button">
      {t("register.login")}
    </Button>
  );
};

export default RegisterStep3Form;
