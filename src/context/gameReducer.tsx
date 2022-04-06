import { GameState } from "./initialGameState";
import { GameDispatchAction } from "./GameReducer.config";

export const gameReducer = (draft: GameState, action: GameDispatchAction) => {
  switch (action.type) {
    case 'CHECKWINLOSE':
      draft.isFlipActiveRow = false
      if (draft.currentGuesses[draft.activeGuessIndex] === draft.targetWord) {
        draft.isGuessMode = false
        draft.isDanceActiveRow = true
        console.log('You won!') //CHANGE TO ALERT
        return draft

      } else if (draft.activeGuessIndex === draft.numberOfGuesses - 1) {
        draft.isGuessMode = false
        console.log('You lost!') //CHANGE TO ALERT
        return draft

      } else {
        draft.isGuessMode = true
        draft.activeGuessIndex += 1
        draft.currentGuesses[draft.activeGuessIndex] = ''
        return draft
      }

    case 'ENDSHAKE':
      draft.isShakeActiveRow = false
      return draft
  }

  if (!draft.isGuessMode) return draft

  let activeGuessIndex = draft.activeGuessIndex
  let activeGuess = draft.currentGuesses[activeGuessIndex]
  const activeGuessLength = activeGuess.length
  const targetWord = draft.targetWord
  const targetWordLength = targetWord.length

  switch (action.type) {
    case 'LETTERPRESS':
      if (activeGuessLength >= targetWordLength) {
        return draft
      } else {
        activeGuess += action.letter
        draft.currentGuesses[activeGuessIndex] = activeGuess
      }
      return draft

    case 'DELETE':
      if (activeGuessLength === 0) {
        return draft
      } else {
        activeGuess = activeGuess.slice(0, -1)
        draft.currentGuesses[activeGuessIndex] = activeGuess
      }
      return draft

    case 'SUBMIT':
      if (activeGuessLength !== targetWordLength) {
        console.log('Word not long enough!')// Change to alert
        draft.isShakeActiveRow = true
        return draft

      } else {
        for (let i = 0; i < targetWordLength; i++) {
          const guessLetter = activeGuess[i]
          const targetLetter = targetWord[i]
          if (guessLetter === targetLetter) {
            draft.letterStatuses[guessLetter] = 'correct'
          } else if (targetWord.includes(guessLetter)) {
            draft.letterStatuses[guessLetter] = 'wrong-location'
          } else {
            draft.letterStatuses[guessLetter] = 'wrong-letter'
          }
        }

        draft.isGuessMode = false
        draft.isFlipActiveRow = true

        return draft
      }

  }
  return draft;
};
