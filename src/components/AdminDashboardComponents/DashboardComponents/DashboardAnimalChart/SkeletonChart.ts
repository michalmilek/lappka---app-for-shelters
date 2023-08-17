import { keyframes, styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const pulseAnimation = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.4;
}
`;

export const SkeletonChart = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  grid-area: b;
  background: ${getColor("darkGray2")};
  box-shadow: 0px 1px 2px 0px #1018280f;
  box-shadow: 0px 1px 3px 0px #1018281a;
  animation: ${pulseAnimation} 1.5s infinite;
`;
