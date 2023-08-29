import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
`;

const SkeletonStyledAnimalCardsInfoItemContainer = styled.div`
  background: #e0e0e0;
  height: 82px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 6px;
  gap: 12px;
  box-shadow: 0px 1px 2px 0px #1018280f;
  animation: ${loadingAnimation} 1s infinite alternate;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

const SkeletonStyledAnimalCardsInfoCardIconContainer = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #bdbdbd;
`;

const SkeletonStyledAnimalCardsInfoItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const SkeletonAnimalCardsInfoItem = () => (
  <SkeletonStyledAnimalCardsInfoItemContainer>
    <SkeletonStyledAnimalCardsInfoCardIconContainer />
    <SkeletonStyledAnimalCardsInfoItemTextContainer>
      <div style={{ width: "80px", height: "14px", background: "#bdbdbd" }} />
      <div style={{ width: "50px", height: "24px", background: "#bdbdbd" }} />
    </SkeletonStyledAnimalCardsInfoItemTextContainer>
  </SkeletonStyledAnimalCardsInfoItemContainer>
);

export default SkeletonAnimalCardsInfoItem;
