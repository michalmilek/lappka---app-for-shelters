import styled, { keyframes } from "styled-components";
import { InfoCardInterface } from "./DashboardInfoCardsItem.styled";

const loadingAnimation = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
`;

const SkeletonCard = styled.li<InfoCardInterface>`
  display: flex;
  background: #e0e0e0;
  padding: 16px;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
  height: 100%;
  width: 100%;
  min-width: 20vw;
  border-radius: 8px;
  animation: ${loadingAnimation} 1s infinite alternate;

  grid-area: ${(props) => props.gridArea};

  @media screen and (max-width: 1800px) {
    width: 100%;
    min-width: 15vw;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
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

interface Props {
  gridArea: string;
}

const SkeletonCardItem = ({ gridArea }: Props) => (
  <SkeletonCard gridArea={gridArea}>
    <SkeletonIconContainer />
    <SkeletonTextContainer>
      <SkeletonText />
      <SkeletonText />
    </SkeletonTextContainer>
  </SkeletonCard>
);

export default SkeletonCardItem;
