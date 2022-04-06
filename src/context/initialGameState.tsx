export type LetterStatus = 'correct' | 'wrong-letter' | 'wrong-location' | 'none';

export type LetterStatuses = {
    [letter: string]: LetterStatus
};


export const initialGameState = {
    targetWord: 'sunnah',
    numberOfGuesses: 6,
    activeGuessIndex: 0,
    currentGuesses: [''],
    letterStatuses: {} as LetterStatuses,
    isGuessMode: true,
    isShakeActiveRow: false,
    isDanceActiveRow: false,
    isFlipActiveRow: false
}

export type GameState = typeof initialGameState