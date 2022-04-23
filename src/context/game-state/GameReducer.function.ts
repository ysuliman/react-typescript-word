import { GameDispatchAction } from './GameReducer';
import { GameState } from './InitialGameState';
import { dictionary } from './words.config';
import { getNewGameState } from './InitialGameStateConfig';

/**
 * @description - GameReducer is the reducer for the game state.
 * @param {GameState} draft - The current state of the game.
 * @param {GameDispatchAction} action - The action to be dispatched.
 * @returns {GameState} - The new state of the game.
 *
 **/

export const gameReducer = (draft: GameState, action: GameDispatchAction) => {
	// Get a new game state.
	if (action.type === 'NEWGAME') {
		draft = getNewGameState();
		return draft;
	}
	// Signals that the game has started.
	if (draft.gameStart) {
		draft.gameStart = false;
	}

	// Checks actions related to the game state.
	switch (action.type) {
		case 'CHECKWINLOSE':
			draft.isFlipActiveRow = false;
			// Checks if the game is won.
			if (
				draft.currentGuesses[draft.activeGuessIndex] ===
				draft.targetWord
			) {
				draft.isGuessMode = false;
				draft.isDanceActiveRow = true;
				draft.alerts.push({ alertMessage: 'You Won!', showTime: 5000 });
				return draft;

				// Checks if the game is lost.
			} else if (draft.activeGuessIndex === draft.numberOfGuesses - 1) {
				draft.isGuessMode = false;
				draft.alerts.push({
					alertMessage: draft.targetWord.toUpperCase(),
					showTime: 5000,
				});

				return draft;

				// Proceeds to the next guess.
			} else {
				if (
					draft.currentGuesses[draft.activeGuessIndex].length ===
					draft.targetWord.length
				)
					draft.activeGuessIndex += 1;
				draft.currentGuesses[draft.activeGuessIndex] = '';
				draft.isGuessMode = true;
				return draft;
			}

		case 'SHAKECOMPLETE':
			draft.isShakeActiveRow = false;
			return draft;

		case 'ALERTCOMPLETE':
			draft.alerts.shift();
			return draft;
	}

	// Checks actions related to the keyboard inputs.
	if (!draft.isGuessMode) return draft;

	let activeGuessIndex = draft.activeGuessIndex;
	let activeGuess = draft.currentGuesses[activeGuessIndex];
	const activeGuessLength = activeGuess.length;
	const targetWord = draft.targetWord;
	const targetWordLength = targetWord.length;

	switch (action.type) {
		case 'LETTERPRESS':
			if (activeGuessLength >= targetWordLength) {
				return draft;
			} else {
				activeGuess += action.letter.toLowerCase();
				draft.currentGuesses[activeGuessIndex] = activeGuess;
			}
			return draft;

		case 'DELETE':
			if (activeGuessLength === 0) {
				return draft;
			} else {
				activeGuess = activeGuess.slice(0, -1);
				draft.currentGuesses[activeGuessIndex] = activeGuess;
			}
			return draft;

		case 'SUBMIT':
			// Handles when the user has not entered enough letters.
			if (activeGuessLength !== targetWordLength) {
				draft.alerts.push({
					alertMessage: 'Not enough letters',
					showTime: 500,
				});
				draft.isShakeActiveRow = true;
				return draft;

				// Handles when guess is not in the dictionary.
			} else if (!dictionary.includes(activeGuess)) {
				draft.alerts.push({
					alertMessage: 'Not in word list',
					showTime: 800,
				});
				draft.isShakeActiveRow = true;
				return draft;
			} else {
				// Handles when the guess is in dictionary.
				for (let i = 0; i < targetWordLength; i++) {
					const guessLetter = activeGuess[i];
					const targetLetter = targetWord[i];

					// Handles when the letter is correct.
					if (guessLetter === targetLetter) {
						draft.guessLetterStatuses[activeGuessIndex][i] =
							'correct';
						draft.keyboardLetterStatuses[guessLetter] = 'correct';

						// Handles when the letter is in wrong position.
					} else if (targetWord.includes(guessLetter)) {
						draft.guessLetterStatuses[activeGuessIndex][i] =
							'wrong-location';
						draft.keyboardLetterStatuses[guessLetter] =
							'wrong-location';

						// Handles when the letter is not in the word.
					} else {
						draft.guessLetterStatuses[activeGuessIndex][i] =
							'wrong-letter';
						draft.keyboardLetterStatuses[guessLetter] =
							'wrong-letter';
					}
				}

				// Handle edge case of wrong location when correct letter found
				for (let i = 0; i < targetWordLength; i++) {
					const guessLetter = activeGuess[i];
					const currentGuessLetterStatuses =
						draft.guessLetterStatuses[activeGuessIndex];
					const guessLetterStatus =
						draft.guessLetterStatuses[activeGuessIndex][i];

					let isLetterFoundCorrect = false;
					let anotherLetterNotFound = false;

					if (guessLetterStatus === 'wrong-location') {
						// Determine if letter was also found to be correct
						for (let i = 0; i < targetWordLength; i++) {
							isLetterFoundCorrect =
								activeGuess[i] === guessLetter &&
								currentGuessLetterStatuses[i] === 'correct';
							if (isLetterFoundCorrect) break;
						}

						// Determine if another of the same letter exists the user has not found
						for (let i = 0; i < targetWordLength; i++) {
							anotherLetterNotFound =
								targetWord[i] === guessLetter &&
								!(currentGuessLetterStatuses[i] === 'correct');
							if (anotherLetterNotFound) break;
						}

						// Replace wrong-location status if same letter already found correct and no other same letter existed unfound
						if (isLetterFoundCorrect && !anotherLetterNotFound)
							draft.guessLetterStatuses[activeGuessIndex][i] =
								'wrong-letter';
					}
				}

				draft.isGuessMode = false;
				draft.isFlipActiveRow = true;

				return draft;
			}
	}
	return draft;
};
