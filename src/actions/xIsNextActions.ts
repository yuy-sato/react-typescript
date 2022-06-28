import { FSA } from './FSAInterface';

type Action = 'UPDATE_X_IS_NEXT';

export interface XIsNextAction extends FSA<boolean> {
  type: Action;
  payload: {
    xIsNext: boolean;
  };
}

export type UpdateXIsNext = (xIsNext: boolean) => XIsNextAction;

export const updateXIsNext: UpdateXIsNext = (xIsNext: boolean): XIsNextAction => {
  return {
    type: 'UPDATE_X_IS_NEXT',
    payload: {
      xIsNext,
    },
  };
};
