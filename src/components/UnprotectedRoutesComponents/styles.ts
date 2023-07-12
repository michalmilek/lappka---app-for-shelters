import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import { hexToRGBA } from "utils/styles/getStyle/hexToRGBA";

export const StyledUnathorizedPage = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const StyledUnathorizedForm = styled.form`
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

export const StyledUnathorizedSection = styled.section`
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

export const UnathorizedTopContent = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 56px 10.9% 0;

  @media screen and (max-width: 1250px) {
    padding: 20.33px 4.44% 0px;
  }
`;

export const UnathorizedTopContentButtonContainer = styled.div`
  display: flex;
  margin-right: 8px;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 500px) {
    gap: 12px;
  }
`;