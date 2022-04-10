import { getNewGameState } from "./InitialGameState.config";
import { GameState } from "./InitialGameState";
import { GameDispatchAction } from './GameReducer'
import { dictionary } from "./words.config";

export const gameReducer = (draft: GameState, action: GameDispatchAction) => {
  if (action.type === 'NEWGAME') {
    const { isLightMode } = draft
    draft = getNewGameState(isLightMode)
    return draft
  }

  if (draft.gameStart) {
    draft.gameStart = false
  }

  switch (action.type) {

    case 'CHECKWINLOSE':
      draft.isFlipActiveRow = false
      if (draft.currentGuesses[draft.activeGuessIndex] === draft.targetWord) {
        draft.isGuessMode = false
        draft.isDanceActiveRow = true
        draft.alerts.push({ alertMessage: 'You Won!', showTime: 6000 })

        return draft

      } else if (draft.activeGuessIndex === draft.numberOfGuesses - 1) {
        draft.isGuessMode = false
        draft.alerts.push({ alertMessage: draft.targetWord.toUpperCase(), showTime: 6000 })

        return draft

      } else {
        draft.isGuessMode = true
        draft.activeGuessIndex += 1
        draft.currentGuesses[draft.activeGuessIndex] = ''
        return draft
      }

    case 'SHAKECOMPLETE':
      draft.isShakeActiveRow = false
      return draft

    case 'ALERTCOMPLETE':
      draft.alerts.shift()
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
        activeGuess += action.letter.toLowerCase()
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
      // Handle user did not submit enough letters
      if (activeGuessLength !== targetWordLength) {
        draft.alerts.push({ alertMessage: 'Not enough letters', showTime: 500 })
        draft.isShakeActiveRow = true
        return draft

        // Handle guess is not a word in dictionary
      } else if (!dictionary.includes(activeGuess)) {
        draft.alerts.push({ alertMessage: 'Not in word list', showTime: 800 })
        draft.isShakeActiveRow = true
        return draft
      } else {

        // Analyze letters of user guess and set active guess statuses
        for (let i = 0; i < targetWordLength; i++) {
          const guessLetter = activeGuess[i]
          const targetLetter = targetWord[i]

          // Handle correct letter
          if (guessLetter === targetLetter) {
            draft.guessLetterStatuses[activeGuessIndex][i] = 'correct'
            draft.letterStatuses[guessLetter] = 'correct'

            // Handle letter in wrong location
          } else if (targetWord.includes(guessLetter)) {
            draft.guessLetterStatuses[activeGuessIndex][i] = 'wrong-location'
            draft.letterStatuses[guessLetter] = 'wrong-location'

            // Handle incorrect letter
          } else {
            draft.guessLetterStatuses[activeGuessIndex][i] = 'wrong-letter'
            draft.letterStatuses[guessLetter] = 'wrong-letter'
          }
        }

        // Handle edge case of wrong location when correct letter found
        for (let i = 0; i < targetWordLength; i++) {
          const guessLetter = activeGuess[i]
          const currentGuessLetterStatuses = draft.guessLetterStatuses[activeGuessIndex]
          const guessLetterStatus = draft.guessLetterStatuses[activeGuessIndex][i]

          let isLetterFoundCorrect = false
          let anotherLetterNotFound = false

          if (guessLetterStatus === 'wrong-location') {
            // Determine if letter was also found to be correct
            for (let i = 0; i < targetWordLength; i++) {
              isLetterFoundCorrect = (activeGuess[i] === guessLetter) && (currentGuessLetterStatuses[i] === 'correct')
              if (isLetterFoundCorrect) break
            }

            // Find out if another of the same letter exists the user has not found
            for (let i = 0; i < targetWordLength; i++) {
              anotherLetterNotFound = (targetWord[i] === guessLetter) && !(currentGuessLetterStatuses[i] === 'correct')
              if (anotherLetterNotFound) break
            }

            // Replace wrong-location status if same letter already found correct and no other same letter existed unfound
            if (isLetterFoundCorrect && !anotherLetterNotFound) draft.guessLetterStatuses[activeGuessIndex][i] = 'wrong-letter'
          }

        }

        draft.isGuessMode = false
        draft.isFlipActiveRow = true

        return draft
      }
  }
  return draft
}
