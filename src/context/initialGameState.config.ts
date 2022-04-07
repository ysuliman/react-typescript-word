import { GuessLetterStatuses, LetterStatuses } from "./initialGameState";
import { targetWords } from "./words.config";


export const newGameState = () => {
    const offsetFromDate = new Date(2022, 0, 6)
    const msOffset = Date.now() - offsetFromDate.valueOf()
    const minuteOffset = msOffset / 1000
    const targetWord = targetWords[Math.floor(minuteOffset) % targetWords.length]

    const numberOfGuesses = 6

    const guessLetterStatuses = [[]] as GuessLetterStatuses

    for (let i = 0; i < numberOfGuesses; i++) {
        guessLetterStatuses[i] = []
        for (let j = 0; j < targetWord.length; j++) {
            guessLetterStatuses[i][j] = 'none'
        }
    }

    const newGameState = {
        targetWord,
        numberOfGuesses,
        activeGuessIndex: 0,
        currentGuesses: [''],
        letterStatuses: {} as LetterStatuses,
        guessLetterStatuses,
        isGuessMode: true,
        isShakeActiveRow: false,
        isDanceActiveRow: false,
        isFlipActiveRow: false,
        gameStart: false,
        alertArray: [] as { alertMessage: string, showTime: number }[],
        isLightMode: true
    }

    return newGameState
}

export const initialGameState = newGameState()

export type GameState = typeof initialGameState
