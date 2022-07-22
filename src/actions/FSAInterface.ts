export type FSA<T extends string, S extends object = Record<string, never>> = {
  type: T;
  payload: {
    [K in keyof S]: S[K];
  };
};

// K = 'player' | 'index' | 'stepNumber';
// S[K]で、Sに対してK型で得られるtypeを表現してる。 S['player'] だとstinrgが返る
