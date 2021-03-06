import React, { useContext } from 'react';

import { GameStateContext } from '../../context/game-state/GameStateProvider';
import TileRow from '../tile-row/TileRow.component';
import styles from './GuessGrid.module.css';

const GuessGrid = () => {
	const {
		activeGuessIndex,
		currentGuesses,
		targetWord,
		numberOfGuesses,
		isShakeActiveRow,
		isDanceActiveRow,
		isFlipActiveRow,
	} = useContext(GameStateContext);

	const tileRows = [...Array(numberOfGuesses)].map((_, index) => {
		const isActive = index === activeGuessIndex;
		return (
			<TileRow
				key={index}
				rowIndex={index}
				wordLength={targetWord.length}
				currentGuess={currentGuesses[index] || ''}
				activeGuessIndex={activeGuessIndex}
				isShakeRow={isActive && isShakeActiveRow}
				isDanceRow={isActive && isDanceActiveRow}
				isFlipRow={isActive && isFlipActiveRow}
			/>
		);
	});

	return <div className={styles['guess-grid']}>{tileRows}</div>;
};

export default GuessGrid;

// clamp(3rem, 3vh, 4rem)) clamp(3vw, 7vh, 7rem)
