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
  box-shadow: 0px 1px 3px ${hexToRGBA("#1018281A", 0.2)};
`;

export const TopContent = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 33px;
  left: 157px;
  width: 1127px;
  height: 40px;
`;

export const LeftSection = styled.div`
  flex: 0 0 732px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 149px 120px 150px 156px;
`;

export const LeftSectionRegister = styled.div`
  flex: 0 0 732px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 121px 120px 59px 156px;
`;

export const RightSection = styled.div`
  flex: 0 0 708px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 259.98px 156px 240.25px 164.96px;
`;

export const RightRegisterSection = styled.div`
  flex: 0 0 708px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColor("primary050")};
  padding: 234.5px 156px 234.5px 96px;
`;
