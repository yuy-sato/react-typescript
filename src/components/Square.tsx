import React from 'react';

type Props = {
  value: string | null;
  onClick: any;
};

export const Square = (props: Props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
