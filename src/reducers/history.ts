import { History_Actions } from '../actions/historyActions';

export type SquaresValueType = string | null;
export type HistoryType = { squares: SquaresValueType[] }[];

const initialState: HistoryType = [{ squares: Array(9).fill(null) }];

export const historyReducer = (state: HistoryType = initialState, action: History_Actions) => {
  switch (action.type) {
    case 'SELECT_SQUARE': {
      const payload = action.payload;
      const historyClone = state.slice(0, payload.stepNumber + 1);
      const current = historyClone[payload.stepNumber];
      const squaresClone = current.squares.slice();
      squaresClone[payload.index] = payload.player;

      return [...historyClone, { squares: squaresClone }];
    }

    default:
      return state;
  }
};
