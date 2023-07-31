import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
`;

const SkeletonCard = styled.li`
  height: 82px;
  display: flex;
  background: #e0e0e0;
  padding: 16px;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
  min-width: 272px;
  border-radius: 8px;
  animation: ${loadingAnimation} 1s infinite alternate;

  @media screen and (max-width: 1439px) {
    min-width: 200px;
  }
`;

const SkeletonIconContainer = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #bdbdbd;
`;

const SkeletonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
`;

const SkeletonText = styled.div`
  width: 100%;
  height: 16px;
  background: #bdbdbd;
  border-radius: 4px;
`;

const Skeleton = () => (
  <SkeletonCard>
    <SkeletonIconContainer />
    <SkeletonTextContainer>
      <SkeletonText />
      <SkeletonText />
    </SkeletonTextContainer>
  </SkeletonCard>
);

export default Skeleton;
