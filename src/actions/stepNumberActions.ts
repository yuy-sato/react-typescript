import { FSA } from './FSAInterface';

type Action = 'UPDATE_STEP_NUMBER';

export interface StepNumberAction extends FSA<number> {
  type: Action;
  payload: {
    step: number;
  };
}

export type UpdateStepNumber = (step: number) => StepNumberAction;

export const updateStepNumber: UpdateStepNumber = (step: number): StepNumberAction => {
  return {
    type: 'UPDATE_STEP_NUMBER',
    payload: {
      step,
    },
  };
};
