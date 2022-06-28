import React from 'react';

type Props = {
  message: string;
};

export const Message: React.FC<Props> = ({ message }) => {
  return <p>{message}</p>;
};
