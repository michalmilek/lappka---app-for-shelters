import { getColor } from "../utils/styles/getStyle/getColor";
import React from "react";
import styled from "styled-components";
import LoginForm from "components/UnprotectedRoutesComponents/LoginComponents/LoginForm";
import LoginBGPhoto from "components/UnprotectedRoutesComponents/LoginComponents/LoginBGPhoto.png";
import LappkaLogo from "components/UnprotectedRoutesComponents/LappkaLogo.png";
import Button from "components/SharedComponents/Button/Button";
import { CloseIcon } from "components/SharedComponents/icons/icons";
import Flex from "components/SharedComponents/Flex/Flex";
import { Link } from "react-router-dom";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import {
  LeftSection,
  RightSection,
  StyledLoginRegisterPage,
  TopContent,
} from "components/UnprotectedRoutesComponents/styles";

const LoginPage = () => {
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
          <AnchorLink to={"/register"}>
            <Button
              size="Large"
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
        </Flex>
      </TopContent>
      <LeftSection>
        <LoginForm />
      </LeftSection>
      <RightSection>
        <img
          src={LoginBGPhoto}
          alt="woman with cat background"
        />
      </RightSection>
    </StyledLoginRegisterPage>
  );
};

export default LoginPage;
