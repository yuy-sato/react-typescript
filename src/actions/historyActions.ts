import { FSA } from './FSAInterface';

export type History_Actions =
  | FSA<'SELECT_SQUARE', { player: string; index: number; stepNumber: number }>
  | FSA<'HOGE_ACTION'>;

export type SelectSquare = (player: string, index: number, stepNumber: number) => History_Actions;

export const selectSquare = (player: string, index: number, stepNumber: number): History_Actions => {
  return {
    type: 'SELECT_SQUARE',
    payload: {
      player,
      index,
      stepNumber,
    },
  };
};

export const hogeAction: History_Actions = {
  type: 'HOGE_ACTION',
  payload: {},
};
