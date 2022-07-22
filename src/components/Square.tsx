import React from 'react';
import { SquaresValueType } from '../reducers/history';

type Props = {
  value: SquaresValueType;
  onClick: () => void;
};

export const Square = (props: Props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
