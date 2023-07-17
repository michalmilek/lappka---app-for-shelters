import {
  StyledUnathorizedPage,
  UnathorizedTopContent,
  UnathorizedTopContentButtonContainer,
} from "components/UnprotectedRoutesComponents/UnprotectedRoutes.styled";
import LappkaLogo from "components/UnprotectedRoutesComponents/LappkaLogo.png";
import LappkaMobileLogo from "components/UnprotectedRoutesComponents/LappkaMobileLogo.png";
import { CloseIcon } from "components/SharedComponents/icons/icons";
import AnchorLink from "components/SharedComponents/Anchor/AnchorLink";
import ResetPasswordBGPhoto from "components/UnprotectedRoutesComponents/ResetPasswordComponents/ResetPasswordBGPhoto.png";
import {
  LeftSectionResetPassword,
  RightSectionResetPassword,
} from "components/UnprotectedRoutesComponents/ResetPasswordComponents/ResetPassword.styled";
import { useParams } from "react-router-dom";
import ResetPasswordSendEmailForm from "components/UnprotectedRoutesComponents/ResetPasswordComponents/ResetPasswordSendEmailForm";
import ResetPasswordSetPasswordForm from "components/UnprotectedRoutesComponents/ResetPasswordComponents/ResetPasswordSetPasswordForm";
import useDeviceType from "hooks/useDeviceType";

const ResetPasswordPage = () => {
  const deviceType = useDeviceType();
  const { token } = useParams();
  return (
    <StyledUnathorizedPage>
      <UnathorizedTopContent>
        <img
          src={deviceType === "desktop" ? LappkaLogo : LappkaMobileLogo}
          alt="logo"
        />
        <UnathorizedTopContentButtonContainer>
          <AnchorLink to={"/"}>
            <CloseIcon
              height="24px"
              width="24px"
            />
          </AnchorLink>
        </UnathorizedTopContentButtonContainer>
      </UnathorizedTopContent>
      <LeftSectionResetPassword>
        {!token ? (
          <ResetPasswordSendEmailForm />
        ) : (
          <ResetPasswordSetPasswordForm />
        )}
      </LeftSectionResetPassword>
      <RightSectionResetPassword>
        <img
          src={ResetPasswordBGPhoto}
          alt="man with an animal in a hammock background"
        />
      </RightSectionResetPassword>
    </StyledUnathorizedPage>
  );
};

export default ResetPasswordPage;