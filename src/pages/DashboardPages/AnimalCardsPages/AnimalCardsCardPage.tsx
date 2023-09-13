import { StyledDashboardAddNewCardMainContent } from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import {
  CardButton,
  StyledCardFormComponent,
  StyledCardHeader,
} from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/utils/DashboardAnimalCardsCard.styled";
import DashboardAnimalCardsCardStateHandler from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsCard/DashboardAnimalCardsCardStateHandler";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import { ArrowLeftIcon } from "components/SharedComponents/icons/icons";
import Typography from "components/SharedComponents/Typography/Typography";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AnimalCardsCardPage = () => {
  const [isEditOn, setIsEditOn] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();

  if (id)
    return (
      <StyledProtectedPageContent>
        <DashboardNavbar />
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
                  {t("animalCard.return")}
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
                    {t("animalCard.edit")}
                  </Typography>
                </CardButton>
              )}
            </StyledCardHeader>
            <DashboardAnimalCardsCardStateHandler
              id={id}
              isEditOn={isEditOn}
            />
          </StyledCardFormComponent>
        </StyledDashboardAddNewCardMainContent>
      </StyledProtectedPageContent>
    );

  return null;
};

export default AnimalCardsCardPage;
