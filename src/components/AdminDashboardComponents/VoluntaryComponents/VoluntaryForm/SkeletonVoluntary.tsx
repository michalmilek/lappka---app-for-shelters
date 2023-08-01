import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    opacity: 0.6;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkeletonStyledDashboardVoluntaryMainContentFormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;
  background: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  animation: ${loadingAnimation} 1s infinite alternate;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const SkeletonStyledDashboardVoluntaryContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: ${loadingAnimation} 1s infinite alternate;
`;

const SkeletonStyledDashboardFooter = styled.footer`
  padding: 16px 24px;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  box-shadow: 0px 1px 0px 0px #eef0f2 inset;
  animation: ${loadingAnimation} 1s infinite alternate;
`;

const SkeletonVoluntary = () => (
  <SkeletonStyledDashboardVoluntaryMainContentFormsContainer>
    <SkeletonStyledDashboardVoluntaryContent />
    <SkeletonStyledDashboardFooter />
  </SkeletonStyledDashboardVoluntaryMainContentFormsContainer>
);

export default SkeletonVoluntary;
