import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.6;
  }
`;

const CustomSkeleton = styled.div`
  width: 116px;
  height: 120px;
  background-color: #f0f0f0;
  animation: ${loadingAnimation} 1.5s infinite;
  border-radius: 6px;
`;

function ImageSkeleton() {
  return <CustomSkeleton />;
}

export default ImageSkeleton;
