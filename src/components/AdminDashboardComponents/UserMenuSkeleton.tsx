import React from "react";
import styled, { keyframes } from "styled-components";

const SkeletonPulse = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const SkeletonAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${SkeletonPulse} 1.5s infinite;

  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;

const SkeletonNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SkeletonName = styled.div`
  width: 100px;
  height: 20px;
  border-radius: 4px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${SkeletonPulse} 1.5s infinite;

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 20px;
  }
`;

const SkeletonArrow = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${SkeletonPulse} 1.5s infinite;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const SkeletonOrgName = styled.div`
  width: 80px;
  height: 16px;
  border-radius: 4px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${SkeletonPulse} 1.5s infinite;
`;

const UserMenuSkeleton = () => {
  return (
    <SkeletonWrapper>
      <SkeletonAvatar />
      <div>
        <SkeletonNameContainer>
          <SkeletonName />
          <SkeletonArrow />
        </SkeletonNameContainer>
        <SkeletonOrgName />
      </div>
    </SkeletonWrapper>
  );
};

export default UserMenuSkeleton;
