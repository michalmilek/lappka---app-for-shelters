import { getColor } from "utils/styles/getStyle/getColor";
import { styled } from "styled-components";

export const LeftSectionResetPassword = styled.div`
  flex: 0 0 50.83%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 267px 120px 267px 156px;
  background-color: ${getColor("white")};

  @media screen and (max-width: 1200px) {
    padding: 121px 25px 120px;
  }

  @media screen and (max-width: 1000px) {
    background-color: ${getColor("primary050")};
    flex: 0 0 100%;
  }

  @media screen and (max-width: 800px) {
    padding: 102.23px 16px 0px;
  }
`;

export const RightSectionResetPassword = styled.div`
  flex: 0 0 49.17%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 269.33px 156px 269.33px 139px;

  @media screen and (max-width: 1200px) {
    padding: 121px 25px 120px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ResetPasswordTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const ResetPasswordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (max-width: 500px) {
    margin-bottom: 24px;
  }
`;
