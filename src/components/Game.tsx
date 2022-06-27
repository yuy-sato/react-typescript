import { Board } from './Board';
import { Message } from './Message';
import { MoveList } from './MoveList';
import React from 'react';
import { calculateWinner } from '../lib/calculateWinner';
import { connect } from 'react-redux';
import { selectSquare } from '../actions/historyActions';
import { updateStepNumber } from '../actions/stepNumberActions';
import { updateXIsNext } from '../actions/xIsNextActions';
import { withLog } from '../lib/withLog';

type Square = {
  squares: [string | null];
};

type History = [Square];

type Props = {
  history: History;
  stepNumber: number;
  xIsNext: boolean;
  selectSquareAction: any;
  updateStepNumberAction: any;
  updateXIsNextAction: any;
};

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

  const handleClick = (i: number) => {
    const historyClone = history.slice(0, stepNumber + 1);
    const squaresClone = current.squares.slice();
    if (winner || squaresClone[i]) {
      return;
    }

    selectSquareAction(xIsNext ? 'X' : 'O', i, stepNumber);
    updateStepNumberAction(historyClone.length);
    updateXIsNextAction(!xIsNext);
  };

  const jumpTo = (step: number) => {
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

const mapStateToProps = (state: any) => {
  return {
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectSquareAction: (player: string, index: number, stepNumber: number) =>
      dispatch(selectSquare(player, index, stepNumber)),
    updateStepNumberAction: (step: number) => dispatch(updateStepNumber(step)),
    updateXIsNextAction: (xIsNext: boolean) => dispatch(updateXIsNext(xIsNext)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
