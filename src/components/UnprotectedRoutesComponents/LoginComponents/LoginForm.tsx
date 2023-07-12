import Typography from "../../SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../SharedComponents/Button/Button";
import Input from "../../SharedComponents/Inputs/Input";
import CustomCheckbox from "components/SharedComponents/Inputs/CustomCheckbox";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import Divider from "components/SharedComponents/Divider/Divider";
import {
  GoogleLogoIcon,
  FacebookLogoIcon,
} from "components/SharedComponents/icons/icons";
import {
  StyledLoginButtonContainer,
  StyledLoginForm,
  StyledLoginInputContainer,
  StyledLoginOptionsContainer,
  StyledLoginTitleContent,
} from "./styles";
import useAbove500px from "hooks/useAbove500px";
import { useLoginMutation } from "apiCalls/auth/authHooks";

const LoginForm = () => {
  const above500px = useAbove500px();
  const { mutateAsync: loginFn } = useLoginMutation();
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
      loginFn({ email: values.email, password: values.password });
    },
  });

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
      <StyledLoginTitleContent>
        {above500px ? (
          <Typography
            color="primary800"
            variant="Heading 30 Semi"
            tag="h1">
            Zaloguj się
          </Typography>
        ) : (
          <Typography
            color="primary800"
            variant="Heading 24 Semi Bold"
            tag="h1">
            Zaloguj się
          </Typography>
        )}

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Witaj ponownie!
        </Typography>
      </StyledLoginTitleContent>

      <StyledLoginInputContainer>
        <Input
          inputSize="XLarge"
          value={formik.values.email}
          type="email"
          id="email"
          name="email"
          placeholder="Adres email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="E-mail"
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        <Input
          label="Hasło"
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
        <StyledLoginOptionsContainer>
          <CustomCheckbox
            label="Pamiętaj mnie"
            name="remeberMe"
            checked={formik.values.rememberMe}
            onClick={() =>
              formik.setFieldValue("rememberMe", !formik.values.rememberMe)
            }
            color="primary500"
          />

          <AnchorLink
            underline
            underlineColor="primary500"
            underlineOpacity={0.2}
            variant="UI/UI Text 14 Reg"
            color="primary600"
            to={"/register"}>
            Zapomniałem hasła
          </AnchorLink>
        </StyledLoginOptionsContainer>
      </StyledLoginInputContainer>

      <Button
        size="XLarge"
        width="100%"
        variant="fill"
        type="submit">
        Zaloguj się
      </Button>
      <Divider
        mt="24px"
        mb="24px"
        gapFromLines="8px"
        color="midGray3"
        text="Lub zaloguj się przez"
      />

      <StyledLoginButtonContainer>
        <Button
          size="XLarge"
          icon={<GoogleLogoIcon />}
          isFullWidth
          iconPlace="left"
          iconSpacing="15px"
          variant="outline">
          Google
        </Button>
        <Button
          size="XLarge"
          iconSpacing="15px"
          icon={<FacebookLogoIcon />}
          isFullWidth
          iconPlace="left"
          color="facebook"
          variant="fill">
          Facebook
        </Button>
      </StyledLoginButtonContainer>
    </StyledLoginForm>
  );
};

export default LoginForm;
