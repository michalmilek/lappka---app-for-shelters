import React from "react";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import useDeviceType from "hooks/useDeviceType";

const RegisterStep3Form = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();

  return (
    <Button
      onClick={() => navigate("/login")}
      size={deviceType === "desktop" ? "XLarge" : "Large"}
      isFullWidth
      variant="fill"
      type="button">
      Zaloguj się
    </Button>
  );
};

export default RegisterStep3Form;
