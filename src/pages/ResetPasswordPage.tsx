import {
  LeftSection,
  LeftSectionResetPassword,
  RightSection,
  RightSectionResetPassword,
  StyledLoginRegisterPage,
  TopContent,
} from "components/UnprotectedRoutesComponents/styles";
import React from "react";
import LappkaLogo from "components/UnprotectedRoutesComponents/LappkaLogo.png";
import Flex from "components/SharedComponents/Flex/Flex";
import { CloseIcon } from "components/SharedComponents/icons/icons";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import ResetPasswordBGPhoto from "components/UnprotectedRoutesComponents/ResetPasswordComponents/ResetPasswordBGPhoto.png";
import ResetPasswordForm from "components/UnprotectedRoutesComponents/ResetPasswordComponents/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <StyledLoginRegisterPage>
      <TopContent>
        <img
          src={LappkaLogo}
          alt="logo"
        />
        <Flex
          mr="8px"
          alignItems="center">
          <AnchorLink to={"/"}>
            <CloseIcon
              height="24px"
              width="24px"
            />
          </AnchorLink>
        </Flex>
      </TopContent>
      <LeftSectionResetPassword>
        <ResetPasswordForm />
      </LeftSectionResetPassword>
      <RightSectionResetPassword>
        <img
          src={ResetPasswordBGPhoto}
          alt="man with an animal in a hammock background"
        />
      </RightSectionResetPassword>
    </StyledLoginRegisterPage>
  );
};

export default ResetPasswordPage;
