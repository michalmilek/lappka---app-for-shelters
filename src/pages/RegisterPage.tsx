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
} from "components/UnprotectedRoutesComponents/styles";
import RegisterForm from "components/UnprotectedRoutesComponents/RegisterComponents/RegisterForm";
import {
  LeftSectionRegister,
  RightRegisterSection,
} from "components/UnprotectedRoutesComponents/RegisterComponents/styles";
import useAbove500px from "hooks/useAbove500px";

const RegisterPage = () => {
  const above500px = useAbove500px();
  return (
    <StyledUnathorizedPage>
      <UnathorizedTopContent>
        <img
          src={above500px ? LappkaLogo : LappkaMobileLogo}
          alt="logo"
        />
        <UnathorizedTopContentButtonContainer>
          <AnchorLink to={"/login"}>
            <Button
              size={above500px ? "Large" : "Medium"}
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
