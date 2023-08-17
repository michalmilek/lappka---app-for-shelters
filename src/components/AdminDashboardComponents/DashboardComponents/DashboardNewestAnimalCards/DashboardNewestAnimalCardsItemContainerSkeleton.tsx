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
  width: 280px;
  height: 100%;
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s infinite;

  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1700px) {
    width: 250px;
  }

  @media screen and (max-width: 1550px) {
    width: 240px;
  }

  @media screen and (max-width: 1350px) {
    width: 180px;
    height: 150px;
  }

  @media screen and (max-width: 1024px) {
    width: 150px;
  }
  @media screen and (max-width: 550px) {
    width: 100px;
    height: 120px;
  }
`;

const DashboardNewestAnimalCardsItemContainerSkeleton = () => {
  return <SkeletonImg />;
};

export default DashboardNewestAnimalCardsItemContainerSkeleton;
