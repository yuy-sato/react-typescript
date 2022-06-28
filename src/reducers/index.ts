import { SelectSquare } from '../actions/historyActions';
import { UpdateStepNumber } from '../actions/stepNumberActions';
import { UpdateXIsNext } from '../actions/xIsNextActions';
import { combineReducers } from 'redux';
import { historyReducer } from './history';
import { stepNumberReducer } from './stepNumber';
import { xIsNextReducer } from './xIsNext';

export const reducers = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer,
});

export type Actions = {
  selectSquareAction: SelectSquare;
  updateStepNumberAction: UpdateStepNumber;
  updateXIsNextAction: UpdateXIsNext;
};
