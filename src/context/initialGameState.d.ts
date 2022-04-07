export type LetterStatus = 'correct' | 'wrong-letter' | 'wrong-location' | 'none';

export type LetterStatuses = {
    [letter: string]: LetterStatus;
};

export type GuessLetterStatuses = [LetterStatus[]];
