import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

export const FormContainer = styled.form`
  background: ${getColor("white")};
  padding-top: 40px;
  width: 60%;
  border-radius: 8px;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const AccountSettingsIMG = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: 1px solid #0000001a;
`;

export const AvatarChangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputsFirstPartContainer = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:not(:first-of-type) {
    margin-top: 32px;
  }
`;

export const PostalCodeCityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const PostalCodeContainer = styled.div`
  flex: 0 0 21.96%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px 0px 40px;
`;
