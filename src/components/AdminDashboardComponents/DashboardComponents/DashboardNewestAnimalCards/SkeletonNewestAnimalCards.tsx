import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
`;

const SkeletonDashboardNewestAnimalCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e0e0e0;
  grid-area: d;
  border-radius: 8px;
  height: 360px;
  box-shadow: 0px 1px 2px 0px #1018280f;
  animation: ${loadingAnimation} 1s infinite alternate;

  @media screen and (max-width: 1350px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const SkeletonDashboardNewestAnimalCardsContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #bdbdbd;
`;

const SkeletonDashboardNewestAnimalCardsContainerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: space-evenly;
  padding: 16px;
  flex-wrap: wrap;
  height: 100%;
`;

const SkeletonCard = styled.div`
  width: 200px;
  height: 220px;
  background-color: #bdbdbd;
  border-radius: 8px;
`;

const SkeletonNewestAnimalCards = () => {
  return (
    <SkeletonDashboardNewestAnimalCardsContainer>
      <SkeletonDashboardNewestAnimalCardsContainerHeader />
      <SkeletonDashboardNewestAnimalCardsContainerContent>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </SkeletonDashboardNewestAnimalCardsContainerContent>
    </SkeletonDashboardNewestAnimalCardsContainer>
  );
};

export default SkeletonNewestAnimalCards;
