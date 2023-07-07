import Typography from "../SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../SharedComponents/Button/Button";
import { styled } from "styled-components";
import Input from "../SharedComponents/Inputs/Input";
import { useState } from "react";
import Checkbox from "../SharedComponents/Inputs/Checkbox";

const Form = styled.form`
  z-index: 5;
`;

const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
`;

const LoginForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Nieprawidłowy format adresu email")
        .required('Pole "Email" jest wymagane'),
      password: Yup.string()
        .min(6, "Hasło musi zawierać co najmniej 6 znaków")
        .required('Pole "Hasło" jest wymagane'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleCheckboxChange = (checked: boolean) => {
    console.log("Checkbox checked:", checked);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Typography
        color="primary800"
        variant="Heading 30 Semi"
        tag="h1">
        Zaloguj się
      </Typography>

      <Typography
        tag="p"
        color="midGray2"
        variant="UI/UI Text 14 Reg">
        Witaj ponownie!
      </Typography>

      <InputFieldsContainer>
        <Input
          value={formik.values.email}
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Email"
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <Input
          label="Password"
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />

        <Checkbox
          label="Pamiętaj mnie"
          onChange={handleCheckboxChange}
        />
        <div>
          <label>
            <input type="checkbox" />
            <Typography variant="UI/UI Text 14 Reg">Pamiętaj mnie</Typography>
          </label>
        </div>
      </InputFieldsContainer>

      <Button
        width="100%"
        variant="fill"
        type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
