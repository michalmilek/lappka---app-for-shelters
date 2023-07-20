import { StyledDashboardVoluntaryMainContent } from "components/AdminDashboardComponents/VoluntaryComponents/DashboardVoluntary.styled";
import Input from "components/SharedComponents/Inputs/Input";
import React from "react";

const AnimalCardsAddNewCardPage = () => {
  return (
    <StyledDashboardVoluntaryMainContent>
      <form>
        <Input
          inputSize="Large"
          label="Imię zwierzaka"
        />
        <Input
          inputSize="Large"
          label="Imię zwierzaka"
        />
        <Input
          inputSize="Large"
          label="Imię zwierzaka"
        />
      </form>
    </StyledDashboardVoluntaryMainContent>
  );
};

export default AnimalCardsAddNewCardPage;
