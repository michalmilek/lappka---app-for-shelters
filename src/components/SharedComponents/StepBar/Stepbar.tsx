import { getColor } from "utils/styles/getStyle/getColor";
import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../Typography/Typography";

interface StepBarProps {
  steps: string[];
}

const StepBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #000;
`;

const StepItem = styled.div<{ active: boolean; complete: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 188px;
  white-space: nowrap;

  &:not(:first-of-type)::before {
    content: "";
    background-color: ${getColor("lightGray2")};
    position: absolute;
    width: 80%;
    height: 2px;
    right: 105%;
    top: 20%;
    transform: translateY(-50%);
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
    active || complete ? "#43be8d" : `${getColor("lightGray2")}`};
`;

const StepBarLabel = styled(Typography)`
  position: absolute;
  top: 100%;
  left: 0;

  &:last-of-type {
    display: none;
  }
`;

const StepBar: React.FC<StepBarProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

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
            <StepBarLabel
              variant="UI Small/UI Text 12 Reg"
              tag="p">
              {step}
            </StepBarLabel>
          )}
        </StepItem>
      ))}
    </StepBarContainer>
  );
};

export default StepBar;
