import {
  AnimalCardsAddNewCardFooter,
  StyledDashboardAddNewCardMainContent,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import FormRow from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/DashboardAnimalCardsFormRow";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { ArrowLeftIcon } from "components/SharedComponents/icons/icons";
import Input from "components/SharedComponents/Inputs/Input";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import Typography from "components/SharedComponents/Typography/Typography";
import useDeviceType from "hooks/useDeviceType";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const StyledFormComponent = styled.form`
  border-radius: 8px;
  background: ${getColor("white")};
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
  width: 100%;
`;

const StyledHeader = styled.header`
  padding: 24px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`;

const StyledFormContentContainer = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledImgContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledImg = styled.img`
  flex: 1 1;
  width: 116px;
  height: 120px;
  border-radius: 12px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledFooter = styled.footer`
  padding: 16px 24px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;

  box-shadow: 0px 1px 0px 0px #eef0f2 inset;
`;

const ReturnButton = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
`;

const AnimalCardsCardPage = () => {
  const [isEditOn, setIsEditOn] = useState(false);
  const deviceType = useDeviceType();
  const navigate = useNavigate();

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        previousTitle="Karty zwierząt / "
        title="Bella"
      />
      <StyledDashboardAddNewCardMainContent>
        <StyledFormComponent>
          <StyledHeader>
            <ReturnButton
              type="button"
              onClick={() => {
                if (isEditOn) {
                  setIsEditOn(false);
                }

                if (!isEditOn) {
                  navigate(-1);
                }
              }}>
              <ArrowLeftIcon />{" "}
              <Typography
                color="midGray1"
                variant="UI/UI Text 16 Medium Bold">
                Wróć
              </Typography>
            </ReturnButton>

            {!isEditOn && (
              <ReturnButton
                type="button"
                onClick={() => setIsEditOn(true)}>
                <Typography
                  tag="span"
                  variant="UI/UI Text 16 Medium Bold"
                  color="primary600">
                  Edytuj
                </Typography>
              </ReturnButton>
            )}
          </StyledHeader>
          <StyledFormContentContainer>
            <StyledImgContainer>
              <StyledImg
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <StyledImg
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <StyledImg
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <StyledImg
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </StyledImgContainer>

            <StyledInputContainer>
              <FormRow label="Imię zwierzaka">
                <Input
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
              <FormRow label="Opis">
                <Textarea
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
              <FormRow label="Gatunek">
                <Input
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
              <FormRow label="Umaszczenie">
                <Input
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
              <FormRow label="Płeć">
                <Input
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
              <FormRow label="Waga">
                <Input
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
              <FormRow label="Sterylizacja">
                <Input
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
              <FormRow label="Widoczność">
                <Input
                  readOnly={!isEditOn}
                  inputSize="Large"
                />
              </FormRow>
            </StyledInputContainer>
          </StyledFormContentContainer>
          {isEditOn && (
            <StyledFooter>
              <Button
                size={deviceType === "desktop" ? "Large" : "Medium"}
                variant="outline">
                Anuluj
              </Button>
              <Button size={deviceType === "desktop" ? "Large" : "Medium"}>
                Zapisz
              </Button>
            </StyledFooter>
          )}
        </StyledFormComponent>
      </StyledDashboardAddNewCardMainContent>
    </StyledProtectedPageContent>
  );
};

export default AnimalCardsCardPage;
