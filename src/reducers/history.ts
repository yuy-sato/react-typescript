import { HistoryAction } from '../actions/historyActions';

export type SquaresValueType = string | null;
export type HistoryType = { squares: SquaresValueType[] }[];

const initialState: HistoryType = [{ squares: Array(9).fill(null) }];

export const historyReducer = (state: HistoryType = initialState, action: HistoryAction) => {
  switch (action.type) {
    case 'SELECT_SQUARE': {
      const historyClone = state.slice(0, action.payload.stepNumber + 1);
      const current = historyClone[action.payload.stepNumber];
      const squaresClone = current.squares.slice();
      squaresClone[action.payload.index] = action.payload.player;

      return [...historyClone, { squares: squaresClone }];
    }

    default:
      return state;
  }
};
