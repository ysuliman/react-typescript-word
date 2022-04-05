export const initialGameState = {
  targetWord: 'sunnah',
  numberOfGuesses: 6
}

export type gameState = typeof initialGameState

export const gameReducer = (draft: gameState) => {
  return draft;
};
