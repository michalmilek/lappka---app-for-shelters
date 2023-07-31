import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const AddNewEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${getColor("white")};
  border-radius: 8px;
  padding: 24px 0 0;
  min-width: 560px;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1200px) {
    min-width: auto;
  }
`;

export const AddNewEmployeeFormText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 24px;
`;

export const AddNewEmployeeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

export const AddNewEmployeeFormFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding: 16px 0 0px;
  box-shadow: 0px 1px 0px 0px #eef0f2 inset;
  padding: 16px 24px;
`;
