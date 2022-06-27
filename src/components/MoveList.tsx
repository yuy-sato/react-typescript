import React from 'react';

type Square = {
  squares: [string | null];
};
type History = [Square];

type Props = {
  history: History;
  onClick: any;
};

export const MoveList = (props: Props) => {
  return (
    <ol>
      {props.history.map((_: any, move: number) => {
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
