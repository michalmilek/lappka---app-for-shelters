import { getColor } from "utils/styles/getStyle/getColor";
import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../Typography/Typography";

interface StepBarProps {
  steps: string[];
  currentStep: number;
  complete: boolean;
  handleCurrentStep: (step: number) => void;
  handleComplete: (value: boolean) => void;
}

const StepBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StepItem = styled.div<{ active: boolean; complete: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  white-space: nowrap;

  &:not(:first-of-type)::before {
    content: "";
    position: absolute;
    width: 162px;
    height: 2px;
    right: 105%;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ active, complete }) =>
      active || complete
        ? `${getColor("primary500")}`
        : `${getColor("lightGray2")}`};
  }
`;

const StepNumberContainer = styled.div<{ active: boolean; complete: boolean }>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${({ active }) => (active ? "#43be8d" : "transparent")};
`;

const StepNumberInner = styled.div<{ active: boolean; complete: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active, complete }) =>
    active || complete
      ? `${getColor("primary500")}`
      : `${getColor("lightGray2")}`};
`;

const StepBar: React.FC<StepBarProps> = ({
  steps,
  currentStep,
  complete,
  handleCurrentStep,
  handleComplete,
}) => {
  return (
    <StepBarContainer>
      {steps.map((step, index) => (
        <StepItem
          key={index}
          active={index + 1 === currentStep}
          complete={index + 1 < currentStep || complete}>
          <StepNumberContainer
            active={index + 1 === currentStep}
            complete={index + 1 < currentStep || complete}>
            <StepNumberInner
              active={index + 1 === currentStep}
              complete={index + 1 < currentStep || complete}
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
      ))}
    </StepBarContainer>
  );
};

export default StepBar;
