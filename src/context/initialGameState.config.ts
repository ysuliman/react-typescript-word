import { GameState, GuessLetterStatuses, LetterStatuses } from "./initialGameState";
import { targetWords } from "./words.config";

const NUMBER_OF_GUESSES = 6


/**
 * Creates a new game state
 * @returns Returns a new game state
 */
export const getNewGameState = () => {
    const targetWord = targetWords[Math.round(Math.random() * (targetWords.length - 1))]


    const guessLetterStatuses = [[]] as GuessLetterStatuses

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        guessLetterStatuses[i] = []
        for (let j = 0; j < targetWord.length; j++) {
            guessLetterStatuses[i][j] = 'none'
        }
    }

    const newGameState: GameState = {
        targetWord,
        numberOfGuesses: NUMBER_OF_GUESSES,
        activeGuessIndex: 0,
        currentGuesses: [''],
        letterStatuses: {} as LetterStatuses,
        guessLetterStatuses,
        isGuessMode: true,
        isShakeActiveRow: false,
        isDanceActiveRow: false,
        isFlipActiveRow: false,
        gameStart: false,
        alertArray: [],
        isLightMode: true
    }

    return newGameState
}