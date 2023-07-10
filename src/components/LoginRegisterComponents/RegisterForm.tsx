import Typography from "../SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../SharedComponents/Button/Button";
import { styled } from "styled-components";
import Input from "../SharedComponents/Inputs/Input";
import CustomCheckbox from "components/SharedComponents/Inputs/CustomCheckbox";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import Flex from "components/SharedComponents/Flex/Flex";
import Divider from "components/SharedComponents/Divider/Divider";
import {
  GoogleLogoIcon,
  FacebookLogoIcon,
  ArrowRightIcon,
} from "components/SharedComponents/icons/icons";
import { getColor } from "utils/styles/getStyle/getColor";
import { hexToRGBA } from "utils/styles/getStyle/hexToRGBA";
import { Form } from "./styles";
import StepsBar from "components/SharedComponents/StepBar/Stepbar";

const steps = ["Dane organizacji", "Dane użytkownika", "Podsumowanie"];

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      passwordVisible: false,
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

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Flex
        flexDirection="column"
        gap="8px">
        <Typography
          color="primary800"
          variant="Heading 30 Semi"
          tag="h1">
          Zarejestruj schronisko
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Wypełnij poniższy formularz i załóż{" "}
          <Typography
            tag="span"
            color="primary500"
            variant="UI/UI Text 14 Semi Bold">
            Konto schroniska
          </Typography>
        </Typography>
      </Flex>

      <StepsBar steps={steps} />

      <Flex
        mt="40px"
        width="100%"
        flexDirection="column"
        gap="16px">
        <Input
          label="Pełna Nazwa Organizacji"
          type="password"
          id="password"
          name="password"
          placeholder="Wpisz"
          inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <Input
          label="Ulica"
          type="password"
          id="password"
          name="password"
          placeholder="Wpisz"
          inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <Flex gap="16px">
          <Input
            width={"200px"}
            label="Kod pocztowy"
            type="password"
            id="password"
            name="password"
            placeholder="Wpisz"
            inputSize="Large"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
          <Input
            label="Miasto"
            type="password"
            id="password"
            name="password"
            placeholder="Wpisz"
            inputSize="Large"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
        </Flex>
        <Input
          label="Numer NIP"
          type="password"
          id="password"
          name="password"
          placeholder="Wpisz"
          inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <Input
          label="Numer KRS"
          type="password"
          id="password"
          name="password"
          placeholder="Wpisz"
          inputSize="XLarge"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
      </Flex>

      <Button
        icon={<ArrowRightIcon fill="#fff" />}
        iconSpacing="8px"
        iconPlace="right"
        size="XLarge"
        mt="32px"
        width="100%"
        variant="fill"
        type="submit">
        Następny krok
      </Button>
    </Form>
  );
};

export default RegisterForm;
