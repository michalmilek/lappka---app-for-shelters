import styled, { keyframes } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const shimmer = keyframes`
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
`;

const DashboardMostPopularAnimalsContainerSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px #1018281a;
  grid-area: e;
  height: 100%;
  min-height: 35vh;
  width: 3fr;

  @media screen and (max-width: 1024px) {
    height: auto;
    width: 100%;
  }
`;

const SkeletonMostPopularAnimals = () => {
  return <DashboardMostPopularAnimalsContainerSkeleton />;
};

export default SkeletonMostPopularAnimals;
