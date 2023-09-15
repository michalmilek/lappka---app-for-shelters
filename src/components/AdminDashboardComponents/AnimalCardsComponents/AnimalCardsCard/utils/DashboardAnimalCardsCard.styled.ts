import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

interface StyledCardFormContainer extends React.ComponentProps<"form"> {
  isEditOn: boolean;
}

export const StyledCardFormComponent = styled.div`
  border-radius: 8px;
  background: ${getColor("white")};
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
  width: 60%;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const StyledCardHeader = styled.header`
  padding: 24px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCardFormContentContainer = styled.form<StyledCardFormContainer>`
  padding: 0 24px;
  padding-bottom: ${({ isEditOn }) => !isEditOn && "24px"};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledCardImgContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


export const StyledCardSingleImgContainer = styled.div`
  position: relative;
  flex: 1 1;
  width: 116px;
  height: 120px;

  max-width: 140px;
  border-radius: 12px;
`;

export const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const StyledCardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  &:nth-child(n) {
    z-index: calc(1200 - n);
  }
`;

export const StyledCardFooter = styled.footer`
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;

  box-shadow: 0px 1px 0px 0px #eef0f2 inset;
`;

export const CardButton = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  z-index: 50;

  &:focus-visible {
    outline: 1px solid ${getColor("focus")};
  }
`;

export const AnimalCardsCardFlexInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;


export const AnimalCardsCardBtnsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;