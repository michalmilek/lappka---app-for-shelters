import React from "react";
import RegisterBGPhoto from "components/UnprotectedRoutesComponents/RegisterComponents/RegisterBGPhoto.png";
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
import RegisterForm from "components/UnprotectedRoutesComponents/RegisterComponents/RegisterForm";
import {
  LeftSectionRegister,
  RightRegisterSection,
} from "components/UnprotectedRoutesComponents/RegisterComponents/Register.styled";
import useDeviceType from "hooks/useDeviceType";

const RegisterPage = () => {
  const deviceType = useDeviceType();
  return (
    <StyledUnathorizedPage>
      <UnathorizedTopContent>
        <img
          src={deviceType === "desktop" ? LappkaLogo : LappkaMobileLogo}
          alt="logo"
        />
        <UnathorizedTopContentButtonContainer>
          <AnchorLink to={"/login"}>
            <Button
              size={deviceType === "desktop" ? "Large" : "Medium"}
              variant="outline">
              Zaloguj się
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
