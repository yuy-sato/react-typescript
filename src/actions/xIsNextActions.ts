export const updateXIsNext = (xIsNext: boolean) => {
  return {
    type: 'UPDATE_X_IS_NEXT',
    payload: {
      xIsNext,
    },
  };
};
