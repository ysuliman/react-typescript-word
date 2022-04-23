import React, { useContext } from 'react';

import { GameDispatchContext } from '../../../context/game-state/GameStateProvider';
import { IsLightModeStateContext } from '../../../context/light-mode/LightModeProvider';
import classNames from 'classnames';
import styles from './NewGameButton.module.css';

const NewGameButton = () => {
	const isLightMode = useContext(IsLightModeStateContext);

	const gameDispatch = useContext(GameDispatchContext);

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
		gameDispatch({ type: 'NEWGAME' });
		e.currentTarget.blur();
	};

	return (
		<button
			className={classNames(
				styles['new-game'],
				isLightMode && styles.light
			)}
			onClick={handleClick}>
			NEW
			<br />
			GAME
		</button>
	);
};

export default NewGameButton;
