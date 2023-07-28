import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const StyledDashboardAddNewCardMainContent = styled.article`
  display: flex;
  width: calc(100% - 256px);
  gap: 16px;
  width: 100%;
  gap: 0;
  padding: 34px 24px 0;
  background: ${getColor("lightGray5")};
`;

export const AnimalCardsAddNewCardFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background: ${getColor("white")};
  border-radius: 8px;
  width: 50%;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const AnimalCardsAddNewCardFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 24px;
`;

export const AnimalCardsAddNewCardFlexInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const AnimalCardsAddNewCardFooter = styled.footer`
  border-top: 1px solid ${getColor("lightGray2")};
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 24px;
`;
