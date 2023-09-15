import React from "react";
import LoginForm from "components/AuthorizationComponents/LoginComponents/LoginForm";
import LoginBGPhoto from "components/AuthorizationComponents/LoginComponents/LoginBGPhoto.png";
import LappkaLogo from "components/AuthorizationComponents/LappkaLogo.png";
import LappkaMobileLogo from "components/AuthorizationComponents/LappkaMobileLogo.png";
import Button from "components/SharedComponents/Button/Button";
import { CloseIcon } from "components/SharedComponents/icons/icons";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import {
  StyledUnathorizedPage,
  UnathorizedTopContent,
  UnathorizedTopContentButtonContainer,
} from "components/AuthorizationComponents/UnprotectedRoutes.styled";
import {
  LoginPageLeftSection,
  LoginPageRightSection,
} from "components/AuthorizationComponents/LoginComponents/Login.styled";
import useDeviceType from "hooks/useDeviceType";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "router/router";
import { useTranslation } from "react-i18next";
import LngBar from "components/SharedComponents/LngBar/LngBar";

const LoginPage = () => {
  const { t } = useTranslation("login");
  const deviceType = useDeviceType();
  const navigate = useNavigate();
  return (
    <StyledUnathorizedPage>
      <UnathorizedTopContent>
        <img
          src={deviceType === "desktop" ? LappkaLogo : LappkaMobileLogo}
          alt="logo"
        />
        <UnathorizedTopContentButtonContainer>
          <LngBar />
          <Button
            onClick={() => navigate(AuthRoutes.register)}
            size={deviceType === "desktop" ? `Large` : `Medium`}
            variant="outline">
            {t("login.register")}
          </Button>
          <AnchorLink to={AuthRoutes.register}>
            <CloseIcon
              tabIndex={-1}
              height="24px"
              width="24px"
            />
          </AnchorLink>
        </UnathorizedTopContentButtonContainer>
      </UnathorizedTopContent>
      <LoginPageLeftSection>
        <LoginForm />
      </LoginPageLeftSection>
      <LoginPageRightSection>
        <img
          src={LoginBGPhoto}
          alt="woman with cat background"
        />
      </LoginPageRightSection>
    </StyledUnathorizedPage>
  );
};

export default LoginPage;
