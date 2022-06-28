import { StepNumberAction } from '../actions/stepNumberActions';

export type StepNumberType = number;

const initialState: StepNumberType = 0;

export const stepNumberReducer = (state: StepNumberType = initialState, action: StepNumberAction) => {
  switch (action.type) {
    case 'UPDATE_STEP_NUMBER':
      return action.payload.step;

    default:
      return state;
  }
};
