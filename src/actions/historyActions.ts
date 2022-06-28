import { FSA } from './FSAInterface';

type Action = 'SELECT_SQUARE';

export interface HistoryAction extends FSA<string | number> {
  type: Action;
  payload: {
    player: string;
    index: number;
    stepNumber: number;
  };
}

export type SelectSquare = (player: string, index: number, stepNumber: number) => HistoryAction;

export const selectSquare: SelectSquare = (player: string, index: number, stepNumber: number): HistoryAction => {
  return {
    type: 'SELECT_SQUARE',
    payload: {
      player,
      index,
      stepNumber,
    },
  };
};
