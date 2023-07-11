import { getColor } from "../utils/styles/getStyle/getColor";
import React from "react";
import RegisterBGPhoto from "components/UnprotectedRoutesComponents/RegisterComponents/RegisterBGPhoto.png";
import LappkaLogo from "components/UnprotectedRoutesComponents/LappkaLogo.png";
import Button from "components/SharedComponents/Button/Button";
import { CloseIcon } from "components/SharedComponents/icons/icons";
import Flex from "components/SharedComponents/Flex/Flex";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import {
  LeftSectionRegister,
  RightRegisterSection,
  StyledLoginRegisterPage,
  TopContent,
} from "components/UnprotectedRoutesComponents/styles";
import RegisterForm from "components/UnprotectedRoutesComponents/RegisterComponents/RegisterForm";

const RegisterPage = () => {
  return (
    <StyledLoginRegisterPage>
      <TopContent>
        <img
          src={LappkaLogo}
          alt="logo"
        />
        <Flex
          mr="8px"
          alignItems="center"
          gap="32px">
          <AnchorLink to={"/login"}>
            <Button
              size="Large"
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
        </Flex>
      </TopContent>
      <LeftSectionRegister>
        <RegisterForm />
      </LeftSectionRegister>
      <RightRegisterSection>
        <img
          src={RegisterBGPhoto}
          alt="guy with a dog background"
        />
      </RightRegisterSection>
    </StyledLoginRegisterPage>
  );
};

export default RegisterPage;
