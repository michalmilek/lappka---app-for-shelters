import { getColor } from "../utils/styles/getStyle/getColor";
import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginRegisterResetComponents/LoginForm";
import RegisterBGPhoto from "components/LoginRegisterResetComponents/RegisterBGPhoto.png";
import LappkaLogo from "components/LoginRegisterResetComponents/LappkaLogo.png";
import Button from "components/SharedComponents/Button/Button";
import { CloseIcon } from "components/SharedComponents/icons/icons";
import Flex from "components/SharedComponents/Flex/Flex";
import { Link } from "react-router-dom";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import {
  LeftSection,
  LeftSectionRegister,
  RightRegisterSection,
  RightSection,
  StyledLoginRegisterPage,
  TopContent,
} from "components/LoginRegisterResetComponents/styles";
import RegisterForm from "components/LoginRegisterResetComponents/RegisterForm";

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
