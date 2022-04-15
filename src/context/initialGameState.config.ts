import { GameState, GuessLetterStatuses, LetterStatuses } from "./InitialGameState";
import { targetWords } from "./words.config";

const NUMBER_OF_GUESSES = 6

/**
 * Creates a new game state
 * @returns Returns a new game state
 */
export const getNewGameState = (isLightMode: boolean = true) => {
    const targetWord = targetWords[Math.round(Math.random() * (targetWords.length - 1))]
    const guessLetterStatuses = [[]] as GuessLetterStatuses

    // Initialize the letter statuses of guess grid
    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        guessLetterStatuses[i] = []
        for (let j = 0; j < targetWord.length; j++) {
            guessLetterStatuses[i][j] = 'none'
        }
    }

    // Initialize the game state for the context provider
    const newGameState: GameState = {
        targetWord,
        numberOfGuesses: NUMBER_OF_GUESSES,
        activeGuessIndex: 0,
        currentGuesses: [''],
        keyboardLetterStatuses: {} as LetterStatuses,
        guessLetterStatuses,
        isGuessMode: true,
        isShakeActiveRow: false,
        isDanceActiveRow: false,
        isFlipActiveRow: false,
        gameStart: true,
        alerts: [],
        isLightMode: isLightMode
    }

    return newGameState
}