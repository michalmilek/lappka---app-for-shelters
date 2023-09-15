import React from "react";
import RegisterBGPhoto from "components/AuthorizationComponents/RegisterComponents/RegisterBGPhoto.png";
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
import RegisterForm from "components/AuthorizationComponents/RegisterComponents/RegisterForm";
import {
  LeftSectionRegister,
  RightRegisterSection,
} from "components/AuthorizationComponents/RegisterComponents/Register.styled";
import useDeviceType from "hooks/useDeviceType";
import { AuthRoutes } from "router/router";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
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
          <Button
            onClick={() => navigate(AuthRoutes.login)}
            size={deviceType === "desktop" ? "Large" : "Medium"}
            variant="outline">
            Zaloguj się
          </Button>
          <AnchorLink to={AuthRoutes.login}>
            <CloseIcon
              tabIndex={-1}
              height="24px"
              width="24px"
            />
          </AnchorLink>
        </UnathorizedTopContentButtonContainer>
      </UnathorizedTopContent>
      <LeftSectionRegister>
        <RegisterForm />
      </LeftSectionRegister>
      <RightRegisterSection>
        <img
          src={RegisterBGPhoto}
          alt="guy with a dog background"
        />
      </RightRegisterSection>
    </StyledUnathorizedPage>
  );
};

export default RegisterPage;
