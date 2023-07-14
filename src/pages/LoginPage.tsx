import React from "react";
import LoginForm from "components/UnprotectedRoutesComponents/LoginComponents/LoginForm";
import LoginBGPhoto from "components/UnprotectedRoutesComponents/LoginComponents/LoginBGPhoto.png";
import LappkaLogo from "components/UnprotectedRoutesComponents/LappkaLogo.png";
import LappkaMobileLogo from "components/UnprotectedRoutesComponents/LappkaMobileLogo.png";
import Button from "components/SharedComponents/Button/Button";
import { CloseIcon } from "components/SharedComponents/icons/icons";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import {
  StyledUnathorizedPage,
  UnathorizedTopContent,
  UnathorizedTopContentButtonContainer,
} from "components/UnprotectedRoutesComponents/UnprotectedRoutes.styled";
import {
  LoginPageLeftSection,
  LoginPageRightSection,
} from "components/UnprotectedRoutesComponents/LoginComponents/Login.styled";
import useDeviceType from "hooks/useDeviceType";

const LoginPage = () => {
  const deviceType = useDeviceType();
  return (
    <StyledUnathorizedPage>
      <UnathorizedTopContent>
        <img
          src={deviceType === "desktop" ? LappkaLogo : LappkaMobileLogo}
          alt="logo"
        />
        <UnathorizedTopContentButtonContainer>
          <AnchorLink to={"/register"}>
            <Button
              size={deviceType === "desktop" ? `Large` : `Medium`}
              variant="outline">
              Zarejestruj się
            </Button>
          </AnchorLink>
          <AnchorLink to={"/"}>
            <CloseIcon
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
