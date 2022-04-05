export const initialGameState = {
  targetWord: 'sunnah',
  numberOfGuesses: 6,
  currentGuessIndex: 0,
  currentGuesses: ['']
}

export type gameState = typeof initialGameState

interface nonLetterDispatchAction { type: 'SUBMIT' | 'DELETE' }
interface letterDispatchAction { type: 'LETTERPRESS', letter: String }
export type gameDispatchAction = nonLetterDispatchAction | letterDispatchAction

export const gameReducer = (draft: gameState, action: gameDispatchAction) => {

  let currentGuessIndex = draft.currentGuessIndex

  let activeGuess = draft.currentGuesses[currentGuessIndex]
  const activeGuessLength = activeGuess.length

  const targetWord = draft.targetWord
  const targetWordLength = targetWord.length



  switch (action.type) {
    case 'LETTERPRESS':
      if (activeGuessLength >= targetWordLength) {
        return draft
      } else {
        activeGuess += action.letter
        draft.currentGuesses[currentGuessIndex] = activeGuess
      }
      console.log(activeGuess)
      return draft

    case 'DELETE':
      if (activeGuessLength === 0) {
        return draft
      } else {
        activeGuess = activeGuess.slice(0, -1)
        draft.currentGuesses[currentGuessIndex] = activeGuess
      }
      console.log(activeGuess)
      return draft

    case 'SUBMIT':
      if (activeGuessLength !== targetWordLength) {
        // Change to alert
        console.log('Word not long enough!');
        return draft

      } else {

        // Checking letters
        for (let i = 0; i < targetWordLength; i++) {
          const guessLetter = activeGuess[i]
          const targetLetter = targetWord[i]
          if (guessLetter === targetLetter) {
            // Set to correct
          } else if (targetWord.includes(guessLetter)) {
            // Set to wrong location
          } else {
            // Set to wrong letter
          }
        }
        // flip first letter to trigger reveal

        draft.currentGuessIndex += 1

        // Check win
        if (activeGuess === targetWord) {
          console.log('You won!') //CHANGE TO ALERT
          // change game mode
        }

        // Check lose
        if (draft.currentGuessIndex === draft.numberOfGuesses) {
          console.log('You lost!') //CHANGE TO ALERT
          // change game mode
        }
        return draft
      }

  }
  return draft;
};
