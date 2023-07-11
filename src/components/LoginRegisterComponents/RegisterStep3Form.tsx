import React, { useEffect } from "react";
import Input from "../SharedComponents/Inputs/Input";
import Flex from "components/SharedComponents/Flex/Flex";
import * as Yup from "yup";
import { useFormik } from "formik";
import { handleCompleteProps } from "./RegisterForm";
import Typography from "components/SharedComponents/Typography/Typography";
import Button from "components/SharedComponents/Button/Button";
import { Form } from "./styles";
import { useNavigate } from "react-router-dom";

const RegisterStep3Form = ({ formValues }: any) => {
  const navigate = useNavigate();

  return (
    <form>
      <Button
        onClick={() => navigate("/login")}
        size="XLarge"
        width="100%"
        variant="fill"
        type="button">
        Zaloguj się
      </Button>
    </form>
  );
};

export default RegisterStep3Form;
