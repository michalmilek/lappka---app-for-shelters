import React from "react";
import Typography from "../Typography/Typography";
import getStepStatus from "./getStepStatus";
import {
  StepBarContainer,
  StepItem,
  StepNumberContainer,
  StepNumberInner,
} from "./styles";

interface StepBarProps {
  steps: string[];
  currentStep: number;
  complete: boolean;
  handleCurrentStep: (step: number) => void;
  handleComplete: (value: boolean) => void;
}

const StepBar: React.FC<StepBarProps> = ({
  steps,
  currentStep,
  complete,
  handleCurrentStep,
  handleComplete,
}) => {
  return (
    <StepBarContainer>
      {steps.map((step, index) => {
        const { active, complete: isComplete } = getStepStatus(
          index,
          currentStep,
          complete
        );

        return (
          <StepItem
            key={index}
            active={active}
            complete={isComplete}>
            <StepNumberContainer
              active={active}
              complete={isComplete}>
              <StepNumberInner
                active={active}
                complete={isComplete}
              />
            </StepNumberContainer>
            {!(steps.length - 1 === index) && (
              <Typography
                position="absolute"
                top={"100%"}
                left={"0px"}
                variant="UI Small/UI Text 12 Reg"
                tag="p">
                {step}
              </Typography>
            )}
          </StepItem>
        );
      })}
    </StepBarContainer>
  );
};

export default StepBar;
