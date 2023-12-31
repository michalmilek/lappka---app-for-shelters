import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
`;

const SkeletonImg = styled.div`
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite;
  min-height: 20vh;

  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
  width: 100%;
  height: 100%;
`;


const shimmer2 = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const NewestAnimalImgSkeleton = styled.div`
  width: 100%;
  height: 215px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer2} 1.5s infinite;
`;

const DashboardNewestAnimalCardsItemContainerSkeleton = () => {
  return <SkeletonImg />;
};

export default DashboardNewestAnimalCardsItemContainerSkeleton;
