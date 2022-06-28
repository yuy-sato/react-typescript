import { Actions } from '../reducers/index';
import { Board } from './Board';
import { Dispatch } from 'redux';
import { HistoryAction } from '../actions/historyActions';
import { Message } from './Message';
import { MoveList } from './MoveList';
import React from 'react';
import { RootState } from '../store';
import { StepNumberAction } from '../actions/stepNumberActions';
import { XIsNextAction } from '../actions/xIsNextActions';
import { calculateWinner } from '../lib/calculateWinner';
import { connect } from 'react-redux';
import { selectSquare } from '../actions/historyActions';
import { updateStepNumber } from '../actions/stepNumberActions';
import { updateXIsNext } from '../actions/xIsNextActions';
import { withLog } from '../lib/withLog';

type Props = RootState & Actions;

export type HandleClick = (i: number) => void;
export type JumpTo = (step: number) => void;

const Game: React.FC<Props> = ({
  history,
  stepNumber,
  xIsNext,
  selectSquareAction,
  updateStepNumberAction,
  updateXIsNextAction,
}: Props) => {
  console.log(history);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick: HandleClick = (i) => {
    const historyClone = history.slice(0, stepNumber + 1);
    const squaresClone = current.squares.slice();
    if (winner || squaresClone[i]) {
      return;
    }

    selectSquareAction(xIsNext ? 'X' : 'O', i, stepNumber);
    updateStepNumberAction(historyClone.length);
    updateXIsNextAction(!xIsNext);
  };

  const jumpTo: JumpTo = (step) => {
    updateStepNumberAction(step);
    updateXIsNextAction(step % 2 === 0);
  };

  const Hoge = withLog('Hello')(Message);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i: number) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <MoveList history={history} onClick={jumpTo} />
      </div>
      <Hoge />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<HistoryAction | StepNumberAction | XIsNextAction>) => {
  return {
    selectSquareAction: (player: string, index: number, stepNumber: number) =>
      dispatch(selectSquare(player, index, stepNumber)),
    updateStepNumberAction: (step: number) => dispatch(updateStepNumber(step)),
    updateXIsNextAction: (xIsNext: boolean) => dispatch(updateXIsNext(xIsNext)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
