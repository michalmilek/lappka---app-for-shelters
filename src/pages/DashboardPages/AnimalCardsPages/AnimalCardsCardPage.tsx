import { StyledDashboardAddNewCardMainContent } from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import {
  CardButton,
  StyledCardFooter,
  StyledCardFormComponent,
  StyledCardHeader,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/DashboardAnimalCardsCard.styled";
import DashboardAnimalCardsCardForm from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/DashboardAnimalCardsCardForm";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { ArrowLeftIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import useDeviceType from "hooks/useDeviceType";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AnimalCardsCardPage = () => {
  const [isEditOn, setIsEditOn] = useState(false);
  const deviceType = useDeviceType();
  const navigate = useNavigate();
  const { id } = useParams();

  if (id)
    return (
      <StyledProtectedPageContent>
        <DashboardNavbar
          previousTitle="Karty zwierząt / "
          title="Bella"
        />
        <StyledDashboardAddNewCardMainContent>
          <StyledCardFormComponent>
            <StyledCardHeader>
              <CardButton
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
              </CardButton>

              {!isEditOn && (
                <CardButton
                  type="button"
                  onClick={() => setIsEditOn(true)}>
                  <Typography
                    tag="span"
                    variant="UI/UI Text 16 Medium Bold"
                    color="primary600">
                    Edytuj
                  </Typography>
                </CardButton>
              )}
            </StyledCardHeader>
            <DashboardAnimalCardsCardForm
              id={id}
              isEditOn={isEditOn}
            />
            {isEditOn && (
              <StyledCardFooter>
                <Button
                  size={deviceType === "desktop" ? "Large" : "Medium"}
                  variant="outline">
                  Anuluj
                </Button>
                <Button size={deviceType === "desktop" ? "Large" : "Medium"}>
                  Zapisz
                </Button>
              </StyledCardFooter>
            )}
          </StyledCardFormComponent>
        </StyledDashboardAddNewCardMainContent>
      </StyledProtectedPageContent>
    );

  return null;
};

export default AnimalCardsCardPage;
