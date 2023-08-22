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
} from "./Login.styled";
import { useLoginMutation } from "services/auth/authServices";
import useDeviceType from "hooks/useDeviceType";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useToast from "hooks/useToast";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { DashboardRoutes } from "router/router";

const LoginForm = () => {
  const dispatch = useDispatch();
  const deviceType = useDeviceType();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const {
    mutate: loginFn,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useLoginMutation();
  const { showToast } = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
      loginFn(
        { email: values.email, password: values.password },
        {
          onSuccess: () => {
            dispatch(setLoading(false));
            showToast("Logowanie zakońcozne sukcesem", "success");
            navigate(DashboardRoutes.dashboard);
          },
          onError: () => {
            showToast("Błąd", "error");
          },
        }
      );
    },
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch, isLoading]);

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.setItem("rememberMe", "false");
    }
  }, [rememberMe]);

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
      <StyledLoginTitleContent>
        <Typography
          color="primary800"
          variant={
            deviceType === "desktop"
              ? "Heading 30 Semi"
              : "Heading 24 Semi Bold"
          }
          tag="h1">
          Zaloguj się
        </Typography>

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
            name="rememberMe"
            checked={rememberMe}
            onClick={() => setRememberMe(!rememberMe)}
            color="primary500"
          />

          <AnchorLink
            $underline
            $underlineColor="primary500"
            $underlineOpacity={0.2}
            variant="UI/UI Text 14 Reg"
            color="primary600"
            to={"/register"}>
            Zapomniałem hasła
          </AnchorLink>
        </StyledLoginOptionsContainer>
      </StyledLoginInputContainer>

      <Button
        size={deviceType === "desktop" ? "XLarge" : "Large"}
        isFullWidth
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
          size={deviceType === "desktop" ? "XLarge" : "Large"}
          icon={<GoogleLogoIcon />}
          isFullWidth
          iconPlace="left"
          iconSpacing="15px"
          variant="outline">
          Google
        </Button>
        <Button
          size={deviceType === "desktop" ? "XLarge" : "Large"}
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
