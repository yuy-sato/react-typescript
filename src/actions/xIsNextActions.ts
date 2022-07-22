import { FSA } from './FSAInterface';

export type XIsNext_Actions = FSA<'UPDATE_X_IS_NEXT', { xIsNext: boolean }>;

export type UpdateXIsNext = (xIsNext: boolean) => XIsNext_Actions;

export const updateXIsNext: UpdateXIsNext = (xIsNext: boolean): XIsNext_Actions => {
  return {
    type: 'UPDATE_X_IS_NEXT',
    payload: {
      xIsNext,
    },
  };
};
