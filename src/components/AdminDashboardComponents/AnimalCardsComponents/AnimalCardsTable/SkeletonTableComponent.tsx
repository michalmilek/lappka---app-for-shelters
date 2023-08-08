import styled, { keyframes, css } from "styled-components";

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

const SkeletonTableComponentContainer = styled.div`
  grid-area: b;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #e0e0e0;
  height: 100%;
  animation: ${loadingAnimation} 1s infinite alternate;
`;

const SkeletonTableComponentHeaderContainer = styled.div`
  width: 100%;
  padding: 12px 16px;
  background: #bdbdbd;
  animation: ${loadingAnimation} 1s infinite alternate;

  @media screen and (max-width: 1300px) {
    padding: 12px 4px;
  }
`;

const SkeletonTableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-bottom: 1px solid #ccc;
`;

const SkeletonTableHeader = styled.thead`
  width: 100%;
`;

const SkeletonTableTH = styled.th`
  padding: 12px 16px;
  text-align: left;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 1300px) {
    padding: 12px 4px;
  }
`;

const SkeletonTableTHTextContainer = styled.div`
  padding-right: 30px;

  @media screen and (max-width: 1300px) {
    padding-right: 0px;
  }
`;

const SkeletonTableTR = styled.tr`
  gap: 12px;
  background: #f0f0f0;
  &:nth-of-type(2n) {
    background: #f5f5f5;
  }
`;

const SkeletonTableTD = styled.td`
  padding: 12px 16px;
  gap: 12px;

  @media screen and (max-width: 1300px) {
    padding: 12px 4px;
  }
`;

const SkeletonDropdownContainer = styled.ul`
  z-index: 20;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 171px;
  height: 90px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 8px 0;
  border-radius: 6px;
  gap: 2px;
  position: absolute;
  top: 50%;
  right: 50%;

  box-shadow: 0px 12px 24px 0px #5b68713d;

  box-shadow: 0px 0px 1px 0px #1a202452;

  &.fadeIn {
    animation: ${loadingAnimation} 0.3s forwards;
  }

  &.fadeOut {
    animation: ${loadingAnimation} 0.3s forwards;
  }
`;

const SkeletonDropdownOption = styled.li`
  width: 100%;
  padding: 4px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const SkeletonTableFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 16px;
  box-shadow: 0px 1px 0px 0px #e5e9eb inset;
  @media screen and (max-width: 1300px) {
    padding: 10px 4px;
  }
`;

const SkeletonTableFooterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
`;

const SkeletonTableNumberButton = styled.button`
  background: #f0f0f0;
  padding: 4px 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #333;
  transition: all 0.3s ease-in-out;
  border: none;
  cursor: pointer;
`;

const SkeletonTableArrowButton = styled.button`
  height: 24px;
  width: 24px;
  background: #fff;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  & path {
    stroke: #ccc;
    fill: #ccc;
    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.5;
      `}
  }
`;

const SkeletonTableInputContainer = styled.div`
  width: 30%;
`;

const SkeletonAnimalCardsPageSizeSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SkeletonTableComponent = () => (
  <SkeletonTableComponentContainer>
    <SkeletonTableComponentHeaderContainer />
    <SkeletonTableContainer>
      <SkeletonTableHeader>
        <tr>
          <SkeletonTableTH />
        </tr>
      </SkeletonTableHeader>
      <tbody>
        <SkeletonTableTR>
          <SkeletonTableTD />
        </SkeletonTableTR>
      </tbody>
    </SkeletonTableContainer>

    <SkeletonTableFooterContainer>
      <SkeletonTableFooterButtonsContainer></SkeletonTableFooterButtonsContainer>
      <SkeletonTableInputContainer></SkeletonTableInputContainer>
    </SkeletonTableFooterContainer>
  </SkeletonTableComponentContainer>
);

export default SkeletonTableComponent;
