import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
`;

const SkeletonContainer = styled.div`
  background: #f0f0f0;
  border-radius: 6px;
  width: 100%;
  height: 80vh;
  animation: ${shimmer} 1.5s infinite;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 600px 100%;
`;

const AnimalCardsCardSkeleton = () => {
  return <SkeletonContainer />;
};

export default AnimalCardsCardSkeleton;
