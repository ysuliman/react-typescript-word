export type LetterStatus = 'correct' | 'wrong-letter' | 'wrong-location' | 'none';

export type LetterStatuses = {
    [letter: string]: LetterStatus;
};

export type GuessLetterStatuses = [LetterStatus[]];
export interface AlertMessage {
    alertMessage: string,
    showTime?: number
}
export type GameState = {
    targetWord: string,
    numberOfGuesses: number,
    /** The current position in the active row of the guess grid */
    activeGuessIndex: number,
    currentGuesses: string[],
    letterStatuses: LetterStatuses,
    guessLetterStatuses: GuessLetterStatuses,
    isGuessMode: boolean,
    isShakeActiveRow: boolean,
    isDanceActiveRow: boolean,
    isFlipActiveRow: boolean,
    gameStart: boolean,
    alerts: AlertMessage[],
    isLightMode: boolean
}

