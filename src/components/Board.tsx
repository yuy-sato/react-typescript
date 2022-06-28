import { HandleClick } from './Game';
import React from 'react';
import { Square } from './Square';
import { SquaresValueType } from '../reducers/history';

type Props = {
  squares: SquaresValueType[];
  onClick: HandleClick;
};

export const Board: React.FC<Props> = (props) => {
  const renderSquare = (i: number) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};
