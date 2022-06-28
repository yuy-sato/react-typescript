export interface FSA<T> {
  type: string;
  payload: {
    [key: string]: T;
  };
}
