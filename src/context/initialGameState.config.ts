import { GuessLetterStatuses, LetterStatuses } from "./initialGameState";

const targetWord = 'sunnah'
const numberOfGuesses = 6
const guessLetterStatuses = [[]] as GuessLetterStatuses

for (let i = 0; i < numberOfGuesses; i++) {
    guessLetterStatuses[i] = []
    for (let j = 0; j < targetWord.length; j++) {
        guessLetterStatuses[i][j] = 'none'
    }
}

export const initialGameState = {
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
    gameStart: true,
    alertArray: [{ alertMessage: 'Sample Alert', showTime: 500 }] as { alertMessage: string, showTime: number }[]
}

export type GameState = typeof initialGameState