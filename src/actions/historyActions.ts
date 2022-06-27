export const selectSquare = (player: string, index: number, stepNumber: number) => {
  return {
    type: 'SELECT_SQUARE',
    payload: {
      player,
      index,
      stepNumber,
    },
  };
};
