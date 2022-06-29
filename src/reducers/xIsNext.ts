import { XIsNext_Actions } from '../actions/xIsNextActions';

export type XIsNextType = boolean;

const initialState: XIsNextType = true;

export const xIsNextReducer = (state: XIsNextType = initialState, action: XIsNext_Actions) => {
  switch (action.type) {
    case 'UPDATE_X_IS_NEXT':
      return action.payload.xIsNext;

    default:
      return state;
  }
};
