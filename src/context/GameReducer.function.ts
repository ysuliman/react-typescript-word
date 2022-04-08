import { getNewGameState } from "./InitialGameState.config";
import { GameState } from "./initialGameState";
import { GameDispatchAction } from './GameReducer'
import { dictionary } from "./words.config";

export const gameReducer = (draft: GameState, action: GameDispatchAction) => {
  if (draft.gameStart) {
    draft.gameStart = false
  }

  switch (action.type) {
    case 'NEWGAME':
      draft = getNewGameState()
      draft.gameStart = true
      return draft

    case 'CHECKWINLOSE':
      draft.isFlipActiveRow = false
      if (draft.currentGuesses[draft.activeGuessIndex] === draft.targetWord) {
        draft.isGuessMode = false
        draft.isDanceActiveRow = true
        draft.alertArray.push({ alertMessage: 'You Won!', showTime: 8000 })

        return draft

      } else if (draft.activeGuessIndex === draft.numberOfGuesses - 1) {
        draft.isGuessMode = false
        draft.alertArray.push({ alertMessage: draft.targetWord.toUpperCase(), showTime: 8000 })

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

    case 'REMOVEALERT':
      draft.alertArray.shift()
      return draft

    case 'TOGGLELIGHTMODE':
      draft.isLightMode = !draft.isLightMode
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
        draft.alertArray.push({ alertMessage: 'Not enough letters', showTime: 500 })
        draft.isShakeActiveRow = true
        return draft

      } else if (!dictionary.includes(activeGuess)) {
        draft.alertArray.push({ alertMessage: 'Not in word list', showTime: 800 })
        draft.isShakeActiveRow = true
        return draft
      } else {
        for (let i = 0; i < targetWordLength; i++) {
          const guessLetter = activeGuess[i]
          const targetLetter = targetWord[i]
          if (guessLetter === targetLetter) {
            draft.guessLetterStatuses[activeGuessIndex][i] = 'correct'
            draft.letterStatuses[guessLetter] = 'correct'
          } else if (targetWord.includes(guessLetter)) {
            draft.guessLetterStatuses[activeGuessIndex][i] = 'wrong-location'
            draft.letterStatuses[guessLetter] = 'wrong-location'
          } else {
            draft.guessLetterStatuses[activeGuessIndex][i] = 'wrong-letter'
            draft.letterStatuses[guessLetter] = 'wrong-letter'
          }
        }

        draft.isGuessMode = false
        draft.isFlipActiveRow = true

        return draft
      }
  }
  return draft
}
