import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { hexToRGBA } from "utils/styles/getStyle/hexToRGBA";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  height: string;
}

export const StyledLoginRegisterPage = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const Form = styled.form`
  z-index: 5;
  border: 1px solid ${getColor("lightGray4")};
  padding: 32px;
  width: 456px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px ${hexToRGBA("#1018281A", 0.2)};
  background: ${getColor("white")};

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

export const SectionForm = styled.section`
  background: ${getColor("white")};
  border-radius: 8px;
  z-index: 5;
  border: 1px solid ${getColor("lightGray4")};
  padding: 32px;
  width: 456px;
  box-shadow: 0px 1px 3px ${hexToRGBA("#1018281A", 0.2)};

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 24px 16px;
  }
`;

export const TopContent = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 33px;
  left: 10.9%;
  width: 78.26%;
  height: 40px;

  @media screen and (max-width: 500px) {
    left: 16px;
  }
`;

export const LeftSection = styled.div`
  flex: 0 0 50.83%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 149px 120px 150px 156px;

  @media screen and (max-width: 1250px) {
    padding: 120px 0 150px 5%;
  }

  @media screen and (max-width: 1100px) {
    padding: 120px 0 150px 2%;
  }

  @media screen and (max-width: 1000px) {
    flex: 0 0 100%;
    background-color: ${getColor("primary050")};
  }

  @media screen and (max-width: 500px) {
    padding: 122px 4.44% 127px;
  }
`;

export const RightSection = styled.div`
  flex: 0 0 49.17%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 259.98px 156px 240.25px 164.96px;

  @media screen and (max-width: 1250px) {
    padding: 259.98px 5% 240.25px 0%;
  }

  @media screen and (max-width: 1100px) {
    padding: 259.98px 2% 240.25px 0;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const LeftSectionRegister = styled.div`
  flex: 0 0 50.83%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 121px 120px 59px 156px;
`;

export const RightRegisterSection = styled.div`
  flex: 0 0 49.17%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 234.5px 156px 234.5px 96px;
`;

export const LeftSectionResetPassword = styled.div`
  flex: 0 0 50.83%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 267px 120px 267px 156px;
`;

export const RightSectionResetPassword = styled.div`
  flex: 0 0 49.17%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 269.33px 156px 269.33px 139px;
`;