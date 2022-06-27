export const updateStepNumber = (step: number) => {
  return {
    type: 'UPDATE_STEP_NUMBER',
    payload: {
      step,
    },
  };
};
