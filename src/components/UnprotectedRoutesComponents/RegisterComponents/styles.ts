import { getColor } from "utils/styles/getStyle/getColor";
import { styled } from "styled-components";

interface StyledRegisterTitleContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  mb: "24px" | "32px";
}

export const LeftSectionRegister = styled.div`
  flex: 0 0 50.83%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 121px 120px 59px 156px;
  background-color: ${getColor("white")};

  @media screen and (max-width: 1200px) {
    padding: 121px 25px 40px;
  }

  @media screen and (max-width: 1000px) {
    background-color: ${getColor("primary050")};
    flex: 0 0 100%;
  }

  @media screen and (max-width: 800px) {
    padding: 86px 16px 0px;
  }
`;

export const RightRegisterSection = styled.div`
  flex: 0 0 49.17%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 234.5px 156px 234.5px 96px;

  @media screen and (max-width: 1350px) {
    padding: 121px 5% 120px 0;
  }

  @media screen and (max-width: 1200px) {
    padding: 121px 25px 120px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const RegisterPageTopContent = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 33px;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 33px 10.9% 0;

  @media screen and (max-width: 1250px) {
    padding: 20.33px 4.44% 0px;
  }
`;

export const RegisterPageTopContentButtonContainer = styled.div`
  display: flex;
  margin-right: 8px;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 500px) {
    gap: 12px;
  }
`;

export const StyledRegisterTitleContent = styled.div<StyledRegisterTitleContentProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${(props) => props.mb};
`;

export const StyledRegisterInputContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (max-width: 500px) {
    margin-bottom: 24px;
  }
`;

export const StyledRegisterInputStep1Container = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;

  @media screen and (max-width: 500px) {
    margin-bottom: 24px;
  }
`;

export const StyledRegisterButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  align-items: center;
`;

export const StyledRegisterHorizontalInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  justify-content: flex-start;
`;



export const StyledRegisterHorizontalInputContainerPostalCode = styled.div`
  width: 200px;
  height: 100%;
`;
