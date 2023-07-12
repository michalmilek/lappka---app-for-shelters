const getStepStatus = (
  index: number,
  currentStep: number,
  complete: boolean
) => {
  const active = index + 1 === currentStep;
  const isComplete = index + 1 < currentStep || complete;

  return { active, complete: isComplete };
};

export default getStepStatus;
