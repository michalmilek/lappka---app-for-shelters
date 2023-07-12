import React from "react";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { handleCurrentStep3Props } from "./RegisterForm";

const RegisterStep3Form = ({ formValues }: handleCurrentStep3Props) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/login")}
      size="XLarge"
      width="100%"
      variant="fill"
      type="button">
      Zaloguj się
    </Button>
  );
};

export default RegisterStep3Form;
