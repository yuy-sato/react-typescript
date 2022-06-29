import { FSA } from './FSAInterface';

export type StepNumber_Actions = FSA<'UPDATE_STEP_NUMBER', { step: number }>;

export type UpdateStepNumber = (step: number) => StepNumber_Actions;

export const updateStepNumber: UpdateStepNumber = (step: number): StepNumber_Actions => {
  return {
    type: 'UPDATE_STEP_NUMBER',
    payload: {
      step,
    },
  };
};
