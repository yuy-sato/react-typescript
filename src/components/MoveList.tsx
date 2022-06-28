import { HistoryType } from '../reducers/history';
import { JumpTo } from './Game';
import React from 'react';

type Props = {
  history: HistoryType;
  onClick: JumpTo;
};

export const MoveList = (props: Props) => {
  return (
    <ol>
      {props.history.map((_, move: number) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start';

        return (
          <li key={Math.random().toString(36).slice(-8)}>
            <button onClick={() => props.onClick(move)}>{desc}</button>
          </li>
        );
      })}
    </ol>
  );
};
